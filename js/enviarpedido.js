let productos = [];
let total = 0;

// Función para agregar producto al carrito
function agregarProducto(producto, precio) {
    const carrito = document.getElementById("carrito");
    const btnPagar = document.querySelector("button.btn-primary");

    if (!carrito || !btnPagar) {
        console.error("No se encontró el carrito o el botón de pagar");
        return;
    }

    const productoItem = document.createElement("p");
    productoItem.textContent = `${producto} - $${precio}`;
    carrito.appendChild(productoItem);

    productos.push({ nombre: producto, precio });
    total += precio;

    btnPagar.textContent = `Pagar: $${total}`;
}

// Función para pagar
function pagar() {
    if (productos.length === 0) {
        alert("El carrito está vacío");
        return;
    }

    localStorage.setItem("productos", JSON.stringify(productos));
    localStorage.setItem("total", total);

    alert(`Total a pagar: $${total}`);
    window.location.href = "pedidos.html";
}

// Función para limpiar el carrito
function limpiarCarrito() {
    if (confirm("¿Vaciar carrito?")) {
        productos = [];
        total = 0;

        const carrito = document.getElementById("carrito");
        const btnPagar = document.querySelector("button.btn-primary");

        if (carrito) carrito.innerHTML = "";
        if (btnPagar) btnPagar.textContent = "Pagar";

        localStorage.removeItem("productos");
        localStorage.removeItem("total");
    }
}