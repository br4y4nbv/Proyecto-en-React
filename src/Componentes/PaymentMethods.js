import React from 'react';
import { FaPaypal, FaCreditCard, FaCcMastercard, FaCcVisa, FaArrowLeft } from 'react-icons/fa';

// Componente funcional PaymentMethods que representa los métodos de pago
const PaymentMethods = () => {
  // Maneja el clic en el botón de retroceso
  const handleGoBack = () => {
    window.history.back();
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

  // Maneja la compra y muestra una alerta
  const handlePurchase = () => {
    alert('¡Producto comprado con éxito!');
  };

  // Estilos para la sección principal
  const sectionStyle = {
    margin: '20px',
    padding: '10px',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '20px',
    alignItems: 'center',
    border: '1px solid #ddd',
    backgroundColor: 'rgba(240, 240, 240, 0.8)',
  };

  // Estilos para la imagen
  const imageStyle = {
    width: '100%',
    borderRadius: '5px',
  };

  // Estilos para el texto
  const textStyle = {
    textAlign: 'center',
  };

  return (
    <div>
      <main style={{ marginTop: '20px', fontWeight: 'bold', maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
        <div>
          {/* Botón para volver a la página anterior */}
          <button className="btn btn-dark" style={{ backgroundColor: '#74482F', marginLeft: '10px', marginTop: '20px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} onClick={handleGoBack}>
            <FaArrowLeft /> Volver
          </button>
          <h2 style={{ textAlign: 'center' }}><strong>Proceso de Pago</strong></h2>
        </div>
        <section style={sectionStyle}>
          <div>
            {/* Imagen del producto */}
            <img src="imagenes/Rectangle 325.jpg" style={imageStyle} alt="Short sleeve polo shirt" />
          </div>
          <div style={textStyle}>
            <h5 className="card-title">Short sleeve polo shirt</h5>
            <p className="card-text"><strong>Precio</strong></p>
            <p className="card-text">$0.00</p>
          </div>
        </section>
        <div className="container">
          <h6><strong>Elige un método de Pago</strong></h6>
          <ul>
            {/* Iconos de métodos de pago */}
            <FaPaypal style={{ color: 'blue', fontSize: '35px' }} />
            <FaCreditCard style={{ fontSize: '35px' }} />
            <FaCcMastercard style={{ fontSize: '35px' }} />
            <FaCcVisa style={{ fontSize: '35px' }} />
          </ul>
        </div>
        <hr className="container" />
        <section>
          <div className="container">
            {/* Formulario para ingresar los datos de pago */}
            <form style={formContainerStyle}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre" style={{ margin: '10px', padding: '10px', width: '200px', borderRadius: '5px', border: '1px solid #ccc' }} />
              </div>
              <div className="form-group">
                <label htmlFor="tarjeta">Número de Tarjeta:</label>
                <input type="text" className="form-control" id="tarjeta" placeholder="Ingresa el número de tu tarjeta" style={{ margin: '10px', padding: '10px', width: '200px', borderRadius: '5px', border: '1px solid #ccc' }} />
              </div>
            </form>
            <form style={formContainerStyle}>
              <div className="row justify-content-center">
                <div className="col-md-12">
                  <div className="form-group d-flex">
                    <div className="mr-2">
                      <label htmlFor="fecha">Fecha de Expiración:</label>
                      <input type="date" className="form-control" id="fecha" style={{ margin: '10px', padding: '10px', width: '200px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    </div>
                    <div>
                      <label htmlFor="cvv">CVV:</label>
                      <input type="text" className="form-control" id="cvv" placeholder="Ingresa el CVV de tu tarjeta" style={{ margin: '10px', padding: '10px', width: '200px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                {/* Botón para confirmar la compra */}
                <button onClick={handlePurchase} className="btn btn-dark" style={{ margin: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}>Aceptar</button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PaymentMethods;
