import type { reservacion } from "../types/index";

// FAKE DB PARA DEMO JSON
const turnos: reservacion[] = [
  { id: 1, clienteID: 1, empleadoID: 1, fecha: new Date(), horainicio: "08:00", horafin: "12:00", estado: "pendiente", servicio: "limpieza de hogar" },
  { id: 2, clienteID: 2, empleadoID: 2, fecha: new Date(), horainicio: "13:00", horafin: "17:00", estado: "pendiente", servicio: "limpieza de oficina" },
];


export const getTurnos = async (): Promise<reservacion[]> => {
  return turnos;
};

export const createTurno = async (nuevoTurno: reservacion): Promise<reservacion> => {
  turnos.push(nuevoTurno);
  return nuevoTurno;
};


export const updateTurno = async (id: number, data: Partial<reservacion>): Promise<reservacion | undefined> => {
  const index = turnos.findIndex(t => t.id === id);
  if (index === -1) return undefined;
  turnos[index] = { ...turnos[index], ...data };
  return turnos[index];
};

export const deleteTurno = async (id: number): Promise<boolean> => {
  const index = turnos.findIndex(t => t.id === id);
  if (index === -1) return false;
  turnos.splice(index, 1);
  return true;
};