import React from 'react';

// Componente funcional Register que representa la página de registro
const Register = () => {
  // Función para manejar el clic en el botón de registro
  const handleRegisterClick = () => {
    window.location.href = "/"; // Redirige a la página principal
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
      <h2 style={{ fontSize: '36px', fontWeight: 'bold', margin: '20px 0' }}>REGISTRARSE</h2>
      <form style={formContainerStyle}>
        <div>
          <label htmlFor="username">Usuario</label>
          <input type="text" style={inputStyle} className="form-control" id="username" required />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input type="password" style={inputStyle} className="form-control" id="password" required />
        </div>
        <div>
          <label htmlFor="date">Fecha de Nacimiento</label>
          <input type="date" style={inputStyle} className="form-control" id="date" required />
        </div>
        <div>
          <label htmlFor="id">Cédula</label>
          <input type="text" style={inputStyle} className="form-control" id="id" required />
        </div>
        <button type="button" className="btn btn-dark btn-lg" style={buttonStyle} onClick={handleRegisterClick}>Registrarse</button>
      </form>
    </section>
  );
};

export default Register;
