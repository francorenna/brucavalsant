import React from "react";
import { FaMapMarkerAlt, FaTruck, FaMedal, FaPhoneAlt } from "react-icons/fa";
import "./../Styles/Info.css";

const infoData = [
  {
    icon: <FaMapMarkerAlt className="info-icon" />,
    title: "Nuestra ubicación y capacidad",
    text: (
      <>
        Nuestro depósito de <strong>500 m²</strong>, ubicado en Calle San Martín 3012 de Las Heras, Mendoza, es el corazón de nuestras operaciones. Desde aquí, gestionamos y distribuimos nuestros productos con la mayor eficiencia posible, asegurando que nuestros clientes reciban sus pedidos de manera oportuna y en perfectas condiciones.
      </>
    ),
  },
  {
    icon: <FaTruck className="info-icon" />,
    title: "Distribución sin cargo",
    text: (
      <>
        Una de las ventajas de trabajar con nosotros es que ofrecemos <strong>distribución sin cargo</strong> en toda la región de Cuyo. Nuestros fletes están diseñados para garantizar que tus productos lleguen a destino de manera segura y sin complicaciones.
      </>
    ),
  },
  {
    icon: <FaMedal className="info-icon" />,
    title: "Calidad y confianza",
    text: (
      <>
        En Bruca Valsant, nos comprometemos a brindar productos de la más alta calidad, respaldados por la experiencia y la reputación de la marca Natural Soft. Nuestro equipo está siempre dispuesto a ayudarte a encontrar las soluciones que mejor se adapten a tus necesidades, ya sea que estés buscando abastecer tu negocio o simplemente necesites asesoramiento experto.
      </>
    ),
  },
  {
    icon: <FaPhoneAlt className="info-icon" />,
    title: "Contactanos",
    text: (
      <>
        Estamos aquí para escucharte y ayudarte a encontrar lo que necesitas. No dudes en contactarnos para obtener más información sobre nuestros productos y servicios. Estamos ansiosos por trabajar contigo y ser parte de tu éxito.
      </>
    ),
  },
];

const Info = () => (
  <section className="info-section">
    <div className="info-grid">
      {infoData.map((item, idx) => (
        <div className="info-card" key={idx}>
          {item.icon}
          <h3 className="info-title">{item.title}</h3>
          <p className="info-text">{item.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Info;