import Pagination from '../Pagination'
import NewsCard from './NewsCard'
import SpeakerIcon from '../../assets/SpeakerIcon.svg'
import './style.css'

export default function NewsList({
    articles,
    onClickPage,
    onNext,
    onPrevious,
    currentPage,
    totalPages,
    fontSize,
    onSpeak 
}) {
    return (
        <div className='news-list' style={{ fontSize: `${fontSize}px` }}>
            <h2>Últimas Notícias - Por Relevância</h2>
            {
                articles.map(e => (
                    <div key={e.url}>
                        <NewsCard
                            title={e.title}
                            url={e.url}
                            seendate={e.seendate}
                            socialimage={e.socialimage}
                            summary={e.summary}
                        />
                        {/* Botão para converter o título em fala */}
                        <button className='speak-button' onClick={() => onSpeak(`${e.title}. ${e.summary}`)}>
                            <img src={SpeakerIcon} alt="Ouvir notícia" className='img-accessibility' />
                            <p>Ouvir Notícia</p>
                        </button>
                    </div>
                ))
            }
            <Pagination
                totalPages={totalPages}
                results={10}
                onClickPage={onClickPage}
                onNext={onNext}
                onPrevious={onPrevious}
                currentPage={currentPage}
            />
        </div>
    )
}
