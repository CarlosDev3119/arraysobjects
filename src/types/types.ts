 type Persona = {
    nombre: string;
    apellido: string;
    edad: number;
    direccion: Direccion;
    telefono?: number;
    [key: string]: any;
}
type Direccion = {
    ciudad: string;
    zip: number;
}

export default Persona;