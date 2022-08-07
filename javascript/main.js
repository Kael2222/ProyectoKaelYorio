
class producto {
	constructor(nombre, precio, id, stock, img) {
        this.nombre = nombre;
		this.precio = precio;
		this.id = id;
		this.stock = stock;
		this.img = img;
	}
}

const productos = [
    //cada vez que se pone const o let es porq voy a retornar algo?
	new producto("In rainbow", 2500, 1, 3, "how to disappear"),
	new producto("Piramid song", 2300, 2, 1, "discosradioreme"),
	new producto("Paranoid android", 2600, 3, 5, "discos2reme"),
];

productos.push(new producto("Nude", 2500, 4, 4, "radiorockbandsreme"));
productos.push(new producto("Ok computer",2100, 4, 6, "ok computer"))


const carrito = [];

imprimirTarjetas();

function imprimirTarjetas() {
    // Busca el elemento con id #main-productos
    // borra el contenido que tenga el contenedor (evita duplicados)
    // recorre el array productos
    // por cada elemento:
    //      ejecuta crearTarjeta, pasandole el elemento por parametro.
    //      le pasa al contenedor cada tarjeta como child

	const conteiner = document.querySelector("#main-productos");
	conteiner.innerHTML = "";
	productos.forEach((producto) => {
		const card = crearTarjeta(producto);
		conteiner.appendChild(card);
	});
}

function crearTarjeta(data) {
    // crea un nuevo elemento div
    // le pasa el contenido HTML (el resto de contenido de la card)
    // remplaza los datos dinamicos con la data que llega por parametro
    // el elemento boton tiene el atributo onclick, el cual recibe la funcion que se ejecuta cuando el boton es clickeado

	const card = document.createElement("div");
	card.innerHTML = `<div class="card" style="width: 18rem;">
                    <img src="../assets/${data.img}.jpg" class="card-img-top" alt="${data.nombre}">
                    <div class="card-body">
                    <h5 class="card-title">${data.nombre}</h5>
                    <p class="card-text">Precio:${data.precio}</p>
                    <p class="card-text">Stock:${data.stock}</p>
                    <button id="${data.id}" class="btn btn-primary" onclick="agregarAlCarrito(${data.id})">Comprar</button>
                    </div>
                </div>`;
	return card;
}

function agregarAlCarrito(idProducto) {
    // esta funcion se ejecuta cuando un boton de la card recibe click
    // hace console log del id del producto, que nos llega por parametro
	console.log(idProducto);
   }