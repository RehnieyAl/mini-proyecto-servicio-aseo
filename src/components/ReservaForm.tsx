import { useState, useEffect, useContext } from "react";
import type { ReservaForm } from "../types/index";
import { ReservaContext } from "../context/ReservaContext";
import { ClienteContext } from "../context/clienteContext";
import { EmpleadoContext } from "../context/empleadoContext";

export const ReservaFormulario = () => {
  const { agregarReservacion } = useContext(ReservaContext)!;
  const { agregarCliente } = useContext(ClienteContext)!; // Necesitamos agregar cliente
  const { empleados, cargarEmpleados } = useContext(EmpleadoContext)!;

  const [form, setForm] = useState<ReservaForm>({
    nombre: "",
    telefono: "",
    direccion: "",
    fecha: "",
    hora: "",
    servicio: "",
  });

  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState<number | "">("");

  useEffect(() => {
    cargarEmpleados();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!empleadoSeleccionado) {
      alert("Debes seleccionar un empleado");
      return;
    }

    const nuevoCliente = {
      id: Date.now(),
      nombre: form.nombre,
      telefono: form.telefono,
      direccion: form.direccion,
    };

    await agregarCliente(nuevoCliente);

    const nuevaReserva = {
      id: Date.now(),
      clienteID: nuevoCliente.id,
      empleadoID: empleadoSeleccionado,
      fecha: new Date(form.fecha),
      horainicio: form.hora,
      horafin: form.hora,
      servicio: form.servicio,
      estado: "pendiente" as const,
    };

    await agregarReservacion(nuevaReserva);

    setForm({ nombre: "", telefono: "", direccion: "", fecha: "", hora: "", servicio: "" });
    setEmpleadoSeleccionado("");
  };

  return (
    
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="col-span-full text-2xl font-bold text-center mb-4">Formulario de Reserva</h1>
      <input
        type="text"
        name="nombre"
        value={form.nombre}
        placeholder="Nombre del cliente"
        onChange={handleChange}
        className="border rounded px-4 py-2"
        required
      />
      <input
        type="tel"
        name="telefono"
        value={form.telefono}
        placeholder="Teléfono"
        onChange={(e)=> {
          const valor = e.target.value;
          if (/^\d{0,15}$/.test(valor)) {
            handleChange(e);
          }
        }}
        className="border rounded px-4 py-2"
        required
      />
      <input
        type="text"
        name="direccion"
        value={form.direccion}
        placeholder="Dirección"
        onChange={handleChange}
        className="border rounded px-4 py-2"
        required
      />

      <select value={empleadoSeleccionado} onChange={(e) => setEmpleadoSeleccionado(Number(e.target.value))} className="border rounded px-4 py-2">
        <option value="">Selecciona un empleado disponible</option>
        {empleados.map(e => (
          <option key={e.id} value={e.id}>{e.nombre}</option>
        ))}
      </select>

      <input type="date" name="fecha" value={form.fecha} onChange={handleChange} className="border rounded px-4 py-2" />
      <input type="time" name="hora" value={form.hora} onChange={handleChange} className="border rounded px-4 py-2" />

      <select name="servicio" value={form.servicio} onChange={handleChange} className="border rounded px-4 py-2">
        <option value="">Selecciona un servicio</option>
        <option value="hogar">Limpieza de Hogar</option>
        <option value="oficina">Limpieza de Oficina</option>
        <option value="evento">Limpieza Post-Evento</option>
      </select>

      <button type="submit" className="col-span-full bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">
        Reservar Ahora
      </button>
    </form>
  );
};

export default ReservaFormulario;