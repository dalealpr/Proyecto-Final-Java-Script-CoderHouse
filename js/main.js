//Arreglo
const carrito = [ ];

//Objetos Top Productos
const palit3060 = {id:0001, name:'Palit RTX 3060 12GB', price:620,}
const asus3050 = {id:0002, name:'Asus RTX3050 8G', price:520,}
const asus3060 = {id:0003, name:'Asus RTX 3060 12GB', price:650}
const msi3080 = {id:0004, name:'MSI RTX 3080 12GB', price:1450}

//Objetos Nuevos Productos
const asus3080Ti = {id:0005, name:'ASUS RTX 3080Ti 12GB', price:2420}
const palit3070Ti = {id:0006, name:'Palit RTX 3070Ti 8GB', price:1040}
const asus3070Ti = {id:0007, name:'Asus RTX 3070Ti 8GB', price:1100}
const asus3090Ti = {id:0010, name:'Asus RTX 3090Ti 24GB', price:2580}


//funcion agregar al carrtio
function agregarAlCarrito(producto){
    //validar el stock
    //validar colores
    carrito.push(producto);
    console.log(carrito);
    alert('Usted a ingresado al carrito ' + producto.name); 

}



