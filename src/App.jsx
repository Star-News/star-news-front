import { useEffect, useState } from 'react'
import Header from './components/Header'
import './style.css'
import gdelt from './gdelt'
import NewsList from './components/NewsList'
import Footer from './components/Footer'
import { useParams } from 'react-router-dom'

// https://api.gdeltproject.org/api/v2/doc/doc?
// query=%20sourcelang:por
// mode=ArtList 
// maxrecords=75 
// format=json 
// timespan=1d

function App() {

  const [articles, setArticles] = useState([])
  const { category } = useParams()

  useEffect(() => {
    let APICall;
    if (category) {
      APICall = gdelt.get('/doc', {
        params: {
          query: `${category} sourcelang:por`,
          maxrecords: 10,
          format: 'json',
          timespan: '1d'
        }
      })
    } else {
      APICall = gdelt.get('/doc', {
        params: {
          query: 'sourcelang:por',
          maxrecords: 10,
          format: 'json',
          timespan: '1d'
        }
      })
    }
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
  }, [category])

  return (
    <div className='container'>
      <Header />
      <NewsList articles={articles} />
      <Footer />
    </div>
  )
}

export default App
