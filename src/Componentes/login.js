import React from 'react';

// Componente funcional Login que representa la página de inicio de sesión
const Login = () => {
  // Maneja el clic en el botón de registro
  const handleRegisterClick = () => {
    window.location.href = "/register";
  };

  // Maneja el clic en el botón de inicio de sesión
  const handleLoginClick = () => {
    window.location.href = "/loginform";
  };

  // Estilos para el contenedor principal
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: 'rgba(500, 500, 240, 0.8)', 
  };

  // Estilos para el texto de bienvenida
  const welcomeTextStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    margin: '20px 0 0 0',
  };

  // Estilos para el texto secundario
  const subTextStyle = {
    fontSize: '24px',
    margin: '10px 0 20px 0',
  };

  // Estilos para el contenedor de botones
  const buttonContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  // Estilos para los botones
  const buttonStyle = {
    margin: '0 10px',
    padding: '10px 20px',
    fontSize: '18px',
    backgroundColor: '#74482F',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  // Estilos para el texto "o"
  const orTextStyle = {
    fontSize: '18px',
    margin: '0 10px',
  };

  return (
    // Renderiza el contenido utilizando React.createElement
    React.createElement('div', { style: containerStyle },
      React.createElement('h1', { style: welcomeTextStyle }, 'BIENVENIDO'),
      React.createElement('p', { style: subTextStyle }, '¿Cómo quieres registrarte?'),
      React.createElement('div', { style: buttonContainerStyle },
        React.createElement('button', { style: buttonStyle, onClick: handleLoginClick }, 'Iniciar sesión'),
        React.createElement('span', { style: orTextStyle }, 'o'),
        React.createElement('button', { style: buttonStyle, onClick: handleRegisterClick }, 'Registrarse')
      )
    )
  );
};

export default Login;
