import React, { useState } from "react";
import "../Styles/Productos.css";

const productos = [
  {
    tipo: "MARK",
    imagen: "/Productos/MARK.png",
    detalle: "Colchón de espuma de alta densidad. Revestido en tela de punto totalmente matelasseado de 20 mm que ofrece una grata sensación de suavidad. PESO MÁXIMO SUGERIDO 65 kg. Máximo comfort. Sommier | Opcional",
    espesores: ["18 cm / 80 x 190", "16 cm / 100 x 190"],
    precio: 300000,
  },
  {
    tipo: "REST",
    imagen: "/Productos/REST.png",
    detalle: "Colchón de espuma de alta densidad. Revestido en tela de punto totalmente matelasseado de 20 mm que ofrece una grata sensación de suavidad. PESO MÁXIMO SUGERIDO 80 kg. Máximo comfort. Sommier | Opcional",
    espesores: ["18 cm / 80 x 190", "16 cm / 100 x 190"],
    precio: 350000,
  },
  {
    tipo: "RELAX",
    imagen: "/Productos/RELAX.png",
    detalle: "Colchón de espuma de alta densidad. Revestido en tela de punto totalmente matelasseado de 20 mm que ofrece una grata sensación de suavidad. PESO MÁXIMO SUGERIDO 80 kg. Máximo comfort. Sommier | Opcional",
    espesores: ["18 cm / 80 x 190", "16 cm / 100 x 190"],
    precio: 450000,
  },
  // Agrega el cuarto producto aquí si lo deseas
];

const Productos = () => {
  const [detallesAbiertos, setDetallesAbiertos] = useState({});

  const toggleDetalle = (tipo) => {
    setDetallesAbiertos((prev) => ({
      ...prev,
      [tipo]: !prev[tipo],
    }));
  };

  return (
    <section className="productos-lista">
      {productos.map((prod) => (
        <div className="producto-card" key={prod.tipo}>
          <div className="producto-img-wrap">
            <img
              src={prod.imagen}
              alt={prod.tipo}
              className="producto-img"
              style={{ background: "#fff" }}
            />
          </div>
          <div className="producto-info">
            <h3 className="producto-tipo">{prod.tipo}</h3>
            <button
              className="producto-detalle-toggle"
              onClick={() => toggleDetalle(prod.tipo)}
              aria-expanded={!!detallesAbiertos[prod.tipo]}
              aria-controls={`detalle-${prod.tipo}`}
            >
              <span>Ver detalle</span>
              <span
                className={`flecha ${detallesAbiertos[prod.tipo] ? "abierta" : ""}`}
                aria-hidden="true"
              >
                ▼
              </span>
            </button>
            <div
              className={`producto-detalle-oculto${detallesAbiertos[prod.tipo] ? " visible" : ""}`}
              id={`detalle-${prod.tipo}`}
            >
              <p className="producto-detalle">{prod.detalle}</p>
              <ul className="producto-espesores">
                {prod.espesores.map((esp, i) => (
                  <li key={i}>{esp}</li>
                ))}
              </ul>
            </div>
            <div className="producto-precio">${prod.precio.toLocaleString()}</div>
            <button className="producto-btn">Agregar al carrito</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Productos;