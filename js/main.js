let carrito = [];
let total = 0;


function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    actualizarCarrito();
}


function eliminarDelCarrito(index) {
    carrito.splice(index, 1); 
    actualizarCarrito();
}


function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElement = document.getElementById('total');
    listaCarrito.innerHTML = '';
    total = 0;

    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.producto} - $${item.precio}`;
        
        
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.onclick = () => eliminarDelCarrito(index); 
        li.appendChild(btnEliminar);

        listaCarrito.appendChild(li);
        total += item.precio;
    });

    totalElement.textContent = total;
}


function finalizarCompra() {
    alert('Gracias por tu compra. Total a pagar: $' + total);
    carrito = [];
    actualizarCarrito();
}



