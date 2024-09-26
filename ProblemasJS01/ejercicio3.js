const people = [{
    id: 1,
    name: "John",
    age: 28
},
{
    id: 2,
    name: "Jane",
    age: 31
},
{
    id: 3,
    name: "Peter",
    age: 55
}];
//Genera la funcion en javascript que filtre a las personas menores de 35 años

function filtrar(people) {
    return people.filter(person => person.age < 35);
    //El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada
}
const youngpeople = filtrar(people)
console.log(youngpeople);

