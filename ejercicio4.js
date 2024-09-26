let people = [
    { name: "bob", id: 1 },
    { name: "john", id: 2 },
    { name: "alex", id: 3 },
    { name: "john", id: 4 }
];

/*El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.*/
function countNames(people) {
    return people.reduce((acc, person) => {
        acc[person.name] = (acc[person.name] || 0) + 1;
        return acc;
    }, {});
}


const nameCounts = countNames(people);
console.log(nameCounts);

/*
La función reductora recibe cuatro argumentos:

1- Acumulador (acc) 
2- Valor Actual (cur)
3- Índice Actual (idx)
4- Array (src)
*/