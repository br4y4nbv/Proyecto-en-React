import React from 'react';
import ProductCard from './ProductCard';

// Componente funcional ShirtsPage que representa la página de camisas
const ShirtsPage = () => {
  // Array de camisas
  const shirts = [
    { id: 1, imageSrc: '/imagenes/Rectangle 325.jpg', title: 'Short polo shirt', price: '$0.00' },
    { id: 2, imageSrc: '/imagenes/Rectangle 325.png', title: 'Short polo shirt', price: '$0.00' },
    { id: 3, imageSrc: '/imagenes/Rectangle 325 (1).png', title: 'Short sleeve polo shirt', price: '$0.00' },
    { id: 4, imageSrc: '/imagenes/tobias-tullius-Fg15LdqpWrs-unsplash 1.png', title: 'Saco', price: '$0.00' },
    { id: 5, imageSrc: '/imagenes/Rectangle 11.png', title: 'Jeans', price: '$0.00' },
    { id: 6, imageSrc: '/imagenes/Rectangle 325 (2).png', title: 'Short polo shirt', price: '$0.00' },
  ];

  return (
    <section style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {/* Mapea las camisas y renderiza una tarjeta de producto para cada una */}
      {shirts.map((shirt, index) => (
        <ProductCard
          key={index}
          imageSrc={shirt.imageSrc}
          title={shirt.title}
          price={shirt.price}
          style={{ flex: '1 0 25%', margin: '10px' }}
        />
      ))}
    </section>
  );
};

export default ShirtsPage;
