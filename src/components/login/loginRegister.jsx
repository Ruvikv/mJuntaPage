import React, { useRef, useEffect } from 'react';
import './style.css';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './button.css';

const LoginRegister = () => {
  const containerRef = useRef(null);
  

  useEffect(() => {
    const container = containerRef.current;

    const handleSignUp = () => {
      container.classList.add('right-panel-active');
    };

    const handleSignIn = () => {
      container.classList.remove('right-panel-active');
    };

    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');

    signUpButton.addEventListener('click', handleSignUp);
    signInButton.addEventListener('click', handleSignIn);

    // Cleanup
    return () => {
      signUpButton.removeEventListener('click', handleSignUp);
      signInButton.removeEventListener('click', handleSignIn);
    };
  }, []);

  return (
    <div className='custom'>
      <div className="container border " id="container" ref={containerRef}>
        <div className="form-container sign-up-container ">
          <form action="#">
            <h1>Crea tu Cuenta</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"><FacebookRoundedIcon fontSize='large'/></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google" id="red"><GoogleIcon fontSize='large'/></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"><LinkedInIcon  fontSize='large'/></i>
              </a>
            </div>
            <span>o usa tu email como registro</span>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Apellido" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <button className="button2-custom">
                <span className="button-lg2-custom">
                    <span className="button-sl2-custom"></span>
                    <span className="button-text2-custom">Iniciar Sesion</span>
                </span>
            </button>
          
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Iniciar Sesión</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"><FacebookRoundedIcon fontSize='large'/></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google" id="red"><GoogleIcon fontSize='large'/></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"><LinkedInIcon fontSize='large' /></i>
              </a>
            </div>
            <span>o usa tu email</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Olvidaste tu contraseña?</a>

            <button className="button-custom">
                <span className="button-lg-custom">
                    <span className="button-sl-custom"></span>
                    <span className="button-text-custom">Iniciar Sesion</span>
                </span>
            </button>
            
            {/* <button>Iniciar sesión</button> */}
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>¡Bienvenido!</h1>
              <p>Inicia sesión con tu cuenta</p>
              <button className="ghost" id="signIn">
                Inicia sesión
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hola!</h1>
              <p>Crear una cuenta</p>
              <button className="ghost" id="signUp">
                Registrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
