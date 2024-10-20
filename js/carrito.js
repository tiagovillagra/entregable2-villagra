// let cartContainer = document.getElementById("cart-section")

// let cartStorage = localStorage.getItem("cartProducts")
// cartStorage = JSON.parse(cartStorage)

// function renderCarrito(cartItems) {
//     cartItems.forEach(producto => {
//         const card = document.createElement("div")
//         card.innerHTML = `<h3>${producto.nombre}</h3>
//                             <p>$${producto.precio}</p>`
//         cartContainer.appendChild(card)
//     })
// }
// renderCarrito(cartStorage)
// let cartContainer = document.getElementById("cart-section");

// let cartStorage = localStorage.getItem("cartProducts");
// cartStorage = JSON.parse(cartStorage) || [];

// function renderCarrito(cartItems) {
//     cartContainer.innerHTML = ""; // Limpiar el contenido antes de renderizar nuevamente
//     cartItems.forEach((producto, index) => {
//         const card = document.createElement("div");
//         card.innerHTML = `<h3>${producto.nombre}</h3>
//                 <p>$${producto.precio}</p>
//                 <button class="remove-btn" data-index="${index}">Eliminar</button>`;
//         cartContainer.appendChild(card);
//     });

//     // Añadir el evento a los botones de eliminar
//     const removeButtons = document.querySelectorAll(".remove-btn");
//     removeButtons.forEach(button => {
//         button.addEventListener("click", removeProduct);
//     });
// }

// function removeProduct(event) {
//     const productIndex = event.target.getAttribute("data-index");
//     cartStorage.splice(productIndex, 1); // Eliminar producto del array
//     localStorage.setItem("cartProducts", JSON.stringify(cartStorage)); // Actualizar el localStorage
//     renderCarrito(cartStorage); // Volver a renderizar el carrito
// }

// // Verificar si hay productos en el carrito y renderizarlos
// if (cartStorage.length > 0) {
//     renderCarrito(cartStorage);
// } else {
//     cartContainer.innerHTML = "<p>No hay productos en el carrito</p>";
// }
let cartContainer = document.getElementById("cart-section");
let totalContainer = document.getElementById("total-section");

let cartStorage = localStorage.getItem("cartProducts");
cartStorage = JSON.parse(cartStorage) || [];

function renderCarrito(cartItems) {
    cartContainer.innerHTML = ""; //
    cartItems.forEach((producto, index) => {
        const card = document.createElement("div");
        card.innerHTML = `<h3>${producto.nombre}</h3>
                    <p>$${producto.precio}</p>
                    <button class="remove-btn" data-index="${index}">Eliminar</button>`;
        cartContainer.appendChild(card);
    });

    
    const removeButtons = document.querySelectorAll(".remove-btn");
    removeButtons.forEach(button => {
        button.addEventListener("click", removeProduct);
    });

    
    calcularTotal(cartItems);
}

function removeProduct(event) {
    const productIndex = event.target.getAttribute("data-index");
    cartStorage.splice(productIndex, 1); 
    localStorage.setItem("cartProducts", JSON.stringify(cartStorage)); 
    renderCarrito(cartStorage); 
}

function calcularTotal(cartItems) {
    let total = 0;
    cartItems.forEach(producto => {
        total += producto.precio;
    });

    totalContainer.innerHTML = `<h3>Total: $${total}</h3>`;
}


if (cartStorage.length > 0) {
    renderCarrito(cartStorage);
} else {
    cartContainer.innerHTML = "<p>No hay productos en el carrito</p>";
    totalContainer.innerHTML = ""; 
}

