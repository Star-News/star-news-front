import { useState } from 'react'
import './style.css'

export default function Pagination({ results: _results, total }) {

   const [results, setResults] = useState(_results ?? 0)

   const numButtons = Array.from({ length: total })

    return (
        <div className='pagination'>
            <div className='buttons'>
                <button disabled className='left'></button>
                {
                    numButtons.map((_, i) => (
                        <button className={i === 1 ? 'current' : ''}>{i + 1}</button>
                    ))
                }
                <button className='right'></button>
            </div>
            mostrando {results} resultados
        </div>
    )
}
