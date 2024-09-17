import { useEffect, useState } from 'react'
import Loader from './components/ProgressBar'
import Header from './components/Header'
import './style.css'
import gdelt from './gdelt'
import NewsList from './components/NewsList'
import Footer from './components/Footer'
import { useParams, useSearchParams } from 'react-router-dom'

const RESULT_PER_PAGE = 10

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [fontSize, setFontSize] = useState(16) // Tamanho de fonte padrão

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false)
      }, 4000)
    }

    fakeDataFetch()
  }, [])

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
    const sort = searchParams.get('sort')

    const APICall = gdelt.get('/doc', {
      params: {
        query: category ? `${category} sourcelang:por` : `sourcelang:por`,
        maxrecords: 250,
        format: 'json',
        ...(startDate ? { startdatetime: startDate } : {}),
        ...(endDate ? { enddatetime: endDate } : {}),
        ...(sort ? { sort } : {}),
        ...(!startDate && !endDate ? { timespan: '1d' } : {})
      }
    })

    APICall.then(({ data }) => {
      if (typeof data === 'string') {
        console.error('Error fetching data: ${data}')
      } else if (typeof data === 'object' && 'articles' in data) {
        setArticles(data.articles)
      } else {
        console.error('Error fetching articles')
      }
    }).catch(err => {
      console.log('Erro ao buscar gdelt', err)
    })
  }, [category, searchParams])

  useEffect(() => {
    const filter = searchParams.get('filter')
    if (filter && articles.length > 0) {
      const subset = articles.filter(article =>
        article.title.toLowerCase().includes(filter.toLowerCase())
      )
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

  // Função para converter texto em fala
  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text)
      speech.lang = 'pt-BR'
      window.speechSynthesis.speak(speech)
    } else {
      alert('Text-to-Speech não é suportado no seu navegador.')
    }
  }
  const increaseFontSize = () => setFontSize(prev => prev + 2)
  const decreaseFontSize = () => setFontSize(prev => (prev > 12 ? prev - 2 : prev))

  return isLoading ? (
    <Loader />
  ) : (
    <div className='container'>
      <Header />
      {/* Botões para alterar o tamanho da fonte */}
      <div className="font-size-controls">
        <button onClick={increaseFontSize}>A+</button>
        <button onClick={decreaseFontSize}>A-</button>
      </div>
      <NewsList
        articles={filteredArticles.slice(
          currentPage * RESULT_PER_PAGE,
          currentPage * RESULT_PER_PAGE + RESULT_PER_PAGE
        )}
        onClickPage={n => setCurrentPage(n - 1)}
        onPrevious={() => setCurrentPage(prev => prev - 1)}
        onNext={() => setCurrentPage(prev => prev + 1)}
        currentPage={currentPage}
        totalPages={totalPages}
        fontSize={fontSize}
        onSpeak={speak} 
      />
      <Footer />
    </div>
  )
}

export default App