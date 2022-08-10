
//Sumatoria de precio de los productos
const totalNuevos = carrito.reduce((acc, item) => acc + item.precio, 0)
//Escribir numero de productos / Precio total de productos 
document.getElementById('numCar').innerHTML = carrito.length + " - ($" + totalNuevos + ")";
//Escribir precio total de productos dentro del PopUp
document.getElementById('tpp-precio').innerHTML = "$" + totalNuevos;

//--------------------------------------------------------------------------------------------//

//RENDERIZAR PORDUCTOS DEL ARRAY
//1.- Array Productos Top
const contTop = document.querySelector('.sect_mv_cont');
productosTop.forEach((item) => {
    const idBoton = `add-cart${item.id}`
    contTop.innerHTML += 
        `<div class="sect_mv_01">
        <img class="producto-img" src=${item.img} alt="">
        <h4 class="producto-titulo">${item.nombre}</h4>
        <p class="producto-precio">$${item.precio}</p>
        <a href="#" class="btn" id="${idBoton}" data-id="${item.id}">Agregar al carrito</a>
    </div>`
});

//2.- Array Productos Nuevos
const contNuevos = document.querySelector('.sect_np_cont');
productosNuevos.forEach((item) => {
    const idBoton = `add-cart${item.id}`
    contNuevos.innerHTML +=
        `<div class="sect_np_01">
        <img class="producto-img" src=${item.img} alt="">
        <h4 class="producto-titulo">${item.nombre}</h4>
        <p class="producto-precio">$${item.precio}</p>
        <a href="#" class="btn" id="${idBoton}" data-id="${item.id}">Agregar al carrito</a>
    </div>`
})

//--------------------------------------------------------------------------------------------//

//VENTANA POPUP (JQuery)
$(document).ready(function () {
    $(".img_shop-cont2").on("click", function () {
        $(".carrito-overlay").fadeIn("fast");
    });

    $(".close").on("click", function () {
        $(".carrito-overlay").fadeOut("fast");
    });

});

//--------------------------------------------------------------------------------------------//

//AGREGAR (ProductosTop) AL CARRITO
productosTop.forEach((item) => {
    const idBoton = `add-cart${item.id}`
    document.getElementById(idBoton).addEventListener('click', () => {
        carrito.push(item)
        console.log(carrito)

        //Storage
        localStorage.setItem('carrito', JSON.stringify(carrito))
        const totalNuevos = carrito.reduce((acc, item) => acc + item.precio, 0)
        document.getElementById('numCar').innerHTML = carrito.length + " - ($" + totalNuevos + ")";
        //Total dentro del popUp
        document.getElementById('tpp-precio').innerHTML = "$" + totalNuevos;

    })
});

//--------------------------------------------------------------------------------------------//

//AGREGAR (ProductosNuevos) AL CARRITO
productosNuevos.forEach((item) => {
    const idBoton = `add-cart${item.id}`
    document.getElementById(idBoton).addEventListener('click', () => {
        carrito.push(item)
        console.log(carrito)

        //Storage
        localStorage.setItem('carrito', JSON.stringify(carrito))
        const totalNuevos = carrito.reduce((acc, item) => acc + item.precio, 0)
        document.getElementById('numCar').innerHTML = carrito.length + " - ($" + totalNuevos + ")";
        //Total dentro del popUp
        document.getElementById('tpp-precio').innerHTML = "$" + totalNuevos;

    })

});

//--------------------------------------------------------------------------------------------//

//RENDERIZAR PRODUCTOS CLICK POPUP
function generarCardsCPopUp() {

    //Storage
    localStorage.setItem('carrito', JSON.stringify(carrito))

    //RENDERIZAR PRODUCTOS EN EL CARRITO
    document.getElementById("cont-prod-carrito").innerHTML = "";
    carrito.forEach((item) => {
        let contadorP = 1;
        document.getElementById("cont-prod-carrito").innerHTML += 

       `<div class="content-pr-car">
            <h5 class="titulo-p-carrito">${item.nombre}</h5>

            <div class="pop-cont2">
                <img class="producto-img"
                    src=${item.img} alt="">
         
                <div class="cont-popNum">
                    <p class="popId">ID: ${item.id}</p>

                    <div class="cont-popCantidad">
                       <a href="#" class="menos">-</a>
                       <p class="popCantidad">${contadorP}</p>
                       <a href="#" class="mas">+</a>
                    </div>
                </div>
                    <div class="precio-el-cont">
                       <p class="popPrecio">$${item.precio}</p>
                       <a href="#" class="eliminar" id="btnEliminar">Eliminar</a>
                    </div>
                </div>
            </div> 
        </div>`

        //BOTON ELIMINAR
        const conteneCarro = document.getElementById("cont-prod-carrito")
        conteneCarro.querySelector('.eliminar').addEventListener('click', eliminarElementoDelCarrito)

    })
}

//--------------------------------------------------------------------------------------------//

//FUNCION ELIMINAR ELEMENTO DEL CARRITO
function eliminarElementoDelCarrito(event) {
    const botonClickeado = event.target;
    botonClickeado.closest('.content-pr-car').remove();
    console.log('eliminado');
}





