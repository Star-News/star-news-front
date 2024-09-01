import { useEffect, useState } from 'react'
import Categories from '../Categories'
import Logo from '../logo'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { PatternFormat } from 'react-number-format'


export default function Header() {

    const [textFilter, setTextFilter] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const navigate = useNavigate()

    console.log({ startDate, endDate })
    useEffect(() => {
        if (startDate || endDate) {
            let params = []
            if (startDate) {
                params.push(`startDate=${formatDateString(startDate)}`)
            }
            if (endDate) {
                params.push(`endDate=${formatDateString(endDate, false)}`)
            }
            navigate({
                search: `?${params.join('&')}`
            })
        } else {
            navigate({
                search: ``
            })
        }
    }, [startDate, endDate])


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
                <PatternFormat
                    format='##/##/####'
                    mask='_'
                    placeholder='Data de inicio'
                    className='input'
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
                <PatternFormat
                    format='##/##/####'
                    mask='_'
                    placeholder='Data de fim'
                    className='input'
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
                <input placeholder='Ordenar por' className='input' />
            </div>
        </div>
    )
}

function formatDateString(str, isStart = true) {
    const [day, month, year] = str.split('/')
    return `${year}${month}${day}${isStart ? '000000' : '235959' }`
}