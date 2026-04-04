import type { reservacion } from "../types/index";

// FAKE DB FOR DEMO PURPOSES

const reservaciones: reservacion[] = [
    {
        id: 1,
        clienteID: 1,
        empleadoID: 1,
        fecha: new Date('2024-07-01'),
        horainicio: '10:00',
        horafin: '12:00',
        servicio: 'Limpieza de hogar',
        estado: 'pendiente'
    },
    {
        id: 2,
        clienteID: 2,
        empleadoID: 2,
        fecha: new Date('2024-07-02'),
        horainicio: '14:00',
        horafin: '16:00',
        servicio: 'Limpieza de oficina',
        estado: 'confirmada'
    }
];

// OBTENER RESERVACIONES
export const getReservaciones = async (): Promise<reservacion[]> => {
    return reservaciones;
};

// CREAR RESERVACION
export const createReservacion = async (reservacion: reservacion): Promise<reservacion> => {
    reservaciones.push(reservacion);
    return reservacion;
}

// ACTUALIZAR RESERVACION
export const updateReservacion = async (id: number, data: Partial<reservacion>): Promise<reservacion | undefined> => {
    const index = reservaciones.findIndex(r => r.id === id);
    if (index === -1) return undefined;
    reservaciones[index] = { ...reservaciones[index], ...data };
    return reservaciones[index];
}

// ELIMINAR RESERVACION
export const deleteReservacion = async (id: number): Promise<boolean> => {
    const index = reservaciones.findIndex(r => r.id === id);
    if (index === -1) return false;
    reservaciones.splice(index, 1);
    return true;
}