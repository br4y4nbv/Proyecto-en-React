import React from 'react';
import { FaArrowLeft, FaTruck } from 'react-icons/fa';

const ShippingManagement = () => {
  // Función para manejar la acción de volver a la página anterior
  const handleGoBack = () => {
    window.history.back();
  };

  // Estilo para el contenedor del formulario
  const formContainerStyle = {
    margin: '20px',
    padding: '10px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    alignItems: 'center',
  };

  // Estilo para el botón
  const buttonStyle = {
    margin: '20px',
    padding: '10px 20px',
    fontSize: '18px',
    justifyContent: 'right',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  // Función para manejar la generación de la etiqueta
  const handleGenerateLabel = () => {
    alert('¡Etiqueta generada con éxito!');
  };

  return (
    <div>
      <main style={{ marginTop: '20px', fontWeight: 'bold', maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
        <div>
          <button
            className="btn btn-dark"
            style={{ backgroundColor: '#74482F', marginLeft: '10px', marginTop: '20px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            onClick={handleGoBack}
          >
            <FaArrowLeft /> Volver
          </button>
        </div>
        <section>
          <div className="container">
            <h2 style={{ textAlign: 'center' }}><strong>ETIQUETA DE ENVÍO</strong></h2>
          </div>
        </section>
        <hr />
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-3 border border-dark" style={{ border: '1px solid #ddd', padding: '20px', backgroundColor: 'rgba(240, 240, 240, 0.8)' }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src="imagenes/Rectangle 325.jpg" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title text-center" style={{ color: 'blue' }}>PRODUCTO</h5>
                        <p className="card-text"><strong>Short sleeve polo shirt</strong></p>
                        <p className="card-text">Precio</p>
                        <p className="card-text">$0.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="col-md-6">
                <h6 style={{ textAlign: 'center' }}><strong>INFORMACIÓN DEL DESTINATARIO</strong></h6>
                <form style={{ formContainerStyle }}>
                  <div className="d-flex flex-row justify-content-between">
                    <div className="form-group d-flex flex-column mr-1">
                      <label htmlFor="name" className="form-label">Nombre</label>
                      <input type="text" className="form-control" id="name" style={{ margin: '10px', padding: '10px', width: '200px', borderRadius: '5px', border: '1px solid #ccc' }} required />
                    </div>
                    <div className="form-group d-flex flex-column ml-1">
                      <label htmlFor="LastName" className="form-label">Apellido</label>
                      <input type="text" className="form-control" id="LastName" style={{ margin: '10px', padding: '10px', width: '200px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Email" className="form-label">Correo Electrónico</label>
                    <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" style={{ margin: '10px', padding: '10px', width: '200px', borderRadius: '5px', border: '1px solid #ccc' }} />
                  </div>
                </form>
              </div>
              <div className="col-10">
                <form style={{ formContainerStyle }}>
                  <div>
                    <div>
                      <label htmlFor="adress" className="form-label">Dirección</label>
                      <input type="text" className="form-control" id="adress" style={{ margin: '10px', padding: '10px', width: '200px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between" style={{ marginTop: '10px' }}>
                    <div className="form-group d-flex flex-column mr-1">
                      <label htmlFor="city" className="form-label">Ciudad</label>
                      <input type="text" className="form-control" id="city" style={{ margin: '10px', padding: '10px', width: '200px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    </div>
                    <div className="form-group d-flex flex-column mr-1">
                      <label htmlFor="state" className="form-label">Estado</label>
                      <input type="text" className="form-control" id="state" style={{ margin: '10px', padding: '10px', width: '200px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    </div>
                    <div className="form-group d-flex flex-column ml-1">
                      <label htmlFor="postalCode" className="form-label">Código Postal</label>
                      <input type="text" className="form-control" id="postalCode" style={{ margin: '10px', padding: '10px', width: '200px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section style={{ marginTop: '30px' }}>
          <div className="container border border-dark">
            <div className="row">
              <h6 style={{ textAlign: 'center' }}><strong>INFORMACIÓN DEL ENVÍO</strong></h6>
              <div className="col-8">
                <form style={{ formContainerStyle }}>
                  <div className="d-flex flex-row justify-content-between">
                    <div className="form-group flex-column mr-2 col-6">
                      <label htmlFor="date">Fecha de Envío</label>
                      <input type="date" className="form-control" id="date" style={{ margin: '10px', padding: '10px', width: '200px', borderRadius: '5px', border: '1px solid #ccc' }} required />
                    </div>
                    <div className="form-group flex-column ml-4 col-8">
                      <label htmlFor="Number" className="form-label">Número de Seguimiento</label>
                      <input type="text" className="form-control" id="Number" style={{ margin: '10px', padding: '10px', width: '200px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    </div>
                  </div>
                </form>
                <form style={{ formContainerStyle }}>
                  <div className="d-flex flex-row justify-content-between">
                    <div className="form-group flex-column mr-2 col-8">
                      <label htmlFor="Weight" className="form-label">Peso del Paquete</label>
                      <input type="text" className="form-control" id="Weight" style={{ margin: '10px', padding: '10px', width: '200px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    </div>
                    <div className="form-group flex-column ml-2" style={{ marginTop: '30px' }}>
                      <button id="Etiqueta" style={buttonStyle} onClick={handleGenerateLabel}>
                        Generar Etiqueta
                        <FaTruck style={{ marginLeft: '5px', fontSize: '20px' }} />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ShippingManagement;
