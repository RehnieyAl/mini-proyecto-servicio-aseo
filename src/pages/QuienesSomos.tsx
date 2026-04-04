import { Navbar } from "../components/Navbar";
export default function QuienesSomos() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <Navbar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">Quiénes Somos</h1>
        <p className="text-gray-700">
          Somos una empresa especializada en limpieza de hogares y oficinas, comprometida con la
          calidad, eficiencia y satisfacción de nuestros clientes. Contamos con un equipo de
          profesionales capacitados para ofrecer el mejor servicio.
        </p>
        <p className="text-gray-700 mt-2">
          Nuestra misión es garantizar espacios limpios y saludables, adaptándonos a las necesidades
          de cada cliente con puntualidad y responsabilidad.
        </p>
      </div>
    </div>
  );
}