import { useEffect, useState } from "react";
import Categories from "../Categories";
import Logo from "../logo";
import "./style.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PatternFormat } from "react-number-format";
import Select from 'react-select';

// filtros
const OPTIONS = [
    { value: 'DateDesc', label: 'Mais Antigo' },
    { value: 'DateAsc', label: 'Mais Recente' }
];

const CATEGORY_OPTIONS = [
    { value: 'sports', label: 'Esportes' },
    { value: 'policy', label: 'Política' },
    { value: 'technology', label: 'Tecnologia' },
    { value: 'finances', label: 'Finanças' },
    { value: 'health', label: 'Saúde' },
    { value: 'education', label: 'Educação' },
    { value: 'entertainment', label: 'Entretenimento' }
];

export default function Header() {
    const [textFilter, setTextFilter] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [sort, setSort] = useState('');
    const [category, setCategory] = useState('');
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const paraTextFilter = searchParams.get('filter');
        const paramStartDate = searchParams.get('startDate');
        const paramEndDate = searchParams.get('endDate');
        const paramCategory = searchParams.get('category');
        const predefined = [
            { key: 'filter', value: paraTextFilter },
            { key: 'startDate', value: paramStartDate },
            { key: 'endDate', value: paramEndDate },
            { key: 'category', value: paramCategory }
        ];

        if (textFilter && (paraTextFilter === null || paraTextFilter === '')) {
            setTextFilter('');
        }
        if (startDate && (paramStartDate === null || paramStartDate === '')) {
            setStartDate('');
        }
        if (endDate && (paramEndDate === null || paramEndDate === '')) {
            setEndDate('');
        }
        if (category && (paramCategory === null || paramCategory === '')) {
            setCategory('');
        }

        if (OPTIONS.map(option => option.value).includes(sort)) {
            const params = [`sort=${sort}`];
            params.push(...predefined
                .filter(e => e.value !== null)
                .map(e => `${e.key}=${e.value}`)
            );
            navigate({
                search: `?${params.join('&')}`
            });
        } else {
            if (sort === '') {
                const params = predefined
                    .filter(e => e.value !== null)
                    .map(e => `${e.key}=${e.value}`);
                navigate({
                    search: `?${params.join('&')}`
                });
            }
        }
    }, [sort, category, searchParams]);

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
        if (category) {
            params.push(`category=${category}`);
        }
        navigate({
            search: params.length > 0 ? `?${params.join('&')}` : ``
        });
    };

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
                    onChange={(e) => setSort(e.value)}
                    options={OPTIONS}
                    placeholder="Ordenar por"
                    className="input select"
                />
                <Select
                    onChange={(e) => setCategory(e.value)}
                    options={CATEGORY_OPTIONS}
                    placeholder="Selecionar categoria"
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
    const [day, month, year] = str.split("/");
    return `${year}-${month}-${day}`;
}
