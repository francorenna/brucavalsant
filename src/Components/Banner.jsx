import React, { useEffect, useState, useRef } from "react";
import "../Styles/Banner.css";

const images = [
  process.env.PUBLIC_URL + "/Promos/banner1.jpg",
  process.env.PUBLIC_URL + "/Promos/banner2.jpg",
  process.env.PUBLIC_URL + "/Promos/banner3.jpg",
  process.env.PUBLIC_URL + "/Promos/banner4.jpg",
];

function getRandomIndex(exclude) {
  let idx;
  do {
    idx = Math.floor(Math.random() * images.length);
  } while (idx === exclude);
  return idx;
}

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => getRandomIndex(prev));
    }, 3500);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <div className="banner-container">
      {images.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt={`Promo ${idx + 1}`}
          className={`banner-img${idx === current ? " active" : ""}`}
          style={{ zIndex: idx === current ? 2 : 1 }}
        />
      ))}
      <div className="banner-overlay">
        <h2>¡Descubrí nuestras promos exclusivas!</h2>
        <p>Ofertas únicas en colchones y combos para tu descanso</p>
      </div>
    </div>
  );
};

export default Banner;