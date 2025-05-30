import React, { useState } from "react";
import "../Styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

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
        <Button
          variant="text"
          color="warning"
          className="header-btn"
          sx={{
            fontWeight: 700,
            fontFamily: "Montserrat, Arial, sans-serif",
            borderRadius: "24px",
            px: 2.5,
            py: 1,
            color: "#bfa100",
            '&:hover': {
              background: "#fffbe6",
              color: "#7c6f00",
            }
          }}
        >
          Ofertas
        </Button>
        <Button
          variant="text"
          color="warning"
          className="header-btn"
          sx={{
            fontWeight: 700,
            fontFamily: "Montserrat, Arial, sans-serif",
            borderRadius: "24px",
            px: 2.5,
            py: 1,
            color: "#bfa100",
            '&:hover': {
              background: "#fffbe6",
              color: "#7c6f00",
            }
          }}
        >
          Combos
        </Button>
        <Button
          variant="text"
          color="warning"
          className="header-btn"
          sx={{
            fontWeight: 700,
            fontFamily: "Montserrat, Arial, sans-serif",
            borderRadius: "24px",
            px: 2.5,
            py: 1,
            color: "#bfa100",
            '&:hover': {
              background: "#fffbe6",
              color: "#7c6f00",
            }
          }}
        >
          Categorías
        </Button>
      </nav>

      <div className="header-search-cart">
        <div className="header-search">
          <TextField
            variant="filled"
            size="small"
            placeholder="Buscar..."
            InputProps={{
              disableUnderline: true,
              style: {
                background: "#fffbe6",
                borderRadius: 24,
                paddingRight: 36,
                fontFamily: "Montserrat, Arial, sans-serif",
              },
              endAdornment: (
                <span className="header-search-icon">
                  <FontAwesomeIcon icon={faSearch} />
                </span>
              ),
            }}
            sx={{
              '& .MuiFilledInput-root': {
                borderRadius: '24px',
                background: '#fffbe6',
                boxShadow: '0 2px 8px rgba(255, 224, 102, 0.10)',
              },
              '& input': {
                padding: '10px 0 10px 16px',
              },
            }}
          />
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