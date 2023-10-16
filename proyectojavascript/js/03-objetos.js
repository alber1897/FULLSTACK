
let producto={
    nombreProducto : "Coche",
    precio:300,
    disponible: false
}

console.log("MI PRIMER OBJETO producto: ",producto);
console.log(`MI PRIMER OBJETO CON TEMPLATE STRING ${producto}`,producto);

console.log("USO DE SINTAXIS DE PUNTO producto.precio: ", producto.precio);
console.log(`MI PRIMER OBJETO CON TEMPLATE STRING ${producto.precio}`);

console.log("USO DE CORCHETES ",producto["precio"]);

/********CREAMOS PROPIEDADES********* */

producto.categoria = "Segmento A"

console.log("AÑADIR CATEGORIA a producto: ",producto);

//PARA BORRAR

delete producto.categoria;
console.log("ELIMINAR CATEGORIA a producto: ",producto);

//ALMACENAR PROPIEDADES EN VARIABLES
let precioProducto = producto.precio;
let nombreProducto = producto.nombreProducto;

console.log("MOSTRAMOS VARIABLES QUE CONTIENEN PROPIEDADES: ",precioProducto,nombreProducto);

//DESTRUCTURING AL PRECIO

let {precio,categoria}=producto;

let playa={
    nombrePlaya:"Oleiros",
    ubicacion:"Asturias",
    recomendable:true,
    temperaturaAgua:20
}
    let{nombrePlaya,ubicacion,recomendable,temperaturaAgua}=playa;

    console.log("DESTRUCTURIN PLAYA", nombrePlaya,ubicacion,recomendable,temperaturaAgua);

let playa2={
    tiempo:"malo"
};
playa2={...playa};
console.log(playa2);