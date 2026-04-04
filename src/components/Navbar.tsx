import { Link } from "react-router-dom";

export const Navbar = () => (
  <nav className="bg-teal-600 text-white p-6 shadow-md">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">Empresa de servicio de aseo</h1>
      <div className='flex space-x-6 text-lg'>
        <Link to="/" className="hover:text-gray-300">Inicio</Link>
        <Link to="/quienes-somos" className="hover:text-gray-300">Quiénes Somos</Link>
        <Link to="/buscarEmpleado" className="hover:text-gray-300">Buscar Empleado</Link>
        <Link to="/contacto" className="hover:text-gray-300">Contacto</Link>
      </div>
    </div>
  </nav>
);