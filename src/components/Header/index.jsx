import Categories from '../Categories'
import Logo from '../logo'
import './style.css'


export default function Header() {
    return (
        <div className='header'>
            <Logo />
            <Categories />
            <div className='search-bar'>
                <input placeholder='Pesquisar artigo' className='input' />
                <button>Pesquisar</button>
            </div>
            <div className='filters'>
                <input placeholder='Data de inicio' className='input'/>
                <input placeholder='Data de fim' className='input'/>
                <input placeholder='Ordenar por' className='input'/>
            </div>
        </div>
    )
}