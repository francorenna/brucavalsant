import React, { useState } from "react";
import "../Styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Botón hamburguesa solo visible en móvil */}
      <button
        className="header-hamburger"
        aria-label="Abrir menú"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </button>

      <img
        src={process.env.PUBLIC_URL + "/logos-01.png"}
        alt="Logo"
        className="header-logo"
      />

      {/* Menú de navegación */}
      <nav className={`header-nav${menuOpen ? " open" : ""}`}>
        <button className="header-btn">Ofertas</button>
        <button className="header-btn">Combos</button>
        <button className="header-btn">Categorías</button>
      </nav>

      <div className="header-search-cart">
        <div className="header-search">
          <input type="text" placeholder="Buscar..." />
          <span className="header-search-icon">
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </div>
        <div className="header-cart">
          <span className="header-cart-icon">
            <FontAwesomeIcon icon={faShoppingCart} />
          </span>
          <span className="header-cart-count">0</span>
        </div>
      </div>
    </header>
  );
};

export default Header;