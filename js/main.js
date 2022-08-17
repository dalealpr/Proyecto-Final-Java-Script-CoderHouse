
actualizar()

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
        let nombrePr = item.nombre

        //Actualizar carrito compra
        actualizar();

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title:nombrePr,
            html:
            'ha sido agregado al <b>carrito</b>',
            showConfirmButton: false,
            timer: 1800
          })

    })
});

//--------------------------------------------------------------------------------------------//

//AGREGAR (ProductosNuevos) AL CARRITO
productosNuevos.forEach((item) => {
    const idBoton = `add-cart${item.id}`
    document.getElementById(idBoton).addEventListener('click', () => {
        carrito.push(item)
        let nombrePr = item.nombre

        //Actualizar carrito compra
        actualizar()

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title:nombrePr,
            html:
            'ha sido agregado al <b>carrito</b>',
            showConfirmButton: false,
            timer: 1800
          })

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
        // const idBoton2 = `cart-${item.id}`
        let contadorP = 1;

        document.getElementById("cont-prod-carrito").innerHTML +=

            `<div class="content-pr-car" id="cont-prcar2">
            <h5 class="titulo-p-carrito">${item.nombre}</h5>

            <div class="pop-cont2">
                <img class="producto-img"
                    src=${item.img} alt="">
         
                <div class="cont-popNum">
                    <p class="popId">ID: ${item.id}</p>

                    <div class="cont-popCantidad">
                        <a href="#" class="menos" id="dism">-</a>
                        <p class="popCantidad" id="contador">${contadorP}</p>
                        <a href="#" class="mas" id="aum">+</a>
                    </div>
                </div>
                    <div class="precio-el-cont">
                       <p class="popPrecio">$${item.precio}</p>
                       <a href="#" class="eliminar" onclick="borrarDelCarrito(${item.id})">Eliminar</a>
                    </div>
                </div>
            </div> 
        </div>`
    })

    console.log(carrito)

}

//--------------------------------------------------------------------------------------------//

//***** FUNCIONES *****/

//FUNCION ACTUALIZAR PRECIOS Y CANTIDAD DE PRODUCTOS DEL CARRITO
function actualizar() {
    //Storage
    localStorage.setItem('carrito', JSON.stringify(carrito))
    const totalNuevos = carrito.reduce((acc, item) => acc + item.precio, 0)
    document.getElementById('numCar').innerHTML = carrito.length + " - ($" + totalNuevos + ")";
    //Total dentro del popUp
    document.getElementById('tpp-precio').innerHTML = "$" + totalNuevos;
}


//FUNCION BORRAR ELEMENTOS DEL CARRITO
function borrarDelCarrito(idProducto) {
    const buscProducto = carrito.find((item) => item.id === idProducto)
    let index = carrito.indexOf(buscProducto)

    //Borrar producto del PopUp
    let contCarrit = document.getElementById('cont-prcar2')
    contCarrit.closest('.content-pr-car').remove();
    console.log('eliminado ')

    if (index !== -1) {
        carrito.splice(index, 1)
    }

    console.log(carrito)
    actualizar()
}


//FUNCION BORRAR TODOS LOS ELEMENTOS DEL ARRAY
function borrarTodoDelCarrito() {
    document.querySelectorAll('.content-pr-car').forEach(cont => {
        cont.remove();
    })
    //Borrar todo el array carrito
    carrito = []
    console.log(carrito)
    actualizar()

    Swal.fire({
        icon: 'success',
        html:
        'Todos los productos del carrito han sido eliminados',
        showConfirmButton: false,
        timer: 2200
      })
}

//--------------------------------------------------------------------------------------------//


