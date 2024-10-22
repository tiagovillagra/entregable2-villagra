let cartContainer = document.getElementById("cart-section");
let totalContainer = document.getElementById("total-section");

let cartStorage = localStorage.getItem("cartProducts");
cartStorage = JSON.parse(cartStorage) || [];

function renderCarrito(cartItems) {
    cartContainer.innerHTML = ""; 
    cartItems.forEach((producto, index) => {
        const card = document.createElement("div");
        card.innerHTML = `<h3>${producto.prenda}</h3>
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
    cartContainer.innerHTML = "<p>no hay productos en el carrito</p>";
    totalContainer.innerHTML = ""; 
}
const finalizarCompraBtn = document.createElement("button");
finalizarCompraBtn.textContent = "Finalizar compra";
finalizarCompraBtn.classList.add("finalizar-compra-btn");
cartContainer.appendChild(finalizarCompraBtn);
// finalizarCompraBtn.style.marginTop = "20px"; 

finalizarCompraBtn.addEventListener("click", finalizarCompra);
function finalizarCompra() {
    if (cartStorage.length > 0) {
        alert("¡Gracias por tu compra en Ayzus! Esperamos que disfrutes de tu nueva prenda. ¡Te esperamos pronto!");
        cartStorage = [];
        localStorage.setItem("cartProducts", JSON.stringify(cartStorage));
        renderCarrito(cartStorage);
        totalContainer.innerHTML = ""; 
    } else {
        alert("El carrito está vacío.");
    }
}
