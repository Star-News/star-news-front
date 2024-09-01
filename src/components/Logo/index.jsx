import { Link } from 'react-router-dom'
import StarLogo from '../../assets/StarLogo.svg'
import'./style.css' 

export default function Logo() {
    return (
        <Link to='/'>
            <div className='logo'>
                <img src={StarLogo} />
            </div>
        </Link>
    )
}