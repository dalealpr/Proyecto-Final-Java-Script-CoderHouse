//Llamo la funcion que guarda los productos del carrito en el navegador Web (Local Storaje)
actualizar();

//--------------------------------------------------------------------------------------------//

//RENDERIZAR PORDUCTOS DEL ARRAY
//contenedor de Todos los productos
const contProductos = document.querySelector('.cont-productos-main');

//LLlamo la funcion que renderiza todos los productos de la tienda
renderizarTodosProductos()

//--------------------------------------------------------------------------------------------//

//ABRIR POPUP CARRITO (JQuery)
$(document).ready(function () {
    $(".img_shop-cont").on("click", function () {
        $(".carrito-overlay").fadeIn("fast");
    });

    $(".close").on("click", function () {
        $(".carrito-overlay").fadeOut("fast");
    });

});

//--------------------------------------------------------------------------------------------//

//AGREGAR PRODUCTOS AL CARRITO
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

//RENDERIZAR PRODUCTOS CLICK POPUP CARRITO
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
//SELECT ORDENAR POR PRECIO
const selectionPrecio = document.getElementById('selectPrec');
function selectPrec() {

    //Opcion todo
    if (selectionPrecio.value === 'value1_1') {
        console.log('todos')
        renderizarTodosProductos()
    }

    //Opcion menor a mayor
    if (selectionPrecio.value === 'value1_2') {
        console.log('Menor a mayor')
        ordMenorAMayor()
    }

    //Opcion mayor a menor
    if (selectionPrecio.value === 'value1_3') {
        console.log('Mayor a menor')
        ordMayorAMenor()
    }

}

//--------------------------------------------------------------------------------------------//
//SELECT FILTRAR POR MODELO
const selectionNom = document.getElementById('selectNomb');
function selectNom() {

    //Opcion Todas
    if (selectionNom.value === 'value2_1') {
        console.log('Todas')
        renderizarTodosProductos()
    }

    //Opcion 1660
    if (selectionNom.value === 'value2_2') {
        console.log('opcion 1660')
        filtrarPorModelo("GTX 1660")
        agregarProdAlCarritoFiltr("GTX 1660")
    }

    //Opcion 2060
    if (selectionNom.value === 'value2_3') {
        console.log('opcion 2060')
        filtrarPorModelo("RTX 2060")
        agregarProdAlCarritoFiltr("RTX 2060")

    }

    //Opcion 3050
    if (selectionNom.value === 'value2_4') {
        console.log('opcion 3050')
        filtrarPorModelo("RTX 3050")
        agregarProdAlCarritoFiltr("RTX 3050")

    }

    //Opcion 3060
    if (selectionNom.value === 'value2_5') {
        console.log('opcion 3060')
        filtrarPorModelo("RTX 3060")
        agregarProdAlCarritoFiltr("RTX 3060")

    }

    //Opcion 3070
    if (selectionNom.value === 'value2_6') {
        console.log('opcion 3070')
        filtrarPorModelo("RTX 3070")
        agregarProdAlCarritoFiltr("RTX 3070")
    }

    //Opcion 3080
    if (selectionNom.value === 'value2_7') {
        console.log('opcion 3080')
        filtrarPorModelo("RTX 3080")
        agregarProdAlCarritoFiltr("RTX 3080")
    }

    //Opcion 3090
    if (selectionNom.value === 'value2_8') {
        console.log('opcion 3090')
        filtrarPorModelo("RTX 3090")
        agregarProdAlCarritoFiltr("RTX 3090")
    }

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

//FUNCION ORDENAR PRODUCTOS PRECIO
//Funcion ordenar de menor a mayor
function ordMenorAMayor() {
    fetch('../stockProductos.json')
        .then((response) => response.json())
        .then(informacion => {
            let acumulador = ``;
            document.getElementById("cont-prod-carrito").innerHTML = "";
            informacion.sort((a, b) => {
                if (a.precio < b.precio) {
                    return -1;
                }
                if (a.precio > b.precio) {
                    return 1;
                }
                else {
                    return 0;
                }
            })
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
            agregarProdAlCarritoOrd()
        })

}

//Funcion ordenar de mayor a menor
function ordMayorAMenor() {
    fetch('../stockProductos.json')
        .then((response) => response.json())
        .then(informacion => {
            let acumulador = ``;
            document.getElementById("cont-prod-carrito").innerHTML = "";
            informacion.sort((a, b) => {
                if (a.precio < b.precio) {
                    return 1;
                }
                if (a.precio > b.precio) {
                    return -1;
                }
                else {
                    return 0;
                }
            })
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
            agregarProdAlCarritoOrd()
        })
}

//FUNCION FILTRAR PRODUCTOS POR MODELO
function filtrarPorModelo(line) {

    fetch('../stockProductos.json')
        .then((response) => response.json())
        .then(informacion => {
            let acumulador = ``;
            document.getElementById("cont-prod-carrito").innerHTML = "";
            const productosFiltrados = informacion.filter((producto) => producto.linea === line)
            productosFiltrados.forEach((producto) => {
                // if (producto.linea === linea) {

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
}


//--------------------------------------------------------------------------------------------//
//FUNCION RENDERIZA TODOS LOS PRODUCTOS DE LA TIENDA
function renderizarTodosProductos() {

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
}

//--------------------------------------------------------------------------------------------//

//FUNCION MENU HAMBURGUESA
const icoOpen = document.getElementById('ic-han');
const icoOClose = document.getElementById('ic-han2');
const menuHamb = document.getElementById('menu-ham2');


icoOpen.addEventListener('click', e => {
    menuHamb.style.display = "block"
    icoOClose.style.display = "block"
    icoOpen.style.display = "none"
})

icoOClose.addEventListener('click', e => {
    menuHamb.style.display = "none"
    icoOClose.style.display = "none"
    icoOpen.style.display = "block"
})

//--------------------------------------------------------------------------------------------//
//FUNCION AGREGAR AL CARRITO PRODUCTOS ORDENADOS
function agregarProdAlCarritoOrd() {

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
}


//FUNCION AGREGAR AL CARRITO PRODUCTOS FILTRADOS
function agregarProdAlCarritoFiltr(line) {

    fetch('../stockProductos.json')
        .then((response) => response.json())
        .then(informacion => {
            const productosFiltrados = informacion.filter((producto) => producto.linea === line)
            productosFiltrados.forEach((producto) => {
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
}

//--------------------------------------------------------------------------------------------//


