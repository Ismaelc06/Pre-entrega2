
let user = prompt("Ingrese su nombre por favor")

alert( user +" Bienvenido a 'MULTIELECTRON' ")

let Products = [
    {id: 11, nombre: "Camara Dahua 2mp", cat:"camaras", precio:1000},    
    {id: 12, nombre: "Camara Hikvision 1mp", cat:"camaras", precio:1000},
    {id: 13, nombre: "Camara PTZ", cat:"camaras", precio:1000},
    {id: 14, nombre: "Grabador de 8CH", cat:"grabadores", precio:1000},
    {id: 15, nombre: "Grabador de 16CH", cat:"grabadores", precio:1000},
    {id: 16, nombre: "Grabador de 32CH", cat:"grabadores", precio:1000},
    {id: 17, nombre: "Disco duro 1TB", cat:"almacenamiento", precio:1000},
    {id: 18, nombre: "Disco duro 2TB", cat:"almacenamiento", precio:1000}
]

 alert("Elije la opcion de lo que quieras realizar")
 let Ind = 0
do {
    Ind = Number(prompt(" 1.- Ver lista de productos \n 2.- Ver Stock disponible de un producto \n 3.- Filtrar \n 4.- Comprar un producto \n 0.- SALIR"))
    if (Ind==1) {
        
    } else if ( Ind ==2){

    }


    
} while (condition);