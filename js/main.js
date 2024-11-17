// const productos = [
//     {
//         id: 1,
//         prenda: "remera",
//         precio: 26000,
//         img: "../img/remereraej1.jpeg"
//     },
//     {
//         id: 2,
//         prenda: "remera",
//         precio: 26000,
//         img: "../img/remeraej2.jpeg"
//     },
//     {
//         id: 3,
//         prenda: "remera",
//         precio: 26000,
//         img: "../img/remeraej3.jpeg"
//     },
//     {
//         id: 4,
//         prenda: "buzo",
//         precio: 120000,
//         img: "../img/buzoej1.jpeg"
//     },
//     {
//         id: 5,
//         prenda: "buzo",
//         precio: 120000,
//         img: "../img/buzoej2.jpeg"
//     },
//     {
//         id: 6,
//         prenda: "buzo",
//         precio: 120000,
//         img: "../img/buzoej3.jpeg"
//     },
//     {
//         id: 7,
//         prenda: "pantalón cargo",
//         precio: 70000,
//         img: "../img/pantaloncargo.jpg"
//     },
//     {
//         id: 8,
//         prenda: "pantalon moom",
//         precio: 58000,
//         img: "../img/pantalonmoom.webp"
//     },
//     {
//         id: 9,
//         prenda: "bermuda de jean",
//         precio: 38000,
//         img: "../img/bermudadejean.jpg"
//     },
//     {
//         id: 10,
//         prenda: "bermuda cargo",
//         precio: 40000,
//         img: "../img/bermudacargo.jpg"
//     },
//     {
//         id: 11,
//         prenda: "bermuda moom",
//         precio: 30000,
//         img: "../img/bermudamoom.jpg"
//     }
// ]

// let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || []

// let stockropa = document.getElementById("stock-ropa")

// function renderProductos(productsArray) {
//     productsArray.forEach(producto => {
//         const card = document.createElement("div")
//         card.classList.add("product-card") 

//         card.innerHTML = `
//             <img src="${producto.img}" alt="${producto.prenda}" class="product-img">
//             <h3>${producto.prenda}</h3>
//             <p>Precio: $${producto.precio}</p>
//             <button class="productoAgregar" id="${producto.id}">Agregar</button>
//         `
//         stockropa.appendChild(card)
//     })
//     addToCartButton()
// }

// renderProductos(productos)

// function addToCartButton() {
//     const addButton = document.querySelectorAll(".productoAgregar")
//     addButton.forEach(button => {
//         button.onclick = (e) => {
//             const productId = e.currentTarget.id
//             const selectedProduct = productos.find(producto => producto.id == productId)
//             cartProducts.push(selectedProduct)
//             console.log(cartProducts)

//             localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
//         }
//     })
// }
let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
let stockropa = document.getElementById("stock-ropa");


async function fetchProductos() {
    try {
        const response = await fetch("https://tiagovillagra.github.io/entregable2-villagra/js/productos.json"); 
        if (!response.ok) throw new Error('Error al cargar los productos');
        const productos = await response.json();
        renderProductos(productos);
    } catch (error) {
        console.error('Hubo un problema al cargar los productos:', error);
        stockropa.innerHTML = "<p>Error al cargar los productos. Intenta nuevamente más tarde.</p>";
    }
}


function renderProductos(productsArray) {
    productsArray.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${producto.img}" alt="${producto.prenda}" class="product-img">
            <h3>${producto.prenda}</h3>
            <p>Precio: $${producto.precio}</p>
            <button class="productoAgregar" id="${producto.id}">Agregar</button>
        `;
        stockropa.appendChild(card);
    });
    addToCartButton();
}


function addToCartButton() {
    const addButton = document.querySelectorAll(".productoAgregar");
    addButton.forEach(button => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id;
            fetch('/js/productos.json') 
                .then(response => response.json())
                .then(productos => {
                    const selectedProduct = productos.find(producto => producto.id == productId);
                    cartProducts.push(selectedProduct);
                    console.log(cartProducts);

                    
                    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
                })
                .catch(error => console.error('Error al agregar producto al carrito:', error));
        };
    });
}

fetchProductos();

