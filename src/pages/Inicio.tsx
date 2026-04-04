import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Servicios } from "../components/Servicios";
import { Equipo } from "../components/Equipo";
import { PorQueElegirnos } from "../components/PorqueElegirnos";
import { ReservaFormulario } from "../components/ReservaForm";
import { Footer } from "../components/Footer";

export function Inicio() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <Navbar />
      <main className="flex-1 p-6 space-y-6 max-w-6xl mx-auto">
        <Hero />
        <Servicios />
        <Equipo />
        <PorQueElegirnos />
        <ReservaFormulario />
      </main>
      <Footer />
    </div>
  );
}

export default Inicio;