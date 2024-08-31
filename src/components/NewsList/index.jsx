import Pagination from '../Pagination'
import NewsCard from './NewsCard'
import './style.css'

export default function NewsList({ articles }) {
    return (
        <div className='news-list'>
            <h2>Últimas Noticias - Por Relevância</h2>
            {
                articles.map(e => (
                    <NewsCard
                        key={e.url}
                        title={e.title}
                        url={e.url}
                        seendate={e.seendate}
                        socialimage={e.socialimage}
                    />
                ))
            }
            <Pagination total={5} results={10} />
        </div>
    )
}