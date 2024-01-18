

// const desarrollador = {
//     nombre: 'Tony',
//     apellido: 'Stark',
//     edad: 45,
//     direccion: {
//         ciudad: 'New York',
//         zip: 123
//     }
// }

//todo: tipado para nuestro objeto 
//todo: optimizar tipado
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


const desarrollador: Persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 123
    },
    telefono: 6699887733
}

//todo: agregar elemementos dinamicos
desarrollador.estatura = 1.78;
desarrollador.hobbies = ['programar', 'videojuegos']
console.log(desarrollador)
//todo: como agregar elementos a un objeto
// desarrollador.telefono = 5580989656;
// desarrollador['telefono'] = 5580989656;

//todo: como eliminar elementos de un objeto
// delete desarrollador.telefono;

//otra forma = desestructuracion 
// const copia = { ...desarrollador }
// const { telefono, ...rest } = copia;
//desestructuracion en arreglos

// const palabras: string[] = ['html', 'css', 'js'];
// const [x, y, z] = palabras;


// const {ciudad } = direccion;

//todo: como recorrer los datos de un objeto
// // console.log(Object.keys(desarrollador));
// Object.values(desarrollador).forEach( value => {
//     console.log( value )
// })

// Object.keys(desarrollador).forEach( key => {
//     console.log( key )
// })




// //todo: como encontrar datos dentro de un objeto
// const resp = Object.keys(desarrollador).find( key => key === 'edad');

// console.log();


