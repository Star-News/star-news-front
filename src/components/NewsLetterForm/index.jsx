import './style.css'

export default function NewsLetterForm() {
    return (
        <div className='newsletter'>
            <h4>Assine nossa newsletter</h4>
            <input className='input' placeholder='Seu email'/>
            <button>Assinar</button>
        </div>
    )
}