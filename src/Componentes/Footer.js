import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';

// Componente funcional Footer que representa el pie de página
const Footer = () => {
  return (
    <footer style={{ marginTop: '20px', backgroundColor: '#74482F' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {/* Lista de enlaces */}
        <ul style={{ textAlign: 'left', listStyleType: 'none' }}>
          <li><a href="#" style={{ color: 'white', fontFamily: 'Assistant, sans-serif' }}>Quienes somos</a></li>
          <li><a href="#" style={{ color: 'white', fontFamily: 'Assistant, sans-serif' }}>Ayuda</a></li>
          <li><a href="#" style={{ color: 'white', fontFamily: 'Assistant, sans-serif' }}>Contacto</a></li>
        </ul>
        {/* Formulario para agregar correo */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center">
              <div style={{ color: 'white' }}>
                Agrega tu correo
              </div>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Email" />
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="bi bi-caret-down"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Iconos de redes sociales */}
        <div style={{ display: 'flex', justifyContent: 'left', gap: '40px', marginTop: '20px' }}>
          <a href="#"><FaInstagram style={{ color: 'white', fontSize: '24px' }} /></a>
          <a href="#"><FaFacebook style={{ color: 'white', fontSize: '24px' }} /></a>
          <a href="#"><FaTwitter style={{ color: 'white', fontSize: '24px' }} /></a>
          <a href="#"><FaWhatsapp style={{ color: 'white', fontSize: '24px' }} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
