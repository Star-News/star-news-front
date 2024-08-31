import NewsCard from './NewsCard'
import './style.css'

export default function NewsList({ articles }) {
    return (
        <div className='news-list'>
            <h2>news of today</h2>
            {
                articles.map(e => (
                    <NewsCard
                        title={e.title}
                        url={e.url}
                        seendate={e.seendate}
                        socialimage={e.socialimage}
                    />
                ))
            }
        </div>
    )
}