export interface DatosPersonales {
    nombre: string,
    email: string,
    fechaNacimiento: string,
    sexo: string,
    celular: string,
    telefonoFijo: string,
    deportista: boolean,
    fumador: boolean,
    motivacion: string
}

export interface Piel {
    color: string,
    grosor: string,
    enfermedades: string[]
}

export interface TratamientoCosmetico {
    producto: string,
    fecha: string
}

export interface Paciente {
    datosPersonales: DatosPersonales,
    piel: Piel,
    tratamientosCosmeticos?: TratamientoCosmetico[] 
}