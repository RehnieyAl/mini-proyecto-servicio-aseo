import type { ReactNode } from "react";
import { createContext, useState } from "react";
import type { cliente } from "../types/index";
import { 
  getClientes, 
  createCliente 
} from "../services/clientServices";

interface ClienteContextType {
  clientes: cliente[];
  cargarClientes: () => Promise<void>;
  agregarCliente: (c: cliente) => Promise<void>;
}

const ClienteContext = createContext<ClienteContextType | undefined>(undefined);

export const ClienteProvider = ({ children }: { children: ReactNode }) => {
  const [clientes, setClientes] = useState<cliente[]>([]);

  const cargarClientes = async () => {
    const data = await getClientes();
    setClientes(data);
  };

  const agregarCliente = async (c: cliente) => {
    const nuevo = await createCliente(c);
    setClientes(prev => [...prev, nuevo]);
  };

  return (
    <ClienteContext.Provider value={{ clientes, cargarClientes, agregarCliente }}>
      {children}
    </ClienteContext.Provider>
  );
};

export { ClienteContext };