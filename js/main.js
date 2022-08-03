carrito = [];

//RENDERIZAR PORDUCTOS DEL ARRAY

//Productos Top
const contTop = document.querySelector('.sect_mv_cont');

productosTop.forEach((item) => {
    const idBoton = `add-cart${item.id}`

    const cardContent =
        `<div class="sect_mv_01">
        <img class="producto-img" src=${item.img} alt="">
        <h4 class="producto-titulo">${item.nombre}</h4>
        <p class="producto-precio">$${item.precio}</p>
        <a href="#" class="btn" id="${idBoton}" data-id="${item.id}">Agregar al carrito</a>
    </div>`

    contTop.innerHTML += cardContent;
});

//Productos Nuevos
const contNuevos = document.querySelector('.sect_np_cont');

productosNuevos.forEach((item) => {
    const idBoton = `add-cart${item.id}`

    const cardContent =
        `<div class="sect_np_01">
        <img class="producto-img" src=${item.img} alt="">
        <h4 class="producto-titulo">${item.nombre}</h4>
        <p class="producto-precio">$${item.precio}</p>
        <a href="#" class="btn" id="${idBoton}" data-id="${item.id}">Agregar al carrito</a>
    </div>`

    contNuevos.innerHTML += cardContent;
});


//AGREGAR PRODUCTOS AL CARRITO
productosTop.forEach((item) => {
    const idBoton = `add-cart${item.id}`
    document.getElementById(idBoton).addEventListener('click', () => {
        carrito.push(item)
    })
})


//AGREGAR PRODUCTOS AL CARRITO
productosNuevos.forEach((item) => {
    const idBoton = `add-cart${item.id}`
    document.getElementById(idBoton).addEventListener('click', () => {
        carrito.push(item)
    })
})

