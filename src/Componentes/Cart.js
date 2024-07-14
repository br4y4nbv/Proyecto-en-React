import React from 'react';
import CartItem from './CartItem'; // Importa el componente CartItem
import ProductList from './ProductList'; // Importa el componente ProductList

const Cart = () => {
  // Estilos para los contenedores
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'rgba(240, 240, 240, 0.8)',
    padding: '20px',
    fontWeight: 'bold',
    marginTop: '30px',
  };

  // Estilos para la lista de productos
  const productListStyle = {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  };

  // Estilos para el contenedor de la tabla
  const tableContainerStyle = {
    margin: '20px', // Agrega márgenes alrededor de la tabla
    width: '90%', // Ajusta el ancho del contenedor de la tabla
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  // Estilos para la tabla
  const tableStyle = {
    borderCollapse: 'collapse', 
    width: '90%', 
    margin: '-10px auto', 
  };

  // Estilos para las celdas de encabezado
  const thStyle = {
    padding: '10px', // Agrega relleno a las celdas de encabezado
  };

  // Estilos para el encabezado
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  };

  // Estilos para el contenedor del total
  const totalContainerStyle = {
    width: '80%', // Ajusta el ancho del contenedor del total
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    marginTop: '10px',
  };

  return (
    <main style={containerStyle}>
      <div style={{ width: '80%' }}>
        <div style={headerStyle}>
          <h1>Tu Carrito</h1>
          <a href="/" className="proceed-btn" >Continua Comprando</a>
        </div>
        <hr className="container" />
        <div className="row">
          <div className="col">
            <div className="cart-table" style={tableContainerStyle}>
              <table className="table" style={tableStyle}>
                <thead>
                  <tr>
                    <th scope="col" style={thStyle}>Producto</th>
                    <th scope="col" style={thStyle}>Cantidad</th>
                    <th scope="col" className="text-end" style={thStyle}>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Renderiza los elementos del carrito */}
                  <CartItem
                    imgSrc="imagenes/Rectangle 325 (1).png"
                    title="Short sleeve polo shirt"
                    quantity="1"
                    price="$00.0"
                  />
                  <CartItem
                    imgSrc="imagenes/Green Shoe.png"
                    title="Nike Air Presto"
                    quantity="1"
                    price="$00.0"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="total text-end" style={totalContainerStyle}>
          <ul className="cart-total">Total $00.0</ul>
          <a href="/payment" className="btn btn-dark btn-lg">COMPRAR</a>
        </div>
        <hr className="container" />
        <h5 className="alingitems: center">También te puede Gustar</h5>
        <section style={productListStyle}>
          {/* Renderiza la lista de productos recomendados */}
          <ProductList limit={3} />
        </section>
      </div>
    </main>
  );
};

export default Cart;
