import React, { useEffect } from "react";
import "../Styles/Intro.css";

const Intro = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="intro-container">
      <img
        src={process.env.PUBLIC_URL + "/logos-02.png"}
        alt="Logo"
        className="intro-logo"
      />
    </div>
  );
};

export default Intro;