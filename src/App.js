import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import ProductList from './Componentes/ProductList';
import ProductDetailsPage from './Componentes/ProductDetailsPage';
import Login from './Componentes/login';
import RegisterPage from './Componentes/Register';
import Cart from './Componentes/Cart';
import CartItem from './Componentes/CartItem';
import PaymentMethods from './Componentes/PaymentMethods';
import ShippingManagement from './Componentes/ShippingManagement';
import LoginForm from './Componentes/LoginForm';
import ShirtsPage from './Componentes/ShirtsPage';
import ShoesPage from './Componentes/ShoesPage';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product-details/:id" element={<ProductDetailsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cartitem" element={<CartItem />} />
          <Route path="/payment" element={<PaymentMethods />} />
          <Route path="/shipping" element={<ShippingManagement />} />
          <Route path="/shirts" element={<ShirtsPage />} />
          <Route path="/shoes" element={<ShoesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;