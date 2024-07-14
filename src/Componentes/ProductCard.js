import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Componente funcional ProductCard que representa una tarjeta de producto
const ProductCard = ({ id, imageSrc, title, price }) => {
  // Función para agregar el producto al carrito
  const addToCart = () => {
    alert('Producto agregado al carrito');
  };

  // Función para agregar el producto a favoritos
  const addToFavorites = () => {
    alert('Producto agregado a favoritos');
  };

  return (
    <div className="border border-dark-subtle" style={{ float: 'right', marginLeft: '40px' }}>
      <div style={{ width: '233px', height: '323px', paddingBottom: '30.30px', position: 'relative' }}>
        {/* Enlace a los detalles del producto */}
        <Link to={`/product-details/${id}`}>
          {/* Imagen del producto */}
          <img style={{ width: '233px', height: '264.75px', borderRadius: '5px' }} src={imageSrc} alt={title} />
          {/* Título del producto */}
          <div className="font-family-assistant" style={{ color: 'rgba(0, 0, 0, 0.87)', fontSize: '14px', lineHeight: '20px', wordWrap: 'break-word' }}>{title}</div>
          {/* Precio del producto */}
          <div className="font-family-assistant" style={{ color: 'rgba(0, 0, 0, 0.87)', fontSize: '14px', lineHeight: '20px', wordWrap: 'break-word' }}>{price}</div>
          {/* Iconos para agregar al carrito y a favoritos */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FaShoppingCart id="addToCart" style={{ color: 'rgb(0, 0, 0)', fontSize: '14px', marginRight: '5px' }} onClick={addToCart} />
            <FaHeart id="addToFavorites" style={{ color: 'rgb(255, 0, 0)', fontSize: '14px', marginRight: '5px' }} onClick={addToFavorites} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
