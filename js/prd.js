//Array de todos los productos
const productosX = [
    //GTX 1660
    {id:001, nombre:'Asus GTX 1660S', linea:'GTX 1660', modelo:'GTX 1660S', marca:'Asus',img:'../assets/images/productos/1660/Asus_GTX_1660s/asus_1660s-01-ph.jpg', precio:410, cantidad:5},
    {id:002, nombre:'EVGA GTX 1660S', linea:'GTX 1660', modelo:'GTX 1660S', marca:'EVGA',img:'../assets/images/productos/1660/EVGA_GTX_1660s/evga_1660s-01-ph.jpg', precio:370, cantidad:10},
    {id:003, nombre:'GALAX GTX 1660Ti', linea:'GTX 1660', modelo:'GTX 1660Ti', marca:'GALAX',img:'../assets/images/productos/1660/GALAX_GTX_1660Ti/galax_1660ti-01-ph.jpg', precio:400, cantidad:12},
    {id:004, nombre:'MSI GTX 1660S', linea:'GTX 1660', modelo:'GTX 1660S', marca:'MSI',img:'../assets/images/productos/1660/MSI_GTX_1660s/msi_1660s-01-ph.jpg', precio:460, cantidad:8},
    {id:005, nombre:'Palit GTX 1660Ti', linea:'GTX 1660', modelo:'GTX 1660Ti', marca:'Palit',img:'../assets/images/productos/1660/Palit_GTX_1660Ti/palit_1660ti-01-ph.jpg', precio:510, cantidad:6},

    //RTX 2060
    {id:006, nombre:'EVGA RTX 2060', linea:'RTX 2060', modelo:'RTX 2060', marca:'EVGA',img:'../assets/images/productos/2060/EVGA_RTX2060_XC/evga_2060-02-ph.jpg', precio:540, cantidad:3},

    //RTX 3050
    {id:007, nombre:'Asus RTX 3050', linea:'RTX 3050', modelo:'RTX 3050', marca:'Asus',img:'../assets/images/productos/3050/Asus_RTX3050_8G/asus_3050-01-ph.jpg', precio:520, cantidad:0},
    {id:0010, nombre:'Palit RTX 3050', linea:'RTX 3050', modelo:'RTX 3050', marca:'Palit',img:'../assets/images/productos/3050/Palit_RTX3050_8G/palit_3050-01-ph.jpg', precio:580, cantidad:2},

    //RTX 3060
    {id:011, nombre:'Asus RTX 3060', linea:'RTX 3060', modelo:'RTX 3060', marca:'Asus',img:'../assets/images/productos/3060/Asus_RTX_3060_12GB/asus_3060-01-ph.jpg', precio:650, cantidad:7},
    {id:012, nombre:'Asus RTX 3060Ti', linea:'RTX 3060', modelo:'RTX 3060Ti', marca:'Asus',img:'../assets/images/productos/3060/Asus_RTX_3060Ti_8GB/asus_3060ti-01-ph.jpg', precio:820, cantidad:6},
    {id:013, nombre:'Galax RTX 3060', linea:'RTX 3060', modelo:'RTX 3060', marca:'Galax',img:'../assets/images/productos/3060/Galax_RTX_3060_12GB/galax_3060-01-ph.jpg', precio:550, cantidad:5},
    {id:014, nombre:'Palit RTX 3060', linea:'RTX 3060', modelo:'RTX 3060', marca:'Palit',img:'../assets/images/productos/3060/Palit_RTX_3060_12GB/palit_3060-01-ph.jpg', precio:620, cantidad:10},
    {id:015, nombre:'Palit RTX 3060Ti', linea:'RTX 3060', modelo:'RTX 3060Ti', marca:'Palit',img:'../assets/images/productos/3060/Palit_RTX_3060Ti_8GB/palit_3060ti-01-ph.jpg', precio:680, cantidad:5},

    //RTX 3070
    {id:016, nombre:'Asus RTX 3070', linea:'RTX 3070', modelo:'RTX 3070', marca:'Asus',img:'../assets/images/productos/3070/Asus_RTX_3070_8G/asus_3070-01-ph.jpg', precio:830, cantidad:6},
    {id:017, nombre:'Asus RTX 3070Ti', linea:'RTX 3070', modelo:'RTX 3070Ti', marca:'Asus',img:'../assets/images/productos/3070/Asus_RTX_3070_Ti/asus_3070ti-01-ph.jpg', precio:1100, cantidad:9},
    {id:020, nombre:'Galax RTX 3070', linea:'RTX 3070', modelo:'RTX 3070', marca:'Galax',img:'../assets/images/productos/3070/Galax_RTX_3070_8G/galax_3070-01-ph.jpg', precio:890, cantidad:12},
    {id:021, nombre:'Palit RTX 3070', linea:'RTX 3070', modelo:'RTX 3070', marca:'Palit',img:'../assets/images/productos/3070/Palit_RTX_3070_8G/palit_3070-01-ph.jpg', precio:950, cantidad:10},
    {id:022, nombre:'Palit RTX 3070Ti', linea:'RTX 3070', modelo:'RTX 3070Ti', marca:'Palit',img:'../assets/images/productos/3070/Palit_RTX_3070Ti/palit_3070ti-01-ph.jpg', precio:1040, cantidad:4},

    //RTX 3080
    {id:023, nombre:'Asus RTX 3080', linea:'RTX 3080', modelo:'RTX 3080', marca:'Asus',img:'../assets/images/productos/3080/ASUS_RTX_3080_12GB/asus_3080-01-ph.jpg', precio:1020, cantidad:3},
    {id:024, nombre:'Asus RTX 3080Ti', linea:'RTX 3080', modelo:'RTX 3080Ti', marca:'Asus',img:'../assets/images/productos/3080/ASUS_RTX_3080Ti_12GB/asus_3080ti-01-ph.jpg', precio:2100, cantidad:4},
    {id:025, nombre:'MSI RTX 3080', linea:'RTX 3080', modelo:'RTX 3080', marca:'MSI',img:'../assets/images/productos/3080/MSI_RTX_3080_12GB/msi_3080-01-ph.jpg', precio:1400, cantidad:2},

    //RTX 3090
    {id:026, nombre:'Asus RTX 3090Ti', linea:'RTX 3090', modelo:'RTX 3090Ti', marca:'Asus',img:'../assets/images/productos/3090/ASUS_3090Ti_24GB/asus_3090ti-01-ph.jpg', precio:2580, cantidad:1},
    {id:027, nombre:'MSI RTX 3090', linea:'RTX 3090', modelo:'RTX 3090', marca:'Asus',img:'../assets/images/productos/3090/ASUS_RTX3090_24GB/asus_3090-01-ph.jpg', precio:200, cantidad:0},
]

//CARRITO
const carrito = [];


//RENDERIZAR PORDUCTOS DEL ARRAY
//Todos los productos
const contProductos = document.querySelector('.cont-productos-main');

productosX.forEach((item) => {
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
productosX.forEach((item) => {
    const idBoton = `add-cart${item.id}`
    document.getElementById(idBoton).addEventListener('click', () => {
        console.log(item)
        carrito.push(item)
    })
})


