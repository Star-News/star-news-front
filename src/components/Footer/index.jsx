import Categories from '../Categories'
import Logo from '../logo.svg'
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
                </div>
            </div>
        </div>
    )
}