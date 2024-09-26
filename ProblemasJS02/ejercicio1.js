const personArr = [
    {
        "personId": 123,
        "name": "Jhon",
        "city": "Melbourne",
        "phoneNo": "1234567890"
    },
    {
        "personId": 124,
        "name": "Amelia",
        "city": "Sydney",
        "phoneNo": "1234567890"
    },
    {
        "personId": 125,
        "name": "Emily",
        "city": "Perth",
        "phoneNo": "1234567890"
    },
    {
        "personId": 126,
        "name": "Abraham",
        "city": "Perth",
        "phoneNo": "1234567890"
    },
]
//Genera una tabla con javascritp en un documento HTML que presente los datos

// Función que genera la tabla HTML dinámicamente a partir de un arreglo de datos
function generateTable(data) {
    // Crea la tabla y sus componentes principales: thead y tbody
    const table = document.createElement('table'); // Crea el elemento <table>
    const thead = document.createElement('thead'); // Crea el encabezado <thead>
    const tbody = document.createElement('tbody'); // Crea el cuerpo de la tabla <tbody>

    // Crea una fila para los encabezados de la tabla
    const headers = ['Person ID', 'Name', 'City', 'Phone No']; // Definición de los encabezados
    const trHead = document.createElement('tr'); // Crea una fila <tr> para los encabezados
    headers.forEach(header => {
        const th = document.createElement('th'); // Crea una celda de encabezado <th> por cada elemento
        th.textContent = header; // Asigna el texto del encabezado
        trHead.appendChild(th); // Agrega la celda <th> a la fila de encabezados
        /*
        appendChild Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.

Si el hijo(Child) es una referencia(hace referencia) hacia un nodo existente en el documento actual, este es quitado del padre actual para ser puesto en el nodo padre nuevo. La clave está en si el (Child) es una referencia a un nodo existente en el documento.*/

    });
    thead.appendChild(trHead); // Agrega la fila de encabezados <tr> al elemento <thead>

    // Crea las filas de datos a partir del arreglo de personas
    data.forEach(person => {
        const tr = document.createElement('tr'); // Crea una nueva fila <tr> para cada persona
        Object.values(person).forEach(value => {
            /*El método Object.values() devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto. Las propiedades son devueltas en el mismo orden a como lo haría un bucle for...in (la única diferencia es que un bucle for-in también enumera las propiedades en la cadena de prototipo de un objeto).*/
            const td = document.createElement('td'); // Crea una celda de datos <td> por cada valor de la persona
            td.textContent = value; // Asigna el valor del dato a la celda
            tr.appendChild(td); // Agrega la celda <td> a la fila <tr>
        });
        tbody.appendChild(tr); // Agrega la fila completa <tr> al cuerpo de la tabla <tbody>
    });

    // Agrega el encabezado y el cuerpo a la tabla
    table.appendChild(thead); // Añade el encabezado <thead> a la tabla
    table.appendChild(tbody); // Añade el cuerpo <tbody> a la tabla
    return table; // Devuelve el elemento <table> completo
}

// Inserta la tabla generada en el contenedor con id "table-container"
document.getElementById('table-container').appendChild(generateTable(personArr));