import type { empleado } from "../types/index";

// FAKE DB PARA DEMO
const empleados: empleado[] = [
  { id: 1, nombre: "Carlos Pérez", especialidad: "Limpieza de hogar", telefono: "3111234567" },
  { id: 2, nombre: "María Gómez", especialidad: "Limpieza de oficina", telefono: "3119876543" },
];

export const getEmpleados = async (): Promise<empleado[]> => {
  return empleados;
};


export const createEmpleado = async (nuevoEmpleado: empleado): Promise<empleado> => {
  empleados.push(nuevoEmpleado);
  return nuevoEmpleado;
};


export const updateEmpleado = async (id: number, data: Partial<empleado>): Promise<empleado | undefined> => {
  const index = empleados.findIndex(e => e.id === id);
  if (index === -1) return undefined;
  empleados[index] = { ...empleados[index], ...data };
  return empleados[index];
};


export const deleteEmpleado = async (id: number): Promise<boolean> => {
  const index = empleados.findIndex(e => e.id === id);
  if (index === -1) return false;
  empleados.splice(index, 1);
  return true;
};