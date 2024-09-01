import { useEffect, useState } from "react";
import Categories from "../Categories";
import Logo from "../logo";
import "./style.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PatternFormat } from "react-number-format";
import Select from 'react-select';

const OPTIONS = [
    'DateDesc',
    'DateAsc',
    'ToneDesc',
    'ToneAsc'
]


export default function Header() {
    const [textFilter, setTextFilter] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [sort, setSort] = useState('')
    const navigate = useNavigate();
    const [searchParams] = useSearchParams()

    useEffect(() => {
        const paraTextFilter = searchParams.get('filter')
        const paramStartDate = searchParams.get('startDate')
        const paramEndDate = searchParams.get('endDate')
        const predefined = [
            {
                key: 'filter',
                value: paraTextFilter
            },
            {
                key: 'startDate',
                value: paramStartDate
            },
            {
                key: 'endDate',
                value: paramEndDate
            }
        ]
        if (textFilter && (paraTextFilter === null || paraTextFilter === '')) {
            setTextFilter('')
        }
        if (startDate && (paramStartDate === null || paramStartDate === '')) {
            setStartDate('')
        }
        if (endDate && (paramEndDate === null || paramEndDate === '')){
            setEndDate('')
        }
        if (OPTIONS.includes(sort)) {
            const params = [`sort=${sort}`]
            params.push(...predefined
                .filter(e => e.value !== null)
                .map(e => `${e.key}=${e.value}`)
            )
            navigate({
                search: `?${params.join('&')}`
            })
        } else {
            if (sort === '') {
                const params = predefined
                    .filter(e => e.value !== null)
                    .map(e => `${e.key}=${e.value}`)
                navigate({
                    search: `?${params.join('&')}`
                })
            }
        }
    }, [sort, searchParams])

    const onClickSearchBtn = () => {
        let params = [];
        if (textFilter) {
            params.push(`filter=${textFilter}`);
        }
        if (startDate && validateDateString(startDate)) {
            params.push(`startDate=${formatDateString(startDate)}`);
        }
        if (endDate && validateDateString(endDate)) {
            params.push(`endDate=${formatDateString(endDate, false)}`);
        }
        navigate({
            search: params.length > 0 ? `?${params.join(`$`)}` : ``
        });
    };
    console.log(startDate)


    return (
        <div className="header">
            <Logo />
            <Categories />
            <div className="search-bar">
                <input
                    placeholder="Pesquisar artigo"
                    className="input"
                    value={textFilter}
                    onChange={(e) => setTextFilter(e.target.value)}
                />
                <button className="button" onClick={onClickSearchBtn}>
                    Pesquisar
                </button>
            </div>
            <div className="filters">
                <PatternFormat
                    format="##/##/####"
                    mask="_"
                    placeholder="Data de inicio"
                    className="input"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
                <PatternFormat
                    format="##/##/####"
                    mask="_"
                    placeholder="Data de fim"
                    className="input"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
                <Select
                    onChange={(e) => setSort(e.target.value)}
                    options ={OPTIONS}
                    placeholder="Ordenar por"
                    className="input select"
                />
            </div>
        </div>
    );
}

function formatDateString(str, isStart = true) {
    const [day, month, year] = str.split("/");
    return `${year}${month}${day}${isStart ? "000000" : "235959"}`;
}

function validateDateString(str) {
    if (str.includes("_")) {
        return false;
    }

    const date = new Date(transformDateString(str));
    return !isNaN(date.getTime());
}

function transformDateString(str) {
    // DD/MM/YYYY
    const [day, month, year] = str.split("/");

    // YYYY-MM-DD
    return `${year}-${month}-${day}`;
}
