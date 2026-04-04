import type { ReactNode } from "react";
import { createContext, useState } from "react";
import type { reservacion } from "../types/index";

import {
    getReservaciones,
    createReservacion,
    updateReservacion,
    deleteReservacion
} from "../services/reservaServices";

interface ReservaContextType {
    reservaciones: reservacion[];
    cargarReservaciones: () => Promise<void>;
    agregarReservacion: (reservacion: reservacion) => Promise<void>;
    modificarReservacion: (id: number, data: Partial<reservacion>) => Promise<void>;
    eliminarReservacion: (id: number) => Promise<void>;
}

const ReservaContext = createContext<ReservaContextType | undefined>(undefined);

export const ReservaProvider = ({ children }: { children: ReactNode }) => {
    const [reservaciones, setReservaciones] = useState<reservacion[]>([]);

    const cargarReservaciones = async () => {
        try {
            const data = await getReservaciones();
            setReservaciones(data);
        } catch (error) {
            console.error("Error al cargar reservaciones:", error);
        }
    }

    const agregarReservacion = async (reservacion: reservacion) => {
        try {
            const nuevaReservacion = await createReservacion(reservacion);
            setReservaciones(prev => [...prev, nuevaReservacion]);
        } catch (error) {
            console.error("Error al agregar reservación:", error);
        }
    }

    const modificarReservacion = async (id: number, data: Partial<reservacion>) => {
        try {
            const reservacionActualizada = await updateReservacion(id, data);
            if (reservacionActualizada) {
                setReservaciones(prev => prev.map(r => r.id === id ? reservacionActualizada : r));
            }
        } catch (error) {
            console.error("Error al modificar reservación:", error);
        }
    }

    const eliminarReservacion = async (id: number) => {
        try {
            const exito = await deleteReservacion(id);
            if (exito) {
                setReservaciones(prev => prev.filter(r => r.id !== id));
            }
        } catch (error) {
            console.error("Error al eliminar reservación:", error);
        }
    }


    return (
        <ReservaContext.Provider value={{ reservaciones, cargarReservaciones, agregarReservacion, modificarReservacion, eliminarReservacion }}>
            {children}
        </ReservaContext.Provider>
    );
}

export { ReservaContext };
