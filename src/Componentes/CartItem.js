import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

// Componente funcional CartItem que representa un elemento en el carrito
const CartItem = ({ imgSrc, title, initialQuantity, price }) => {
  // Estado local para la cantidad del producto
  const [quantity, setQuantity] = useState(initialQuantity);

  // Maneja la disminución de la cantidad
  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Maneja el aumento de la cantidad
  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  // Maneja la eliminación del producto del carrito
  const handleDelete = () => {
    // Aquí puedes manejar la lógica de eliminación del producto del carrito
    console.log('Producto eliminado del carrito');
  };

  return (
    <tr>
      <td className="product-col">
        <div className="input-group-text">
          <img src={imgSrc} alt={title} style={{ width: '80px' }} />
          <div className="p-title">
            <h6>{title}</h6>
          </div>
        </div>
      </td>
      <td className="quantity-col col-md-2">
        <div className="input-group input-group-sm">
          <button 
            className="btn btn-outline-secondary btn-sm" 
            type="button" 
            onClick={handleMinus}
          >
            -
          </button>
          <input 
            type="number" 
            className="form-control form-select-sm w-10" 
            value={quantity} 
            readOnly
          />
          <button 
            className="btn btn-outline-secondary btn-sm" 
            type="button" 
            onClick={handlePlus}
          >
            +
          </button>
          <button 
            className="btn btn-outline-secondary btn-sm" 
            type="button" 
            onClick={handleDelete}
          >
            <FaTrash />
          </button>
        </div>
      </td>
      <td className="total text-end">{price}</td>
    </tr>
  );
};

export default CartItem;
