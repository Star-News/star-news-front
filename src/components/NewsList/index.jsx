// NewsList.jsx
import Pagination from '../Pagination';
import NewsCard from './NewsCard';
import './style.css';

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
            { // desmembramento da API, separando-a em cada campo
                articles.length > 0 ? (
                    articles.map(e => (
                        <div key={e.url} className='news-item'>
                            {/* Modificação do código, em vez do botão ao clicar ler, só de apertar no texto ele já lê */}
                            <div onClick={() => onSpeak(`${e.title}. ${e.summary}`)} className='clickable-news'>
                                <NewsCard
                                    title={e.title}
                                    url={e.url}
                                    seendate={e.seendate}
                                    socialimage={e.socialimage}
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Nenhuma notícia disponível no momento.</p> // Mensagem caso não haja artigos
                )
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
    );
}