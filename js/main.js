
//Arrays
const tarjetasGraficas = [{id:001, nombre:'Asus GTX 1660S', linea:'GTX 1660', modelo:'GTX 1660S', marca:'Asus',precio:000, cantidad:5},
                          {id:002, nombre:'EVGA GTX 1660S', linea:'GTX 1660', modelo:'GTX 1660S', marca:'EVGA',precio:000, cantidad:10},
                          {id:003, nombre:'GALAX GTX 1660Ti', linea:'GTX 1660', modelo:'GTX 1660Ti', marca:'GALAX',precio:000, cantidad:12},
                          {id:004, nombre:'MSI GTX 1660S', linea:'GTX 1660', modelo:'GTX 1660S', marca:'MSI',precio:000, cantidad:8},
                          {id:005, nombre:'Palit GTX 1660Ti', linea:'GTX 1660', modelo:'GTX 1660Ti', marca:'Palit',precio:000, cantidad:6},

                          {id:006, nombre:'EVGA RTX 2060', linea:'RTX 2060', modelo:'RTX 2060', marca:'EVGA',precio:000, cantidad:3},

                          {id:007, nombre:'Asus RTX 3050', linea:'RTX 3050', modelo:'RTX 3050', marca:'Asus',precio:000, cantidad:0},
                          {id:0010, nombre:'Palit RTX 3050', linea:'RTX 3050', modelo:'RTX 3050', marca:'Palit',precio:000, cantidad:2},

                          {id:011, nombre:'Asus RTX 3060', linea:'RTX 3060', modelo:'RTX 3060', marca:'Asus',precio:000, cantidad:7},
                          {id:012, nombre:'Asus RTX 3060Ti', linea:'RTX 3060', modelo:'RTX 3060Ti', marca:'Asus',precio:000, cantidad:6},
                          {id:013, nombre:'Galax RTX 3060', linea:'RTX 3060', modelo:'RTX 3060', marca:'Galax',precio:000, cantidad:5},
                          {id:014, nombre:'Palit RTX 3060', linea:'RTX 3060', modelo:'RTX 3060', marca:'Palit',precio:000, cantidad:10},
                          {id:015, nombre:'Palit RTX 3060Ti', linea:'RTX 3060', modelo:'RTX 3060Ti', marca:'Palit',precio:000, cantidad:5},

                          {id:016, nombre:'Asus RTX 3070', linea:'RTX 3070', modelo:'RTX 3070', marca:'Asus',precio:000, cantidad:6},
                          {id:017, nombre:'Asus RTX 3070Ti', linea:'RTX 3070', modelo:'RTX 3070Ti', marca:'Asus',precio:000, cantidad:9},
                          {id:020, nombre:'Galax RTX 3070', linea:'RTX 3070', modelo:'RTX 3070', marca:'Galax',precio:000, cantidad:12},
                          {id:021, nombre:'Palit RTX 3070', linea:'RTX 3070', modelo:'RTX 3070', marca:'Palit',precio:000, cantidad:10},
                          {id:022, nombre:'Palit RTX 3070Ti', linea:'RTX 3070', modelo:'RTX 3070Ti', marca:'Palit',precio:000, cantidad:4},

                          {id:023, nombre:'Asus RTX 3080', linea:'RTX 3080', modelo:'RTX 3080', marca:'Asus',precio:000, cantidad:3},
                          {id:024, nombre:'Asus RTX 3080Ti', linea:'RTX 3080', modelo:'RTX 3080Ti', marca:'Asus',precio:000, cantidad:4},
                          {id:025, nombre:'MSI RTX 3080', linea:'RTX 3080', modelo:'RTX 3080', marca:'MSI',precio:000, cantidad:2},

                          {id:026, nombre:'Asus RTX 3090Ti', linea:'RTX 3090', modelo:'RTX 3090Ti', marca:'Asus',precio:000, cantidad:1},
                          {id:027, nombre:'MSI RTX 3090', linea:'RTX 3090', modelo:'RTX 3090', marca:'Asus',precio:000, cantidad:0},
                         ]


//OPCIONES PRINCIPALES
let opcion = parseInt(prompt('DX SYSTEM STORE\n\n OPCIÓNES\n 1.- Mostrar todos los productos\n 2.- Stock de todos los productos\n 3.- Lista de Modelos\n 4.- Buscar por Nombre\n 5.- Buscar por ID\n\n Ingrese el numero de la opción que desea realizar:'))

switch (opcion) {
    //1.- Mostrar todo el Array
    case 1: 
    console.log(tarjetasGraficas)
        break;

    //2.- Mostrar un nuevo Array solo con el stock y el nombre
    case 2:
    const stockTarjetas = tarjetasGraficas.map((el)=>{
        return{
            cantidad: el.cantidad,
            nombre: el.nombre
        }
    })
    console.log(stockTarjetas)
    break;

    //3.- Elegir un modelo especifico para luego mostrarlo
    case 3:
        let opcionModelos = parseInt(prompt('Seleccione un modelo:\n 1.- 1660\n 2.- 2060\n 3.- 3050\n 4.- 3060\n 5.- 3070\n 6.- 3080\n 7.- 3090\n\n Ingrese el numero de la opción que desea realizar:'))

        switch (opcionModelos) {
            case 1:
                console.log('GTX 1660')

                let resultado1660 = tarjetasGraficas.filter((el)=> el.linea.includes('1660'))
                console.log(resultado1660)
                break

            case 2:
                console.log('RTX 2060')

                let resultado2060 = tarjetasGraficas.filter((el)=> el.linea.includes('2060'))
                console.log(resultado2060)
                break

            case 3:
                console.log('RTX 3050')

                let resultado3050 = tarjetasGraficas.filter((el)=> el.linea.includes('3050'))
                console.log(resultado3050)
                break

            case 4:
                console.log('RTX 3060')

                let resultado3060 = tarjetasGraficas.filter((el)=> el.linea.includes('3060'))
                console.log(resultado3060)
                break

            case 5:
                console.log('RTX 3070')

                let resultado3070 = tarjetasGraficas.filter((el)=> el.linea.includes('3070'))
                console.log(resultado3070)
                break

            case 6:
                console.log('RTX 3080')

                let resultado3080 = tarjetasGraficas.filter((el)=> el.linea.includes('3080'))
                console.log(resultado3080)
                break


            case 7:
                console.log('RTX 3090')

                let resultado3090 = tarjetasGraficas.filter((el)=> el.linea.includes('3090'))
                console.log(resultado3090)
                break


            default:
                alert('Error: Ingrese un numero de opcion valido')
                console.log('Error: Ingrese un numero de opcion valido')
        }
        break;

    //4.- Buscar una producto por el nombre
    case 4:
        let opcionBuscar = prompt('Escriba el nombre de la tarjeta Grafica: \n ejemplo: Asus RTX 3060Ti')

        let productoBuscar = tarjetasGraficas.find(elemento => elemento.nombre == opcionBuscar)

        //Condicional de validacion 
        if(tarjetasGraficas.find(elemento => elemento.nombre == opcionBuscar)){
            console.log(productoBuscar)
        }else{
            alert('Error: Ingrese un nombre de tarjeta valido')
            console.log('Error: Ingrese un nombre de tarjeta valido')
        }
        break;

    //4.- Buscar una producto por el ID
    case 5:
        let opcionBuscar2 = parseInt(prompt('Escriba el ID del producto\n Numeros entre 1 y 23'))
    
        let productoBuscar2 = tarjetasGraficas.find(elemento => elemento.id == opcionBuscar2)
        
        //Condicional de validacion 
        if(tarjetasGraficas.find(elemento => elemento.id == opcionBuscar2)){
            console.log(productoBuscar2)
        }else{
            alert('Error: Ingrese un id de tarjeta valido')
            console.log('Error: Ingrese un id de tarjeta valido')
        }
        break;

    default:
        alert('Error: Ingrese un numero de opcion valido')
        console.log('Error: Ingrese un numero de opcion valido')
}
