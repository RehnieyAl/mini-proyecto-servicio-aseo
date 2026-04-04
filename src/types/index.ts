 export interface cliente {
    id: number;
    nombre: string;
    telefono: string;
    direccion: string;
}

export interface empleado {
    id: number;
    nombre: string;
    especialidad: string;
    telefono: string;
}

export interface reservacion {
    id: number;
    clienteID: number;
    empleadoID: number;
    fecha: Date;
    horainicio: string;
    horafin: string;
    servicio: string;
    estado: string;
}

export interface ReservaForm {
    nombre: string;
    telefono: string;
    direccion: string;
    fecha: string;
    hora: string;
    servicio: string;
}


