const remera = 1000;
const jean = 2000;
const buzo = 1500;


function mostrarMenu() {
    let seleccion = prompt("¿Qué deseas comprar? (eliga la opcion correspondiente)\n1. Remera\n2. Jean\n3. Buzo");
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
    switch (seleccion) {
        case 1:
            confirmarCompra('Remera', remera);
            break;
        case 2:
            confirmarCompra('Jean', jean);
            break;
        case 3:
            confirmarCompra('Buzo', buzo);
            break;
        default:
            alert("Selección no válida. Por favor, intenta de nuevo.");
            tienda();  
    }
}


tienda();

