
class producto {
	constructor(nombre, precio, id, stock, cantidad,talle, img ) {
        this.nombre = nombre;
		    this.precio = precio;
		    this.id = id;
		    this.stock = stock;
        this.cantidad = cantidad;
        this.talle = talle;
		    this.img = img;
	}
}

const productos = [
    
	new producto("In rainbow", 2500, 1, 6, 1,"L", "how to disappear"),
	new producto("Piramid song", 2300, 2, 10, 1, "M", "discosradioreme" ),
	new producto("Paranoid android", 2600, 3, 5, 1,"S", "discos2reme"),
];

productos.push(new producto("Nude", 2500, 4, 15, 1, "L", "radiorockbandsreme"));
productos.push(new producto("Ok computer",2100, 4, 9, 1, "XL", "ok computer"));  


let carrito = [];

const precioTotal = document.getElementById("precioTotal")
const contenedorCarrito = document.getElementById("carrito-contenedor")
const contadorCarrito = document.getElementById('contadorCarrito')



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
                    <p class="card-text">Talle:${data.talle}</p>
                    <button id="${data.id}" class="btn btn-dark" onclick="agregarAlCarrito(${data.id})">Comprar <i class = "fas fa-shopping-cart"></i></button>
                    </div>
                </div>`;
	return card;
}

const agregarAlCarrito = (idProducto) => {

  const existe = carrito.some (producto => producto.id === idProducto)

  if (existe) {
    const producto = carrito.map(producto => {
      if(producto.id === idProducto){
        producto.cantidad++
       
      }
    })
  } else {
    const item = productos.find((producto) => producto.id === idProducto)
  
    carrito.push(item)
  }
  actualizarCarrito() 
    
}
    

 
  //selecciono el contenedor del modal,el boton de abrir y boton de cerrar
  const modalContainer = document.querySelector("#modal-container")
  const carritoAbrir = document.querySelector("#boton-carrito")
  const carritoCerrar = document.querySelector("#carritoCerrar")
   
  // al boton de abrir le asigno la clase de modal activado para que se abra al clickear en el boton de abrir y al boton de cerrar le remuevo la clase para que se desactive.

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
    


   const actualizarCarrito = () => {
    contenedorCarrito.innerHTML=" "
    carrito.forEach((producto) => {

        const div = document.createElement("div")
       
        div.innerHTML = `<p> ${producto.nombre} </p>
                        <p> Precio:${producto.precio}</p>
                        <p>Cantidad: <span id = "cantidad">${producto.cantidad} </span></p>
                        <button onclick = "eliminarDelCarrito(${producto.id})"><i class = "fas fa-trash-alt"></i></button> `
    
                        contenedorCarrito.appendChild(div)
    })
    contadorCarrito.innerText = carrito.lengt
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
          
            
   } 

   //selecciono boton de vaciar carrito y le asigno un evento que al dar click vuelva a cero y llama a la funcion actulizar carrito para volver a meter productos al carrito vacio.
   
   const btnVaciarCarrito = document.getElementById("vaciar-carrito")
   btnVaciarCarrito.addEventListener("click", () => {
     carrito.length = 0
     actualizarCarrito()
   })

   
   


   

  