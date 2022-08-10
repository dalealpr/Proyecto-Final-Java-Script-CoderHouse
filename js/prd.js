//Storage
//Sumatoria de precio de los productos
const totalNuevos = carrito.reduce((acc, item) => acc + item.precio, 0)
//Escribir numero de productos / Precio total de productos 
document.getElementById('numCar').innerHTML = carrito.length +  " - ($"+ totalNuevos+ ")";
//Escribir precio total de productos 
document.getElementById('tpp-precio').innerHTML =  "$" + totalNuevos;



//RENDERIZAR PORDUCTOS DEL ARRAY
//Todos los productos
const contProductos = document.querySelector('.cont-productos-main');

productos2.forEach((item) => {
    const idBoton = `add-cart${item.id}`
    const cardContent =
    `<div class="sect_mv_01">
    <img class="producto-img" src=${item.img} alt="">
    <h4 class="producto-titulo">${item.nombre}</h4>
    <p class="producto-precio">$${item.precio}</p>
    <a href="#" class="btn" id="${idBoton}" data-id="${item.id}">Agregar al carrito</a>
    </div>`

    contProductos.innerHTML += cardContent;
});


//AGREGAR PRODUCTOS AL CARRITO
productos2.forEach((item) => {
    const idBoton = `add-cart${item.id}`
    document.getElementById(idBoton).addEventListener('click', () => {
        carrito.push(item)
        console.log(carrito)

        //Storage
        localStorage.setItem('carrito', JSON.stringify(carrito))
        const totalNuevos = carrito.reduce((acc, item) => acc + item.precio, 0)
        document.getElementById('numCar').innerHTML = carrito.length +  " - ($"+ totalNuevos+ ")";
        //Escribir precio total de productos 
        document.getElementById('tpp-precio').innerHTML =  "$" + totalNuevos;  


        //RENDERIZAR PRODUCTOS EN EL CARRITO
        document.getElementById("cont-prod-carrito").innerHTML = "";
        carrito.forEach((item) => {
            let contadorP = 1;
            document.getElementById("cont-prod-carrito").innerHTML += `
            <div class="content-pr-car">
            <h5 class="titulo-p-carrito">${item.nombre}</h5>
    
            <div class="pop-cont2">
                <img class="producto-img"
                    src=${item.img}  alt="">
             
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
                       <a href="#" class="eliminar"  id="btnEliminar">Eliminar</a>
                    </div>
                </div>
            </div> 
            </div> 
            `

        })

    })

})



//RENDERIZAR PRODUCTOS CLICK POPUP
function generarCardsCPopUp(){
        
    //Storage
        localStorage.setItem('carrito', JSON.stringify(carrito))

        //RENDERIZAR PRODUCTOS EN EL CARRITO
        document.getElementById("cont-prod-carrito").innerHTML = "";
        carrito.forEach((item) => {
            let contadorP = 1;
            document.getElementById("cont-prod-carrito").innerHTML += `

            <div class="content-pr-car">
            <h5 class="titulo-p-carrito">${item.nombre}</h5>
    
            <div class="pop-cont2">
                <img class="producto-img"
                    src=${item.img}  alt="">
             
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
                       <a href="#" class="eliminar"  id="btnEliminar">Eliminar</a>
                    </div>
                </div>
            </div> 
            </div> 
            `

        
        //BOTON ELIMINAR
        const btnEliminar = document.getElementById("btnEliminar")
        btnEliminar.addEventListener('click', eliminarElementoDelCarrito)

        })
}

//FUNCION ELIMINAR ELEMENTO DEL CARRITO
function eliminarElementoDelCarrito(item) {
    const botonClickeado = item.target;
    botonClickeado.closest('.content-pr-car').remove();
}

//ABRIR POPUP
$( document ).ready(function() {
    $(".img_shop-cont").on("click", function(){
        $(".carrito-overlay").fadeIn("fast");
    });

    $(".close").on("click", function(){
        $(".carrito-overlay").fadeOut("fast");
    });

});


