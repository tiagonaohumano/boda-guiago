import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Transporte from "./components/Transporte";
import Alojamientos from "./components/Alojamientos";
import Etiqueta from "./components/Etiqueta";
import Regalos from "./components/Regalos";
import Confirmacion from "./components/Confirmacion";
import MapaAlojamientos from "./components/MapaAlojamientos";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Transporte />
      <Alojamientos />
      <Regalos />
      <Etiqueta />
      <Confirmacion />
      <MapaAlojamientos />
    </>
  );
}

export default App;
