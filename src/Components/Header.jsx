import React from "react";
import "../Styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => (
  <header className="header">
    <img src="/logos-01.png" alt="Logo" className="header-logo" />
    <nav className="header-nav">
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

export default Header;