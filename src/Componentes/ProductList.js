import React from 'react';
import ProductCard from './ProductCard';

// Componente funcional ProductList que representa una lista de productos
const ProductList = ({ limit }) => {
  // Array de productos
  const products = [
    { id: 1, imageSrc: '/imagenes/Rectangle 325.jpg', title: 'Short polo shirt', price: '$0.00' },
    { id: 2, imageSrc: '/imagenes/Rectangle 325.png', title: 'Short polo shirt', price: '$0.00' },
    { id: 3, imageSrc: '/imagenes/Rectangle 325 (1).png', title: 'Short sleeve polo shirt', price: '$0.00' },
    { id: 4, imageSrc: '/imagenes/tobias-tullius-Fg15LdqpWrs-unsplash 1.png', title: 'Saco', price: '$0.00' },
    { id: 5, imageSrc: '/imagenes/Rectangle 11.png', title: 'Jeans', price: '$0.00' },
    { id: 6, imageSrc: '/imagenes/image 13.png', title: 'Bo Soft Strap', price: '$0.00' },
    { id: 7, imageSrc: '/imagenes/Green Shoe.png', title: 'Nike Air Presto', price: '$0.00' },
    { id: 8, imageSrc: '/imagenes/Rectangle 325 (2).png', title: 'Short polo shirt', price: '$0.00' },
  ];

  // Limita la cantidad de productos a mostrar
  const displayedProducts = limit ? products.slice(0, limit) : products;

  return (
    <section style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {/* Mapea los productos y renderiza una tarjeta de producto para cada uno */}
      {displayedProducts.map((product, index) => (
        <ProductCard
          key={index}
          imageSrc={product.imageSrc}
          title={product.title}
          price={product.price}
          style={{ flex: '1 0 25%', margin: '10px' }}
        />
      ))}
    </section>
  );
};

export default ProductList;
