import type { ReactNode } from "react";
import { createContext, useState } from "react";
import type { reservacion } from "../types/index";
import { getTurnos, createTurno, updateTurno, deleteTurno } from "../services/turnoServices";

interface TurnoContextType {
  turnos: reservacion[];
  cargarTurnos: () => Promise<void>;
  agregarTurno: (turno: reservacion) => Promise<void>;
  modificarTurno: (id: number, data: Partial<reservacion>) => Promise<void>;
  eliminarTurno: (id: number) => Promise<void>;
}

const TurnoContext = createContext<TurnoContextType | undefined>(undefined);

export const TurnoProvider = ({ children }: { children: ReactNode }) => {
  const [turnos, setTurnos] = useState<reservacion[]>([]);

  const cargarTurnos = async () => {
    try {
      const data = await getTurnos();
      setTurnos(data);
    } catch (error) {
      console.error("Error al cargar turnos:", error);
    }
  };

  const agregarTurno = async (nuevoTurno: reservacion) => {
    try {
      const creado = await createTurno(nuevoTurno);
      setTurnos(prev => [...prev, creado]);
    } catch (error) {
      console.error("Error al agregar turno:", error);
    }
  };

  const modificarTurno = async (id: number, data: Partial<reservacion>) => {
    try {
      const actualizado = await updateTurno(id, data);
      if (actualizado) setTurnos(prev => prev.map(t => t.id === id ? actualizado : t));
    } catch (error) {
      console.error("Error al modificar turno:", error);
    }
  };

  const eliminarTurno = async (id: number) => {
    try {
      const exito = await deleteTurno(id);
      if (exito) setTurnos(prev => prev.filter(t => t.id !== id));
    } catch (error) {
      console.error("Error al eliminar turno:", error);
    }
  };

  return (
    <TurnoContext.Provider value={{ turnos, cargarTurnos, agregarTurno, modificarTurno, eliminarTurno }}>
      {children}
    </TurnoContext.Provider>
  );
};

export { TurnoContext };