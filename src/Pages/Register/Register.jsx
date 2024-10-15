import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica se as senhas coincidem
    if (password !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }

    
    console.log('Registro bem-sucedido');
    navigate('/'); 
  };

  const handleGoogleLogin = () => {
    console.log('Login com Google');
   
    navigate('/');  
  };

  const handleFacebookLogin = () => {
    console.log('Login com Facebook');
   
    navigate('/');  
  };

  return (
    <form className='loginForm' onSubmit={handleSubmit}>
      <div className='welcomeTxtAll'>
        <h1 className='welcomeTxt'>Crie sua Conta</h1>
        <h2 className='welcomeTxt'>Bem-vindo!</h2>
      </div>
      <div className='inputField'>
        <label htmlFor="name" className='inputLabel'>NOME:</label>
        <input
          type="text"
          id="name"
          className='inputValue'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className='inputField'>
        <label htmlFor="email" className='inputLabel'>ENDEREÇO DE EMAIL:</label>
        <input
          type="email"
          id="email"
          className='inputValue'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='inputField'>
        <label htmlFor="password" className='inputLabel'>SENHA:</label>
        <input
          type="password"
          id="password"
          className='inputValue'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className='inputField'>
        <label htmlFor="confirmPassword" className='inputLabel'>CONFIRMAR SENHA:</label>
        <input
          type="password"
          id="confirmPassword"
          className='inputValue'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <div className='formOptions'>
        <div className='agreeTerms'>
          <input
            type="checkbox"
            id="agreeTerms"
            className='agreeCheckbox'
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            required
          />
          <label className='agreeTermsTxt' htmlFor="agreeTerms">
            Eu aceito os termos e condições
          </label>
        </div>
      </div>
      <button type="submit" className='loginButton'>Registrar</button>
      <div className='divider'>
        <div className='dividerLine'></div>
        <span className='dividerText'>ou</span>
        <div className='dividerLine'></div>
      </div>
      <div className='socialLoginContainer'>
        <button type="button" className='socialButton' onClick={handleGoogleLogin}>
          <img loading="lazy" src="" alt="Google" className='socialIcon' />
          <span className='socialButtonText'>Registrar com Google</span>
        </button>
        <button type="button" className='socialButton' onClick={handleFacebookLogin}>
          <img loading="lazy" src="" alt="Facebook" className='socialIconFace' />
          <span className='socialButtonText'>Registrar com Facebook</span>
        </button>
      </div>
      <div className='loginRedirect'>
        <span>Já tem uma conta? </span>
        <button type="button" onClick={() => navigate('/login')} className='loginRedirectButton'>
          Entrar
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;