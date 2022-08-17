class Carrito {
	constructor() {
		this.elementos = [];
	}

    agregarAlCarrito(producto) {
        // falta chequear si el producto ya existe
		this.elementos.push(producto);
		this.guardarEnLocalStorage();
	}

	eliminarDelCarrito(id) {
		this.elementos = this.elementos.filter((prod) => prod.id != id);
		this.guardarEnLocalStorage();
	}

	calcularTotal() {
		let total = 0;
		this.elementos.forEach((prod) => (total += prod.precio * prod.cantidad));
		return total;
	}

	vaciarCarrito() {
		this.elementos = [];
		this.guardarEnLocalStorage();
	}

	guardarEnLocalStorage() {
		console.log(321);
		localStorage.setItem("carrito", JSON.stringify(this.elementos));
	}

	recuperarLocalStorage() {
		this.elementos = JSON.parse(localStorage.getItem("carrito"));
	}
} 
