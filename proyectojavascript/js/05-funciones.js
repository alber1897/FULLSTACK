
/**********DECLARACION DE LA FUNCION********** */
function sumar(n1,n2){
    // console.log(n1+n2);
    return n1+n2;
}

console.log(sumar(1,2));

/*********EXPRESION DE LA FUNCION************* */
let sumar2 = function(n3,n4){
    return n3+n4;
}
console.log(sumar2(3,4));

/*******SINTAXIS IIFE******* */
(function(){
    console.log("Esto es una funcion");
})();

/******************************************************* */

const numero1=20;
const numero2="20";

console.log(typeof(parseInt(numero2)));
console.log(typeof(numero1.toString()));

function colores (color){
    console.log("El color elegido es: "+color);
}
colores("marron");


function tienda(importe,descuento){
    let descuentoT=importe*(descuento/100);
    let precioF=importe-descuentoT;
    console.log(`El descuento total es ${descuentoT} y el precio final es ${precioF}`);
}

tienda(10,30);

function texto(x){
    console.log(`El numero de caracteres es: ${x.length}`);
}
texto("Esto es un tweet de prueba");

function buscar(texto,palabra){
    let busqueda=texto.includes(palabra);
    console.log(`La palabra se encuentra en el texto: ${busqueda}`);
}
buscar("Esto es un texto de prueba","prueba")

function añadir(x){
    let caja=[1,2,3,4,5];
    caja.push(x);
    console.log(`La cadena con el elemento añadido es: ${caja}`);
}
añadir(6);

function resta(v1,v2){
    console.log(`El resultado es ${v1-v2}`);
}
resta(2,1);