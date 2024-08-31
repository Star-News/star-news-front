import { useState } from 'react'
import './style.css'

export default function Pagination({
    results: _results,
    currentPage,
    totalPages,
    onClickPage,
    onNext,
    onPrevious
}) {

    const [results, setResults] = useState(_results ?? 0)

    return (
        <div className='pagination'>
            <div className='buttons'>
                <button
                    className='left'
                    disabled={currentPage === 0}
                    onClick={() => {
                        if (onPrevious) {
                            onPrevious()
                        }
                    }}
                ></button>
                {
                    paginationArray(currentPage + 1, totalPages, 2).map((n) => (
                        n === -1
                            ? (
                                <button>
                                    ...
                                </button>
                            )
                            : (
                                <button onClick={() => {
                                    if (onClickPage) {
                                        onClickPage(n)
                                    }
                                }} className={n === currentPage + 1 ? 'current' : ''}>
                                    {n}
                                </button>
                            )
                    ))
                }
                <button
                    className='right'
                    disabled={currentPage === totalPages - 1}
                    onClick={() => {
                        if (onNext) {
                            onNext()
                        }
                    }}
                ></button>
            </div>
            mostrando {results} resultados
        </div>
    )
}

function paginationArray(current, highest, max) {
    const result = [1];

    const start = Math.max(2, current, max)
    const end = Math.min(highest - 1, current + max)

    if (start > 2) {
        result.push(-1);
    }

    for (let i = start; i <= end; i++) {
        result.push(i);
    }

    if (end < highest - 1) {
        result.push(-1);
    }

    if (highest !== 1) {
        result.push(highest);
    }

    return result;
}

// AJEITAR BARRA DE PAGINAÇÃO