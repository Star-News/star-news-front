import StarLogo from '../../assets/StarLogo.svg'
import './style.css'

const categories = [
    'categoria',
    'categoria',
    'categoria',
    'categoria',
    'categoria',
    'categoria',
    'categoria',
]

export default function Header() {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={StarLogo} />
            </div>
            <div className='category-list'>
                {
                    categories.map(e => (
                        <p>{e}</p>
                    ))
                }
            </div>
            <div className='search-bar'>
                <input />
                <button>Pesquisar</button>
            </div>
            <div className='filter'>
                <input />
                <input />
                <input />
            </div>
        </div>
    )
}