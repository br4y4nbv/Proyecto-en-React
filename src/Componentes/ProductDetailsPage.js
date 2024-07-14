import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

// Componente funcional ProductDetailsPage que representa la página de detalles del producto
const ProductDetailsPage = () => {
  const navigate = useNavigate(); // Hook para la navegación

  // Función para retroceder a la página anterior
  const handleGoBack = () => {
    navigate(-1); // Navega hacia atrás en el historial
  };

  // Función para agregar el producto al carrito
  const handleAddToCart = () => {
    alert('Producto agregado al carrito');
  };

  // Función para comprar el producto
  const handleBuyNow = () => {
    navigate('/payment'); // Navega a la página de métodos de pago
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

  // Estilos para los botones
  const buttonStyle = {
    margin: '20px',
    padding: '10px 20px',
    fontSize: '18px',
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  // Estilos para la imagen
  const imageStyle = {
    width: '150%',
    borderRadius: '5px',
  };

  // Estilos para el texto
  const textStyle = {
    textAlign: 'center',
  };

  return (
    <div>
      {/* Botón para volver a la página anterior */}
      <button className="btn btn-dark" style={{ backgroundColor: '#74482F', marginLeft: '10px', marginTop: '20px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} onClick={handleGoBack}>
        <FaArrowLeft /> Volver
      </button>

      <div className="product-details" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', backgroundColor: 'rgba(240, 240, 240, 0.8)', padding: '20px', fontWeight: 'bold', marginTop: '30px' }}>
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
          <section style={sectionStyle}>
            <div>
              {/* Imagen del producto */}
              <img src="/imagenes/Rectangle 325.jpg" style={imageStyle} alt="Short sleeve polo shirt" />
            </div>
            <div style={textStyle}>
              <h5 className="card-title">Short sleeve polo shirt</h5>
              <p className="card-text"><strong>Precio</strong></p>
              <p className="card-text">$0.00</p>
            </div>
          </section>
          {/* Botón para agregar al carrito */}
          <button id="addToCart" style={buttonStyle} onClick={handleAddToCart}>
            Agregar al carrito
          </button>
          {/* Botón para comprar ahora */}
          <button id="Comprar" style={buttonStyle} onClick={handleBuyNow}>
            Comprar ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
