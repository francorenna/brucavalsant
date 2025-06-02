import React, { useState } from "react";
import Intro from "./Components/Intro.js";
import Header from "./Components/Header.jsx";
import Banner from "./Components/Banner.jsx";
import Productos from "./Components/Productos.jsx";
import Nosotros from "./Components/Nosotros.jsx";
import Info from "./Components/Info.jsx";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro ? (
        <Intro onFinish={() => setShowIntro(false)} />
      ) : (
        <>
          <Header />
          <Banner />
          <Productos />
          <Nosotros />
          <Info />
        </>
      )}
    </>
  );
}

export default App;