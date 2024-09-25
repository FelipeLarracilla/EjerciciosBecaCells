const clientes = ['a', 'b', 'c', 'd'];
const empleados = ['x', 'y', 'z'];
let contactos = [];
/* El metodo de un arreglo concat() es usago para unir dos o mas arreglos.
Este metodo no cambia los metodos existentes, pero retorna un nuevo arreglo*/
//La opcion correcta es a)concat

contactos = clientes.concat(empleados);
console.log(contactos); // ['a', 'b', 'c', 'd', 'x', 'y', 'z']

/* El método de array join() une todos los elementos de una arreglo (o un objeto similar a una arreglo) en una cadena y devuelve esta cadena.Separados por una coma o un separador string*/

console.log(clientes.join(','));//a,b,c,d
console.log(empleados.join('-'));//x-y-z

/*El metodo de array agrega un elemento especificado al final del arreglo
y retorna el arreglo con su nueva longitud*/

contactos = clientes.push(empleados);
console.log(clientes); //['a', 'b', 'c', 'd', Array(3)]
console.log(contactos);//5
/*
El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.*/
//para insertar el segundo argumento es 0
clientes.splice(1, 0, 'A');
console.log(clientes);//['a', 'A', 'b', 'c', 'd', Array(3)]
//para eliminar el segundo argunmento 1 
clientes.splice(5, 1, 'e');
console.log(clientes);//['a', 'A', 'b', 'c', 'd', 'e']

clientes.splice(5, 0, 'f');
console.log(clientes);// ['a', 'A', 'b', 'c', 'd', 'f', 'e']
