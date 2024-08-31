import { Link } from 'react-router-dom'
import './style.css'

const categories = [
    {
        name: 'Esportes',
        url: '/sports'
    },
    {
        name: 'Política',
        url: '/politics'
    },
    {
        name: 'Tecnologia',
        url: '/technology'
    },
    {
        name: 'Finanças',
        url: '/finance'
    },
    {
        name: 'Saúde',
        url: '/health'
    },
    {
        name: 'Educação',
        url: '/education'
    },
    {
        name: 'Entretenimento',
        url: '/entertainment'
    },
]

export default function Categories({ orientation = 'horizontal'}) {

    const middle = Math.ceil(categories.length / 2)
    const col1 = categories.slice(0, middle)
    const col2 = categories.slice(middle, categories.length)

    return orientation === 'horizontal' ? (
        <div className='category-columns'>
            {
                categories.map(e => (
                    <Link key={e.url} to={e.url}>{e.name}</Link>
                ))
            }
        </div>
    ) : (
        <div className='category-list'>
            <div className='category-list column-list'>
                {
                    col1.map(e => (
                        <Link key={e.url} to={e.url}>{e.name}</Link>
                    ))
                }
            </div>
            <div className='category-list column-list'>
                {
                    col2.map(e => (
                        <Link key={e.url} to={e.url}>{e.name}</Link>
                    ))
                }
            </div>
        </div>
    )
}