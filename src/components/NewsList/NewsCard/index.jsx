import moment from 'moment'
import { getPastTime } from '../../../utils'
import './style.css'
import DefaultImg from '../../../assets/ImgDefault.png'
import { useRef } from 'react'

export default function NewsCard({
    title,
    url,
    seendate,
    socialimage
}) {

    const isHttps = url.startsWith('https')
    const rest = isHttps ? url.substring(8) : url.substring(7)
    const [domain] = rest.split('/')
    const imgRef = useRef(null)

    return (
        <div className='news-card'>
            <div className='general-info'>
                <h3>{title}</h3>
                <a href={url} target='_blank'>{domain}</a>
                <p>{moment(seendate).format('DD/MM/YYYY - HH:mm')}</p>
                <p>há {getPastTime(seendate)} horas atrás</p>
            </div>
            <div className='img'>
                <img ref={imgRef} onError={() => {
                    if (imgRef.current) {
                        imgRef.current.src = DefaultImg
                    }
                }} src={socialimage} />
            </div>
        </div>
    )
}