import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Login.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Login bem-sucedido");
    navigate('/App');
  };

  return (
    <form className='loginForm' onSubmit={handleSubmit}>
      <div className='welcomeTxtAll'>
        <h1 className='welcomeTxt'>Seja</h1>
        <h2 className='welcomeTxt'>Bem-vindo!</h2>
      </div>
      <div className='inputField'>
        <label htmlFor="email" className='inputLabel'>
          ENDEREÇO DE EMAIL:
        </label>
        <input
          type="email"
          id="email"
          className='inputValue'
          aria-label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='inputField'>
        <label htmlFor="password" className='inputLabel'>
          SENHA:
        </label>
        <input
          type="password"
          id="password"
          className='inputValue'
          aria-label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className='formOptions'>
        <div className='rememberMe'>
          <input
            type="checkbox"
            id="remember"
            className='rememberCheckbox'
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label className='rememberMeTxt' htmlFor="remember">
            Lembrar de mim
          </label>
        </div>
        <a className='rememberMeTxt' href="#">Esqueceu a senha?</a>
      </div>
      <button type="submit" className='loginButton'>
        Entrar
      </button>
      <div className='divider'>
        <div className='dividerLine'></div>
        <span className='dividerText'>ou</span>
        <div className='dividerLine'></div>
      </div>
      <div className='socialLoginContainer'>
        <button type="button" className='socialButtonGoogle'>
          <img
            loading="lazy"
            src=""
            alt="Login com Google"
            className='socialIcon'
          />
        </button>
        <button type="button" className='socialButtonFace'>
          <img
            loading="lazy"
            src="" 
            alt="Login com Facebook"
            className='socialIconFace'
          />
        </button>
      </div>
      <div className='loginRedirect'>
        <span>Não tem uma conta? </span>
        <button type="button" onClick={() => navigate('/register')} className='loginRedirectButton'>
          Registrar
        </button>
      </div>
    </form>
  );
};

// Corrigindo a exportação do componente
export default LoginForm;
