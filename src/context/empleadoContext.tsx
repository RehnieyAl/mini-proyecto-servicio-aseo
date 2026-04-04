import type { ReactNode } from "react";
import { createContext, useState } from "react";
import type { empleado } from "../types/index";
import { 
    getEmpleados, 
    createEmpleado, 
    updateEmpleado, 
    deleteEmpleado 
} from "../services/empleadoServices";

interface EmpleadoContextType {
  empleados: empleado[];
  cargarEmpleados: () => Promise<void>;
  agregarEmpleado: (empleado: empleado) => Promise<void>;
  modificarEmpleado: (id: number, data: Partial<empleado>) => Promise<void>;
  eliminarEmpleado: (id: number) => Promise<void>;
}

const EmpleadoContext = createContext<EmpleadoContextType | undefined>(undefined);

export const EmpleadoProvider = ({ children }: { children: ReactNode }) => {
  const [empleados, setEmpleados] = useState<empleado[]>([]);

  const cargarEmpleados = async () => {
    try {
      const data = await getEmpleados();
      setEmpleados(data);
    } catch (error) {
      console.error("Error al cargar empleados:", error);
    }
  };

  const agregarEmpleado = async (nuevoEmpleado: empleado) => {
    try {
      const creado = await createEmpleado(nuevoEmpleado);
      setEmpleados(prev => [...prev, creado]);
    } catch (error) {
      console.error("Error al agregar empleado:", error);
    }
  };

  const modificarEmpleado = async (id: number, data: Partial<empleado>) => {
    try {
      const actualizado = await updateEmpleado(id, data);
      if (actualizado) setEmpleados(prev => prev.map(e => e.id === id ? actualizado : e));
    } catch (error) {
      console.error("Error al modificar empleado:", error);
    }
  };

  const eliminarEmpleado = async (id: number) => {
    try {
      const exito = await deleteEmpleado(id);
      if (exito) setEmpleados(prev => prev.filter(e => e.id !== id));
    } catch (error) {
      console.error("Error al eliminar empleado:", error);
    }
  };

  return (
    <EmpleadoContext.Provider value={{ empleados, cargarEmpleados, agregarEmpleado, modificarEmpleado, eliminarEmpleado }}>
      {children}
    </EmpleadoContext.Provider>
  );
};

export { EmpleadoContext };