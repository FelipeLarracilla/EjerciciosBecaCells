var object = {
    key1: 10,
    key2: 3,
    key3: 40,
    key4: 20
};
//Generar la funcion para pasar cada elemento key a un arreglo y ordenados segun su valor 
function sortKeysByValue(obj) {
    return Object.entries(obj)/* convierte el objeto en un array de pares [clave, valor].*/
        .sort(([, value1], [, value2]) => value1 - value2) //ordenar por su valor
        .forEach(([key, value]) => {/*recorre cada par ordenado e imprime las claves y valores en el orden correspondiente.*/
            console.log(`Key: ${key}, Value: ${value}`)
        });
}
const sortedKeys = sortKeysByValue(object);
console.log(sortedKeys);
/*
El método Object.entries() devuelve un arreglo de pares propios de una propiedad enumerable [key, value] de un objeto dado, en el mismo orden que es proporcionado por for...in (La diferencia es que un bucle for-in enumera las propiedades en la cadena de prototipos).*/

/*El método sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. La ordenación no es necesariamente estable. El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su valor Unicode.*/