import { useEffect, useState } from 'react'
import Header from './components/Header'
import './style.css'
import gdelt from './gdelt'
import NewsList from './components/NewsList'

// https://api.gdeltproject.org/api/v2/doc/doc?
// query=%20sourcelang:por
// mode=ArtList 
// maxrecords=75 
// format=json 
// timespan=1d

function App() {
  
  const [articles, setArticles] = useState ([])
  const [loading, setLoading] = useState (false)

  useEffect(() => {
    if (!loading) {
      setLoading(true)
      gdelt.get('/doc', {
        params: {
          query: 'sourcelang:por', 
          maxrecords: 10,
          format: 'json',
          timespan: '1d'
        }
      })
      .then(({ data }) => {
        console.log(data?.articles)
        if (typeof data === 'string') {
          console.error('Error fetching data: ${data}')
        } else if (typeof data === 'object' && 'articles' in data) {
          setArticles(data.articles)
        } else {
          console.error('Error fetching articles')
        }
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        console.log('Erro ao buscar gdelt', err)
      })
    }
  }, [loading])

  return (
    <div>
      <Header />
      <NewsList articles={articles} />
      <div style={{
        width: '100%',
        height: '250px',
        background: 'black',
      }}>Foater</div>
    </div>
  )
}

export default App
