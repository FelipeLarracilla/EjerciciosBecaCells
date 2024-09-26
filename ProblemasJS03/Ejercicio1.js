document.addEventListener('mousemove', (event) => {
    // Posición respecto a la ventana (viewport)
    const viewportX = event.clientX;/*
    La propiedad de solo lectura clientX de la interfaz MouseEvent proporciona la coordenada horizontal dentro de la ventana gráfica de la aplicación en la que ocurrió el evento (a diferencia de la coordenada dentro de la página).*/
    const viewportY = event.clientY;/*
    La propiedad de solo lectura clientY de la interfaz MouseEvent proporciona la coordenada vertical dentro de la ventana gráfica de la aplicación en la que ocurrió el evento (a diferencia de la coordenada dentro de la página).*/

    // Posición respecto a toda la página (documento)
    const pageX = event.pageX;/*
    La propiedad de solo lectura pageX de la interfaz MouseEvent devuelve la coordenada X (horizontal) (en píxeles) en la que se hizo clic con el mouse, en relación con el borde izquierdo de todo el documento. Esto incluye cualquier parte del documento que no esté visible en ese momento.*/
    const pageY = event.pageY;/*La propiedad de solo lectura pageY de la interfaz MouseEvent devuelve la coordenada Y (vertical) (en píxeles) en la que se hizo clic con el mouse, en relación con el borde superior de todo el documento. Esto incluye cualquier parte del documento que no esté visible en ese momento.*/

    // Actualizar el contenido HTML con las posiciones
    document.getElementById('viewport').textContent = `X: ${viewportX}, Y: ${viewportY}`;
    document.getElementById('page').textContent = `X: ${pageX}, Y: ${pageY}`;
});
/*
El método getElementById() de la interfaz Document devuelve un objeto Element que representa el elemento cuya propiedad id coincide con la cadena especificada. Dado que los identificadores de elementos deben ser únicos si se especifican, son una forma útil de obtener acceso a un elemento específico rápidamente.*/

// Mostrar la tecla presionada
/*El método addEventListener() de la interfaz EventTarget configura una función que se llamará siempre que el evento especificado se entregue al destino.*/
document.addEventListener('keydown', (event) => {
    const key = event.key;

    // Mostrar el cuadro de tecla presionada si no está visible
    const keyOutput = document.getElementById('key-output');
    if (keyOutput.style.display === 'none') {
        keyOutput.style.display = 'block';
    }
    // Actualizar el contenido HTML con la tecla presionada
    document.getElementById('key').textContent = `Tecla: ${key}`;
});
