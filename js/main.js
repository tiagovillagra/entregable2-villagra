const productos = [
    { nombre: "Remera", precio: 1000 },
    { nombre: "Jean", precio: 2000 },
    { nombre: "Buzo", precio: 1500 }
];

function mostrarMenu() {
    let menu = "¿Qué deseas comprar? (elige la opción correspondiente)\n";
    
    
    for (let i = 0; i < productos.length; i++) {
        menu += `${i + 1}. ${productos[i].nombre} - $${productos[i].precio}\n`;
    }
    menu += `${productos.length + 1}. Salir`;  
    let seleccion = prompt(menu);
    
    return parseInt(seleccion);
}

function confirmarCompra(producto, precio) {
    let confirmacion = confirm(`Has seleccionado ${producto} con un precio de $${precio}. ¿Deseas confirmar tu compra?`);
    if (confirmacion) {
        alert(`Gracias por tu compra de un/a ${producto}!`);
    } else {
        alert("No se ha realizado la compra.");
    }
}

function tienda() {
    let seleccion = mostrarMenu();
    
    if (isNaN(seleccion) || seleccion < 1 || seleccion > productos.length + 1) {
        alert("Selección no válida. Por favor, intenta de nuevo.");
        tienda();  
    } else if (seleccion === productos.length + 1) {
        alert("Gracias por visitar nuestra tienda. ¡Hasta la próxima!");
        return;  
    } else {
        let productoSeleccionado = productos[seleccion - 1];
        confirmarCompra(productoSeleccionado.nombre, productoSeleccionado.precio);
    }
}

tienda();


