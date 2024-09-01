import { useState } from 'react'
import Categories from '../Categories'
import Logo from '../logo'
import './style.css'
import { useNavigate } from 'react-router-dom'


export default function Header() {

    const [textFilter, setTextFilter] = useState('')
    const navigate = useNavigate()

    return (
        <div className='header'>
            <Logo />
            <Categories />
            <div className='search-bar'>
                <input
                    placeholder='Pesquisar artigo'
                    className='input'
                    value={textFilter}
                    onChange={(e) => setTextFilter(e.target.value)}
                />
                <button className='button'
                    onClick={() => {
                        console.log(textFilter)
                        navigate({
                            search: `?filter=${textFilter}`
                        })
                    }}
                >

                    Pesquisar
                </button>
            </div>
            <div className='filters'>
                <input placeholder='Data de inicio' className='input' />
                <input placeholder='Data de fim' className='input' />
                <input placeholder='Ordenar por' className='input' />
            </div>
        </div>
    )
}