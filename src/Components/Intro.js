import React, { useEffect } from "react";
import "../Styles/Intro.css"; // Ruta corregida

const Intro = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000); // Duración de la animación en ms
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="intro-container">
      <img src="/logos-02.png" alt="Logo" className="intro-logo" />
    </div>
  );
};

export default Intro;