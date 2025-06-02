import React from "react";
import "./../Styles/Nosotros.css";

const Nosotros = () => (
  <section className="nosotros-container">
    <div className="nosotros-card">
      <h2 className="nosotros-title">
        <img
          src={process.env.PUBLIC_URL + "/logos-01.png"}
          alt="Bruca Valsant Logo"
          className="nosotros-logo"
        />
        <span className="nosotros-highlight custom-font">
          Tu aliado en colchones y sommiers de alta calidad
        </span>
      </h2>
      <p className="nosotros-text">
        En <strong>Bruca Valsant</strong>, nos enorgullecemos de ser un depósito mayorista exclusivo de colchones y sommiers de la reconocida Fábrica Frontera Living, creadora de la marca <strong>Natural Soft</strong>.
        <br /><br />
        Con una trayectoria sólida en el mercado, nos hemos establecido como un proveedor confiable y eficiente para negocios y mueblerías del rubro en toda la región de <strong>Cuyo</strong>.
      </p>
      <img
        src={process.env.PUBLIC_URL + "/naturalsoft.jpeg"}
        alt="Natural Soft Logo"
        className="nosotros-logo"
        style={{ marginTop: "1.5rem", maxWidth: "180px" }}
      />
    </div>
  </section>
);

export default Nosotros;