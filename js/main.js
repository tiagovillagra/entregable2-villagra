const productos = [
    {
        id: 1,
        prenda: "bermuda",
        precio: 26000
    },
    {
        id: 2,
        prenda: "buzo over",
        precio: 50000
    },
    {
        id: 3,
        prenda: "pantalon moom",
        precio: 45000
    },
    {
        id: 4,
        prenda: "remera over",
        precio: 20000
    },
    {
        id: 5,
        prenda: "chomba",
        precio: 19000
    },
]

let cartProducts = []

let stockropa = document.getElementById("stock-ropa")

function renderProductos(productsArray) {
    productsArray.forEach(producto => {
        const card = document.createElement("div")
        card.innerHTML = `<h3>${producto.prenda}</h3>
                <p>${producto.precio}</p>
                <button class="productoAgregar" id="${producto.id}">Agregar</button>`
        stockropa.appendChild(card)
    })
    addToCartButton()
}

renderProductos(productos)

function addToCartButton() {
    addButton = document.querySelectorAll(".productoAgregar")
    addButton.forEach(button => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id
            const selectedProduct = productos.find(producto => producto.id == productId)
            cartProducts.push(selectedProduct)
            console.log(cartProducts)

            localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
        }
    })
}
JSON.parse(localStorage.getItem("cartProductos")) || []