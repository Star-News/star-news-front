import Categories from '../Categories'
import Logo from '../logo'
import NewsLetterForm from '../NewsLetterForm'
import './style.css'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='element-list'>
                    <Logo />
                    <Categories orientation='columns' />
                    <NewsLetterForm />
                    <p>&copy; 2024 StarNews. Todos os direitos reservados®</p>
                </div>
            </div>
        </div>
    )
}