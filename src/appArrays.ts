

// // const numbers: number[] = [1, 2, 3];
// // const peliculas: string[] = [ 'avengers', 'capitan america' ];
// // console.log( numbers[0] )

// // let a = 1;
// // let b = a;
// // b = 10;
// // console.log({ a, b })
// // const numbers: number[] = [1, 2, 3];
// //const aux: number[] = numbers.slice(); //rompe la referencia
// // const aux: number[] = [...numbers];

// // const peliculas: string[] = [
// //                                 'avengers',
// //                                 'toy story',
// //                                 'interestelar',
// //                                 'bad boys'
// //                             ];
                            
// // console.log(`La pelicula es: ${peliculas[1]}`);
// // console.log(`La pelicula es: ${peliculas[2]}`);

// //push() agregar datos al final de un arreglo 
// // peliculas.push('crepusculo', 'harry potter 1');
// // //unshift() agrega datos al principio de un arreglo
// // peliculas.unshift('harry potter 2');
// // for(let i: number = 0; i < peliculas.length ; i++){
// //     console.log(`La pelicula es: ${peliculas[i]}`);
// // }


// // concat() se encarga de unir dos o mas arreglos y regresa un nuevo arreglo

// // const conjuntoA: number[] = [1,2,3];
// // const conjuntoB: number[] = [4,5,6,7,8,9,10];
// // const conjuntoUniversal: number[] = conjuntoA.concat(conjuntoB);
// // const conjuntoUniversal: number[] = [...conjuntoA, ...conjuntoB];

// // console.log(conjuntoUniversal)


// //metodo find() sirve para buscar elementos dentro de un arreglo
// // const peliculas: string[] = [
// //     'avengers',
// //     'toy story',
// //     'interestelar',
// //     'bad boys'
// // ];

// // const pelicula: string | undefined = peliculas.find((value) => value === 'toy story');
// // console.log(pelicula)
// // let pelicula: string = '';

// // for(let i: number = 0; i < peliculas.length; i++){
// //     if(peliculas[i] === 'toy story'){
// //         pelicula = peliculas[i];
// //     }

// // }
// // console.log(pelicula)


// //filter()
// // const words: string[] = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// // console.time()
// // const newWords: string[] = words.filter( word => word.length > 5 );
// // console.timeEnd()
// // console.log(newWords)
// // console.time()

// // const newWords: string[] = [];
// // for(let i: number = 0; i < words.length; i++){
// //     if(words[i].length > 5){
// //         newWords.push(words[i])
// //     }

// // }

// // console.log(newWords)

// //metodo shift() sirve para eliminar datos al principio de un array
// // const words: string[] = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
// // let palabraEliminada: string | undefined = words.shift()
// // console.log(palabraEliminada, words)

// //metodo pop() sirve para eliminar datos al final de un array
// // const words: string[] = [];
// // let palabraEliminada: string = words.pop() || 'sin datos';
// // // if( palabraEliminada === undefined){
// // //     palabraEliminada = 'sin datos'
// // // }
// // console.log(palabraEliminada, words);

// //acceder al ultimo elemento del array at()
// const words: string[] = [
//     'spray', 'elite', 'exuberant', 'destruction', 'present', 'play'
// ];

// // console.log( words[]);
// console.log( words.at(-1) );


