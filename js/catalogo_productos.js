
actualizar();

//--------------------------------------------------------------------------------------------//

//RENDERIZAR PORDUCTOS DEL ARRAY
//Todos los productos
const contProductos = document.querySelector('.cont-productos-main');

fetch('../stockProductos.json')
    .then((response) => response.json())
    .then(informacion => {
        let acumulador = ``;
        informacion.forEach((producto) => {
            const idBoton = `add-cart${producto.id}`
            acumulador +=
                `
            <div class="sect_mv_01">
                <img class="producto-img" src=${producto.img} alt="">
                <h4 class="producto-titulo">${producto.nombre}</h4>
                <p class="producto-precio">$${producto.precio}</p>
                <button type="button" style="cursor:pointer;" class="btn" id="${idBoton}" data-id="${producto.id}">
                    <div class="ico_btn">
                        <img class="img_shop_ico" src="../assets/images/ico/carrito-03.png" alt="">
                    </div>
                    <span>Agregar al carrito</span>
                </button>
            </div>
            `
        })

        document.getElementById('cont-productos-main').innerHTML = acumulador;

    })

//--------------------------------------------------------------------------------------------//

//ABRIR POPUP (JQuery)
$(document).ready(function () {
    $(".img_shop-cont").on("click", function () {
        $(".carrito-overlay").fadeIn("fast");
    });

    $(".close").on("click", function () {
        $(".carrito-overlay").fadeOut("fast");
    });

});

//--------------------------------------------------------------------------------------------//

//AGREGAR (Productos2) AL CARRITO
fetch('../stockProductos.json')
    .then((response) => response.json())
    .then(informacion => {
        informacion.forEach((producto) => {
            const idBoton = `add-cart${producto.id}`
            document.getElementById(idBoton).onclick = () => {
                let nombrePr = producto.nombre
                carrito.push(producto)
                console.log(carrito)

                actualizar();

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: nombrePr,
                    html:
                        'ha sido agregado al <b>carrito</b>',
                    showConfirmButton: false,
                    timer: 1800
                })

            }
        })
    })

//--------------------------------------------------------------------------------------------//

//RENDERIZAR PRODUCTOS CLICK POPUP
function generarCardsCPopUp() {

    //Storage
    localStorage.setItem('carrito', JSON.stringify(carrito))

    //RENDERIZAR PRODUCTOS EN EL CARRITO
    document.getElementById("cont-prod-carrito").innerHTML = "";
    carrito.forEach((item) => {
        let contadorP = 1;
        document.getElementById("cont-prod-carrito").innerHTML += `

        <div class="content-pr-car" id="cont-prcar2">
        
            <h5 class="titulo-p-carrito">${item.nombre}</h5>

            <div class="pop-cont2">
                <img class="producto-img"
                    src= ${item.img} ${item.imgd}  alt="">
         
                <div class="cont-popNum">
                    <p class="popId">ID: ${item.id}</p>

                    <div class="cont-popCantidad">
                        <a href="#" class="menos" id="dism" onclick="cantProd(this)">-</a>
                        <p class="popCantidad" id="contador" value="">${contadorP}</p>
                        <a href="#" class="mas" id="aum" onclick="cantProd(this)">+</a>
                    </div>
                </div>

                <div class="precio-el-cont">
                    <p class="popPrecio">$${item.precio}</p>
                    <a href="#" class="eliminar" onclick="borrarDelCarrito(${item.id})">Eliminar</a>
                </div>

            </div> 
        </div> 
        `

        console.log(carrito)
    })
}

//--------------------------------------------------------------------------------------------//

//***** FUNCIONES *****/

//FUNCION ACTUALIZAR PRECIOS Y CANTIDAD DE PRODUCTOS DEL CARRITO
function actualizar() {
    //Storage
    localStorage.setItem('carrito', JSON.stringify(carrito))
    const totalNuevos = carrito.reduce((acc, item) => acc + item.precio, 0)
    document.getElementById('numCar').innerHTML = carrito.length + " - ($" + totalNuevos + ")";
    //Escribir precio total de productos 
    document.getElementById('tpp-precio').innerHTML = "$" + totalNuevos;;
}


//FUNCION BORRAR ELEMENTOS DEL CARRITO
function borrarDelCarrito(idProducto) {
    const buscProducto = carrito.find((item) => item.id === idProducto)
    let index = carrito.indexOf(buscProducto)

    //Borrar producto del PopUp
    let contCarrit = document.getElementById("cont-prcar2")
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
}

//--------------------------------------------------------------------------------------------//

