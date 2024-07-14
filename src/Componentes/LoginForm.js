import React from 'react';

// Componente funcional LoginForm que representa el formulario de inicio de sesión
const LoginForm = () => {
  // Maneja el clic en el botón de inicio de sesión
  const handleLoginClick = () => {
    window.location.href= "/";
  };

  // Estilos para el contenedor principal
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: 'rgba(240, 240, 240, 0.8)', 
  };

  // Estilos para el título
  const titleStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    margin: '20px 0',
  };

  // Estilos para el contenedor del formulario
  const formContainerStyle = {
    margin: '20px',
    padding: '10px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr', 
    gap: '20px', 
    alignItems: 'center',
  };
  
  // Estilos para los campos de entrada
  const inputStyle = {
    margin: '10px', 
    padding: '10px',
    width: 'calc(100% - 20px)', 
    borderRadius: '5px',
    border: '1px solid black',
    backgroundColor: '#E7E3DF',
  };

  // Estilos para el botón
  const buttonStyle = {
    margin: '20px',
    padding: '10px 20px',
    fontSize: '18px',
    backgroundColor: '#74482F',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <section style={containerStyle}>
      <h2 style={titleStyle}>INICIA SESIÓN</h2>
      <form style={formContainerStyle}>
        <div className="form-group">
          <label htmlFor="username">Usuario</label>
          <input type="text" className="form-control" id="username" style={{ ...inputStyle, marginTop: '20px' }} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" className="form-control" id="password" style={{ ...inputStyle, marginTop: '20px' }} required />
        </div>
        <button type="button" className="btn btn-dark btn-lg" style={buttonStyle} onClick={handleLoginClick}>Iniciar sesión</button>
      </form>
    </section>
  );
};

export default LoginForm;
