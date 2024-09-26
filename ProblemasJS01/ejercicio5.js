var myArray = [1, 2, 3, 4];
//Generar un funcion para imprimir en consola el numero maximo y el numero minimo 

function printMinMax(arr) {
    const max = Math.max(...arr);/*La función Math.max() retorna el mayor de cero o más números dados como parámetros de entrada, o NaN si cualquier parámetro no es un número y no puede ser convertido en uno.*/
    const min = Math.min(...arr);/*La función Math.min() devuelve el menor de cero o más números.*/
    console.log(`Numero Max: ${max}`);
    console.log(`Numero Min: ${min}`);
}
printMinMax(myArray);
