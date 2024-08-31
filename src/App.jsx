import { useEffect, useState } from 'react'
import Header from './components/Header'
import './style.css'
import gdelt from './gdelt'
import NewsList from './components/NewsList'
import Footer from './components/Footer'
import { useParams } from 'react-router-dom'

const RESULT_PER_PAGE = 10

function App() {

  const [articles, setArticles] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const { category } = useParams()

  const totalPages = Math.ceil(articles.length / RESULT_PER_PAGE)

  useEffect(() => {
    setCurrentPage(0)
    const APICall = gdelt.get('/doc', {
      params: {
        query: category
          ? `${category} sourcelang:por`
          : `sourcelang:por`,
        maxrecords: 250,
        format: 'json',
        timespan: '1d'
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
  }, [category, currentPage])
  
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
        articles={articles.slice(
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
