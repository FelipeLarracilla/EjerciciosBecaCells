const number = [5, 32, 43, 4];
let result = number.filter(function (n) { return n % 2 !== 0; });
console.log(result);
/*
El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
Y la funcion solo nos retorna los numero que al dividir entre 2 el residuo sea
diferente de 0
Eso significa que es un numero impar o no es multiplo de 2
*/