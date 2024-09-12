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
    onSpeak
}) {
    return (
        <div className='news-list'>
            <h2>Últimas Noticias - Por Relevância</h2>
            {
                articles.map(e => (
                    <div key={e.url}>
                        <NewsCard
                            title={e.title}
                            url={e.url}
                            seendate={e.seendate}
                            socialimage={e.socialimage}
                        />
                        <button className='acessibility-button' onClick={() => onSpeak(e.title)}>
                            <img className='img-acessibilty' src={SpeakerIcon}/>
                            <p className='title-speak'>Ouvir título</p>
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
