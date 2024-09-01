import { useEffect, useState } from 'react'
import Header from './components/Header'
import './style.css'
import gdelt from './gdelt'
import NewsList from './components/NewsList'
import Footer from './components/Footer'
import { useParams, useSearchParams } from 'react-router-dom'

const RESULT_PER_PAGE = 10

function App() {

  const [articles, setArticles] = useState([])
  const [filteredArticles, setFilteredArticles] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const { category } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  const totalPages = Math.ceil(filteredArticles.length / RESULT_PER_PAGE)

  useEffect(() => {
    setCurrentPage(0)
    const startDate = searchParams.get('startDate')
    const endDate = searchParams.get('endDate')
    
    const APICall = gdelt.get('/doc', {
      params: {
        query: category
          ? `${category} sourcelang:por`
          : `sourcelang:por`,
        maxrecords: 250,
        format: 'json',
        ...(startDate ? {startdatetime: startDate} : {}),
        ...(endDate ? {enddatetime: endDate} : {}),
      }
    })

    APICall
      .then(({ data }) => {
        if (typeof data === 'string') {
          console.error('Error fetching data: ${data}')
        } else if (typeof data === 'object' && 'articles' in data) {
          setArticles(data.articles)
        } else {
          console.error('Error fetching articles')
        }
      })
      .catch((err) => {
        console.log('Erro ao buscar gdelt', err)
      })
  }, [category, searchParams ]) //apagar o currentPage era o erro
  
  useEffect(() => {
    const filter = searchParams.get('filter')
    if (filter && articles.length > 0) {
      const subset = articles.filter(article => {
        return article.title.toLowerCase().includes(filter.toLowerCase())
      })
      setFilteredArticles(subset)
    } else {
      setFilteredArticles(articles)
    }
  }, [searchParams, articles])

  useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
  }, [category, currentPage])

  return (
    <div className='container'>
      <Header />
      <NewsList
        articles={filteredArticles.slice(
          currentPage * RESULT_PER_PAGE,
          currentPage * RESULT_PER_PAGE + RESULT_PER_PAGE)
        }
        onClickPage={n => setCurrentPage(n - 1)}
        onPrevious={() => setCurrentPage(prev => prev - 1)}
        onNext={() => setCurrentPage(prev => prev + 1)}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      <Footer />
    </div>
  )
}

export default App
