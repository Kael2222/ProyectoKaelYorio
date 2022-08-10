
class producto {
	constructor(nombre, precio, id, stock, cantidad, img ) {
        this.nombre = nombre;
		this.precio = precio;
		this.id = id;
		this.stock = stock;
        this.cantidad = cantidad;
		this.img = img;
	}
}

const productos = [
    
	new producto("In rainbow", 2500, 1, 3, 10, "how to disappear"),
	new producto("Piramid song", 2300, 2, 1, 8, "discosradioreme" ),
	new producto("Paranoid android", 2600, 3, 5, 12, "discos2reme"),
];

productos.push(new producto("Nude", 2500, 4, 4, 6, "radiorockbandsreme"));
productos.push(new producto("Ok computer",2100, 4, 6, 15, "ok computer"));


let carrito = [];

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
	card.innerHTML =`<div class="card" style="width: 18rem;">
                    <img src="../assets/${data.img}.jpg" class="card-img-top" alt="${data.nombre}">
                    <div class="card-body">
                    <h3 class="card-title">${data.nombre}</h3>
                    <p class="card-text">Precio:${data.precio}</p>
                    <p class="card-text">Stock:${data.stock}</p>
                    <button id="${data.id}" class="btn btn-dark" onclick="agregarAlCarrito(${data.id})">Comprar <i class = "fas fa-shopping-cart"></i></button>
                    </div>
                </div>`;
	return card;
}

const agregarAlCarrito = (idProducto) => {
    // esta funcion se ejecuta cuando un boton de la card recibe click
    // hace console log del id del producto, que nos llega por parametro
	//console.log(idProducto);

    const item = productos.find((producto) => producto.id === idProducto)
    carrito.push(item)
    actualizarCarrito()
    console.log(carrito)
  }

  const modalContainer = document.querySelector("#modal-container")
  const carritoAbrir = document.querySelector("#carritoAbrir")
  const carritoCerrar = document.querySelector("#carritoCerrar")
  

  carritoAbrir.addEventListener("click", () => {
    modalContainer.classList.add("modal-contenedor-active")
  })

  carritoCerrar.addEventListener("click", () => {
    modalContainer.classList.remove("modal-contenedor-active")
  })
  
   const eliminarDelCarrito = ((idProducto) => {
    const item = carrito.find((producto) => producto.id === idProducto)
    const indice = carrito.indexOf(item)
    carrito.splice(indice,1)
    actualizarCarrito()
   }) 
    

   const contenedorCarrito = document.getElementById("carrito-contenedor")

   const actualizarCarrito = () => {
    contenedorCarrito.innerHTML=" "
    carrito.forEach((producto) => {

        const div = document.createElement("div")
        div.className = ("productoEnCarrito")
        div.innerHTML = `<p> ${producto.nombre} </p>
                        <p> Precio:${producto.precio}</p>
                        <p>Cantidad: <span id = "cantidad">${producto.cantidad} </span></p>
                        <button onclick = "eliminarDelCarrito(${producto.id})" class = "boton-eliminar"><i class = "fas fa-trash-alt"></i></button> `
    
                        contenedorCarrito.appendChild(div)
    })
          
            
   } 
   
   const btnVaciarCarrito = document.getElementById("vaciar-carrito")
   btnVaciarCarrito.addEventListener("click", () => {
     carrito.length = 0
     actualizarCarrito()
   })
   


   

  