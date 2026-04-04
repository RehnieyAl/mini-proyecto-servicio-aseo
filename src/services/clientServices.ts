import type { cliente } from "../types/index";

// FAKE DB PARA DEMO
const clientes: cliente[] = [
  { id: 1, nombre: "Ana Martínez", telefono: "3001234567", direccion: "Calle 1 #12-34" },
  { id: 2, nombre: "Juan Pérez", telefono: "3009876543", direccion: "Carrera 5 #56-78" },
];


export const getClientes = async (): Promise<cliente[]> => {
  return clientes;
};

export const createCliente = async (nuevoCliente: cliente): Promise<cliente> => {
  clientes.push(nuevoCliente);
  return nuevoCliente;
};

// ACTUALIZAR CLIENTE
export const updateCliente = async (id: number, data: Partial<cliente>): Promise<cliente | undefined> => {
  const index = clientes.findIndex(c => c.id === id);
  if (index === -1) return undefined;
  clientes[index] = { ...clientes[index], ...data };
  return clientes[index];
};


export const deleteCliente = async (id: number): Promise<boolean> => {
  const index = clientes.findIndex(c => c.id === id);
  if (index === -1) return false;
  clientes.splice(index, 1);
  return true;
};