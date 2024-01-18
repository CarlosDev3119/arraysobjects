
// Ejercicio1
// 1,2,3,4,...10 la suma de todos los elementos
// let resultad0: number = 1+2+3+4+5+6+7+8+9+10+11;
// console.log(resultad0);

// //en array
// let numeros:number[] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 24,10];
// let resultado:number = 0;

// for(let i: number = 0; i < numeros.length; i++){
//     resultado = resultado + numeros[i];
// }   

// console.log(resultado)

// Ejercicio 2 encontrar los numeros pares y regresar un nuevo arreglo
// let numeros: number[] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 24, 10];
// const numerosPares: number[] = [];

// for(let i: number = 0; i < numeros.length; i++){
//     if(numeros[i] % 2 === 0 ){
//         numerosPares.push(numeros[i])
//     }
// }
// console.log( numerosPares )

// Ejercicio 3 encontrar los numeros pares , sumarlos y regresar un nuevo arreglo
// let numeros: number[] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 24, 10];
// let numerosPares: number = 0;

// for(let i: number = 0; i < numeros.length; i++){
//     if(numeros[i] % 2 === 0 ){
//         numerosPares += numeros[i]
//     }
// }
// console.log( numerosPares )


// Ejercicio 3 encontrar los numeros pares y regresar un nuevo arreglo filter();

// let numeros: number[] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 24, 10];
// let numerosPares: number[] = numeros.filter( numero => numero % 2 === 0);
// console.log(numerosPares)

// const numeros1: number[] = [5, 6, 7];
// const numeros2: number[] = [10, 1, 3]; 

// let resultado1: number = 0, 
//     resultado2: number = 0 ;

// for(let i: number = 0; i < numeros1.length; i++){
//     resultado1 = resultado1 + numeros1[i];
// }   

// for(let i: number = 0; i < numeros2.length; i++){
//     resultado2 = resultado2 + numeros2[i];
// }  
// ejercicio 5 filtrar todos los datos que sean menores al arreglo 1
// const numeros1: number[] = [5, 0, 7];
// const numeros2: number[] = [10, 1, 3]; 

// let resultado:number[] = [] 

// for(let i: number = 0; i < numeros1.length; i++){
//     for(let j: number = 0; j < numeros2.length; j++){
//         if( numeros1[i] >  numeros2[j]){
//             resultado.push(numeros2[j])
//         }
//     }   
    
// }   
// ejercicio 5 filtrar todos los datos que sean menores al arreglo 1 forEach()

// const numeros1: number[] = [5, 0, 7, 10,10];
// const numeros2: number[] = [10, 1, 3]; 
// let resultado: number [] = []
// numeros1.forEach( (numero) => {
//     let value: number[] = numeros2.filter( (numero2, i, array) => numero2 < numero );
//     resultado.push(...value)
// })

// console.log(resultado)

// console.log(resultado)






