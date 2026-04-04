import { useState, useContext, useEffect } from "react";
import { EmpleadoContext } from "../context/empleadoContext";
import { Navbar } from "../components/Navbar";
export const Empleados = () => {
  const { empleados, cargarEmpleados } = useContext(EmpleadoContext)!;
  const [busqueda, setBusqueda] = useState("");

  // Cargar empleados al montar el componente se muestra un listado de empleados
  useEffect(() => {
    cargarEmpleados();
  }, []);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusqueda(e.target.value);
  };

  // Filtrar empleados según la búsqueda
  const resultados = empleados.filter((e) =>
    e.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
    <Navbar />
      <h1 className="text-2xl font-bold mb-4">Buscar Empleado</h1>
      <input
        type="text"
        placeholder="Escribe el nombre del empleado..."
        value={busqueda}
        onChange={handleChange}
        className="w-full border rounded px-4 py-2 mb-4"
      />

      <ul className="bg-white rounded shadow p-4">
        {resultados.length === 0 ? (
          <li className="text-gray-500">No se encontraron empleados</li>
        ) : (
          resultados.map((e) => (
            <li key={e.id} className="border-b last:border-b-0 py-2">
              {e.nombre}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Empleados;