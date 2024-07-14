import React from 'react';
import { FaSearch, FaUser, FaShoppingCart, FaTruck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Componente funcional Header que representa el encabezado de la página
const Header = () => {
    // Estilos para el encabezado
    const headerStyle = {
        backgroundColor: '#74482F',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
    };

    // Estilos para los enlaces de navegación
    const navLinkStyle = {
        backgroundColor: '#74482F',
        color: 'white',
        margin: '0 30px',        
        padding: '10px 20px',
    };

    // Estilos para el contenedor de búsqueda
    const searchContainerStyle = {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        margin: '0 100px',
        padding: '10px 20px',
    };

    // Estilos para el contenedor de iconos
    const iconContainerStyle = {
        display: 'flex',
        alignItems: 'end',
        margin: '0 80px'
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-smaller" style={headerStyle}>
                <div className="container-fluid" style={{ display: 'flex', alignItems: 'center' }}>
                    {/* Logo */}
                    <Link to='/'>
                        <img src="imagenes/a-simple-logo-for-a-clothing-shop-953526988.png" alt="Logo" style={{ width: '50px', height: 'auto' }} className="rounded-circle" />
                    </Link>
                    {/* Enlaces de navegación */}
                    <ul className="navbar-nav me-auto my-2 my-lg-0" style={{ display: 'flex', listStyleType: 'none', padding: 0, margin: 0 }}>
                        <li className="nav-item">
                            <Link className="nav-link" to="/shirts" style={navLinkStyle}>Camisas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/shoes" style={navLinkStyle}>Zapatos</Link>
                        </li>
                    </ul>
                    {/* Contenedor de búsqueda */}
                    <div style={searchContainerStyle}>
                        <form className="d-flex" role="search" style={{ display: 'flex', alignItems: 'center' }}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ backgroundColor: 'white', color: 'black', width: '100px', borderRadius: '5px', border: '1px solid #ccc' }} />
                            <button className="btn btn-outline-success" type="submit" style={{ color: 'black' }}>
                                <FaSearch />
                            </button>
                        </form>
                    </div>
                    {/* Contenedor de iconos */}
                    <div style={iconContainerStyle}>
                        <Link to="/login" className="nav-link" style={{ margin: '0 40px' }}>
                            <FaUser style={{ color: 'white', fontSize: '24px' }} />
                        </Link>
                        <Link to="/cart" className="nav-link" style={{ margin: '0 40px' }}>
                            <FaShoppingCart style={{ color: 'white', fontSize: '24px' }} />
                        </Link>
                        <Link to="/shipping" className="nav-link" style={{ margin: '0 40px' }}>
                            <FaTruck style={{ color: 'white', fontSize: '24px' }} />
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
