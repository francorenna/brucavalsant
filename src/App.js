import React, { useState } from "react";
import Intro from "./Components/Intro.js";
import Header from "./Components/Header.jsx";
import Banner from "./Components/Banner.jsx";
import Productos from "./Components/Productos.jsx";

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
        </>
      )}
    </>
  );
}

export default App;