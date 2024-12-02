import React, { useRef, useEffect, useState } from 'react';
import { jwtDecode }  from 'jwt-decode'
import './style.css';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate } from 'react-router-dom';

import Loading from '../../Load/loading.jsx';

import './button.css';

const LoginRegister = () => {

  const [correoelectronico, setCorreoelEctronico] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState('');
  const navigate = useNavigate();
  const [mensajeBienvenidaLogin, setMensajeBienvenidaLogin] = useState();


  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [pass, setPass] = useState('');
  const [mensajeBienvenida, setMensajeBienvenida] = useState();
  const [errorRegister, setErrorRegister] = useState('');
  const [error2, setError2] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!correoelectronico || !contrasenia){
      setError('Ingrese Correo y Contraseña');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:3553/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ correoelectronico, contrasenia }) // Envía los datos en el cuerpo de la solicitud.
      });

      if (!response.ok) {
        throw new Error('Correo o Contraseña Incorrectos');
      }

      const data = await response.json();
      const token = data.token;

      let iduser, nombreUser, apellidoUser;

      if (token) {
        localStorage.setItem('token', token);
        
        const decodedToken = jwtDecode(token);
        
        iduser = decodedToken.usuario.iduser;
        nombreUser = decodedToken.usuario.nombre
        apellidoUser = decodedToken.usuario.apellido;

        setMensajeBienvenidaLogin(`¡Bienvenido, ${nombreUser} ${apellidoUser}!.`);
        
        setTimeout( async () => {
          const perfilResponse = await fetch(`http://localhost:3553/api/v1/users/buscarUsuario/${iduser}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          });

        if (!perfilResponse.ok) {
          throw new Error('No se pudo obtener el perfil del usuario');
        }
        

        const perfilData = await perfilResponse.json();
        const userData = perfilData;

        const rol = userData.idusertipo === 1 ? 'administrador' : 
                    userData.idusertipo === 2 ? 'empleado' : 'cliente';
                    localStorage.setItem('userRole', rol);

        switch(rol){
          case 'administrador':
            navigate('/home');
            break;
          case 'empleado':
            navigate('/home');
            break;
          case 'cliente':
            navigate('/home');
            break;
          default:
            navigate('/home');
            break;
        }

        // Opcional: Redireccionar o realizar otra acción.
      }, 2000); // Redirige después de 2 segundos
      }
    } catch (err) {
      setError('Hubo un error al intentar iniciar sesión. Por favor, intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };





  /*  REGISTRO  */
  const handleRegister = async (e) => {
    e.preventDefault();

    if(!nombre ||!apellido ||!correo ||!pass){
      setErrorRegister('Todos los campos son obligatorios');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError2('');

    try {
      const response = await fetch('http://localhost:3553/api/v1/users/crearUsuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, apellido, correoelectronico:correo, contrasenia:pass }) // Envía los datos en el cuerpo de la solicitud.
      });
      
      if (response.status === 409){
        setErrorRegister('El Correo Electrónico Ya Esta Registrado.');
      }

      if (!response.ok) {
        throw new Error('Error al registrarse');
      }


      setTimeout(() => {
        const isSuccess = true;
        if (isSuccess) {
          setMensajeBienvenida(`¡Bienvenido, ${nombre} ${apellido}! Registro exitoso.`);
          setTimeout(() => {
            navigate('/home');
          }, 2000); // Redirige al perfil después de 2 segundos
        } else {
          setError2('Error en el registro, intente nuevamente.');
        }
      }, 1000);

    }catch (err){
      setError2('Hubo un error al intentar registrarte. Por favor, intenta nuevamente.');
    };
  };

  
  // Tema Efectos ---------------------------------------
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
  //--------------------------------------------------

  

  return (
    <div className='custom'>
      <div className="container " id="container" ref={containerRef}>
        <div className="form-container sign-up-container ">
          {mensajeBienvenida ? (
          <div className="welcome-message">
            <h2>{mensajeBienvenida}</h2>
            <Loading/>
          </div>
          ) : (
          <>
          <form onSubmit={handleRegister}>
            <h5>Crea tu Cuenta</h5>
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
            <div>
              <input 
                type="text" 
                placeholder="Nombre" 
                onChange={(e) => setNombre(e.target.value)} 
              />
            </div>

            <div>
              <input 
                type="text" 
                placeholder="Apellido" 
                onChange={(e) => setApellido(e.target.value)} 
              />
            </div>

            <div>
              <input 
                type="email" 
                placeholder="Correo Electronico" 
                onChange={(e) => setCorreo(e.target.value)} 
              />
            </div>

            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'} // Controla si la contraseña es visible o no
                placeholder="Contraseña"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                style={{
                  paddingRight: '30px', // Espacio para el icono
                }}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  fontSize: '18px',
                }}
              >
                {showPassword ? '🙈' : '👁️'} {/* Icono cambia dependiendo de si la contraseña es visible */}
              </span>
              {/* Mostrar error si alguno de los campos está vacío */}
              {error2 && <div style={{ color: 'red' }}>{errorRegister}</div>}
            </div>

            <button className="button-custom2" type='submit'>
                <span className="button-lg-custom2">
                    <span className="button-sl-custom2"></span>
                    <span className="button-text-custom2">Iniciar Sesion</span> 
                </span>
            </button>
          </form>
        </>
        )}

        {/* Login */}
        </div>
        <div className="form-container sign-in-container">
        {mensajeBienvenidaLogin ? (
          <div className="welcome-message">
            <h2>{mensajeBienvenidaLogin}</h2>
            <Loading/>
          </div>
          ) : (
          <>
          <form onSubmit={handleSubmit}>
            <h5>Iniciar Sesión</h5>
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
            <input
                type="correoelectronico"
                placeholder="Correo Electronico"
                id="correoelectronico"
                value={correoelectronico}
                onChange={(e) => setCorreoelEctronico(e.target.value)}
                
              />
            <div style={{ position: 'relative'}}>
              <input
                placeholder="Contraseña"
                id="contrasenia"
                type={showPassword ? 'text' : 'password'}
                value={contrasenia}
                onChange={(e) => setContrasenia(e.target.value)}
                style={{
                  paddingRight: '30px',  // Espacio para el icono
                }}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  fontSize: '18px',
                }}
              >
                {showPassword ? '🙈' : '👁️'}
              </span>
            </div>
            {/* Mostrar error si alguno de los campos está vacío */}
            {error && <div style={{ color: 'red' }}>{error}</div>}

              <a href="#">Olvidaste tu contraseña?</a>

            <button className="button-custom" type='submit'>
                <span className="button-lg-custom">
                    <span className="button-sl-custom"></span>
                    <span className="button-text-custom">Iniciar Sesion</span>
                </span>
            </button>
            {/* <button>Iniciar sesión</button> */}
          </form>
        </>
        )}

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
