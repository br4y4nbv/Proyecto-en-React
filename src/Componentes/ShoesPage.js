import React from 'react';
import ProductCard from './ProductCard';

const ShoesPage = () => {
  // Definición de un array de objetos que representan los zapatos disponibles
  const shoes = [
    { id: 1, imageSrc: '/imagenes/Green Shoe.png', title: 'Nike air presto', price: '$0.00' },
    { id: 2, imageSrc: '/imagenes/shoe_red.png', title: 'Nike air red', price: '$0.00' },
    { id: 3, imageSrc: '/imagenes/shoe_yellow.png', title: 'Nike air yellow', price: '$0.00' },
  ];

  return (
    // Sección que contiene las tarjetas de productos de zapatos
    <section style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {shoes.map((shoe, index) => (
        // Mapeo del array de zapatos para crear una tarjeta de producto para cada zapato
        <ProductCard
          key={index} // Clave única para cada elemento en la lista
          imageSrc={shoe.imageSrc} // Fuente de la imagen del zapato
          title={shoe.title} // Título del zapato
          price={shoe.price} // Precio del zapato
          style={{ flex: '1 0 25%', margin: '10px' }} // Estilo para cada tarjeta de producto
        />
      ))}
    </section>
  );
};

export default ShoesPage;
