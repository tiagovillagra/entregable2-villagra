let cartContainer = document.getElementById("cart-section");
let totalContainer = document.getElementById("total-section");

let cartStorage = localStorage.getItem("cartProducts");
cartStorage = JSON.parse(cartStorage) || [];

function renderCarrito(cartItems) {
    cartContainer.innerHTML = "";
    cartItems.forEach((producto, index) => {
        const card = document.createElement("div");
        card.classList.add("cart-item");
        card.innerHTML = `
            <img src="${producto.img}" alt="${producto.prenda}" class="cart-item-img">
            <h3>${producto.prenda}</h3>
            <p>$${producto.precio}</p>
            <button class="remove-btn" data-index="${index}">Eliminar</button>`;
        cartContainer.appendChild(card);
    });

    const removeButtons = document.querySelectorAll(".remove-btn");
    removeButtons.forEach(button => {
        button.addEventListener("click", removeProduct);
    });

    calcularTotal(cartItems);


    if (cartItems.length > 0) {
        agregarBotonFinalizarCompra();
    }
}

function agregarBotonFinalizarCompra() {
    const existingButton = document.querySelector(".finalizar-compra-btn");


    if (!existingButton) {
        const finalizarCompraBtn = document.createElement("button");
        finalizarCompraBtn.textContent = "Finalizar compra";
        finalizarCompraBtn.classList.add("finalizar-compra-btn");
        finalizarCompraBtn.style.marginTop = "20px";


        cartContainer.appendChild(finalizarCompraBtn);


        finalizarCompraBtn.addEventListener("click", finalizarCompra);
    }


}



function removeProduct(event) {
    const productIndex = event.target.getAttribute("data-index");

    Swal.fire({
        title: "¿Desea borrar este producto?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Borrar",
        denyButtonText: "No borrar"
    }).then((result) => {
        if (result.isConfirmed) {

            cartStorage.splice(productIndex, 1);
            localStorage.setItem("cartProducts", JSON.stringify(cartStorage));
            renderCarrito(cartStorage);


            Swal.fire("¡Producto eliminado!", "", "success");
        } else if (result.isDenied) {

            Swal.fire("El producto no ha sido eliminado", "", "info");
        }
    });
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
    cartContainer.innerHTML = "<p>No hay productos en el carrito.</p>";
    totalContainer.innerHTML = "";
}

function finalizarCompra() {
    if (cartStorage.length > 0) {
        Swal.fire("¡Gracias por tu compra en Ayzus! Esperamos que disfrutes de tu nueva prenda. ¡Te esperamos pronto!");
        cartStorage = [];
        localStorage.setItem("cartProducts", JSON.stringify(cartStorage));
        renderCarrito(cartStorage);
        totalContainer.innerHTML = "";
    } else {
        Swal.fire({
            icon: "error",
            title: "Ups...",
            text: "No hay productos en el carrito!",
            footer: '<a href="/index.html">Cargar productos al carrito</a>'
        });
    }
}
