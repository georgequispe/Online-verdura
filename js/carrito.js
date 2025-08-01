// Inicializar desde localStorage si ya hay productos
let productos = JSON.parse(localStorage.getItem("productos")) || [];
let total = parseFloat(localStorage.getItem("total")) || 0;

// Mostrar productos si existe el contenedor del carrito
document.addEventListener("DOMContentLoaded", () => {
    const carrito = document.getElementById("carrito");
    const btnPagar = document.querySelector("button.btn-primary");

    if (carrito && productos.length > 0) {
        carrito.innerHTML = "";
        productos.forEach(p => {
            const item = document.createElement("p");
            item.textContent = `${p.nombre} - $${p.precio}`;
            carrito.appendChild(item);
        });
    }

    if (btnPagar && total > 0) {
        btnPagar.textContent = `Pagar: $${total}`;
    }
});

// Función para agregar producto al carrito
function agregarProducto(nombre, precio) {
    productos.push({ nombre, precio });
    total += precio;

    localStorage.setItem("productos", JSON.stringify(productos));
    localStorage.setItem("total", total);

    const carrito = document.getElementById("carrito");
    const btnPagar = document.querySelector("button.btn-primary");

    if (carrito) {
        const item = document.createElement("p");
        item.textContent = `${nombre} - $${precio}`;
        carrito.appendChild(item);
    }

    if (btnPagar) {
        btnPagar.textContent = `Pagar: $${total}`;
    }

    alert(`${nombre} agregado al carrito. Total: $${total}`);
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

        localStorage.removeItem("productos");
        localStorage.removeItem("total");

        const carrito = document.getElementById("carrito");
        const btnPagar = document.querySelector("button.btn-primary");

        if (carrito) carrito.innerHTML = "";
        if (btnPagar) btnPagar.textContent = "Pagar";
    }
}