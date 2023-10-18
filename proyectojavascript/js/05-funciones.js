
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

//FUNCIONES QUE RETORNAN VALORES

function multiplicar(n1,n2){
    return n1*n2;
}

let resultadoMult=multiplicar(3,4);
console.log(resultadoMult);

let carritoA=0;
function llamada(importe){
    
    return carritoA+=importe;
    
}
llamada(20);
llamada(20);
llamada(20);
console.log(carritoA);

let descuento=0.2;
let totalAhorro=0;
function sumarDescuento(x){
    totalAhorro+=x*descuento;
}

sumarDescuento(10);
sumarDescuento(20);
sumarDescuento(30);
console.log(totalAhorro);

const reproductor = {
    reproducir : function(nc){
        console.log(`Reproduciendo cancion con el ID: ${nc}`);
    },
    pausar : function(){
        console.log(`PAUSANDO CANCION`);
    },
    crearPlaylist : function(nombre){
        console.log(`Creando Playlist: ${nombre}`);
    }
}
reproductor.reproducir(12);
reproductor.crearPlaylist("Rap");

reproductor.borrarCancion=function (nc){
    console.log(`Borrada la cancion con ID: ${nc}`);
}

reproductor.borrarCancion(12);


let triplicar=function(x){
    return 3*x;
}
console.log(triplicar(10));
let res=triplicar(7);
console.log(res);


/*********ARROW FUNCTIONS********** */

let triplicar2= x=> 3*x;

let aprendiendo = numero => numero+7;
console.log(aprendiendo(10));


let carrito=[
    producto1={nombre:"mochila",precio:20},
    producto2={nombre:"zapatilla",precio:80},
    producto3={nombre:"pantalones",precio:50},
    producto4={nombre:"camiseta",precio:40}
];

let flechas= carrito.some(function (producto){
    return producto.nombre==="TABLET"
});

flechas=carrito.some(producto=>producto.nombre==="TABLET");
console.log(flechas);

flechas= carrito.reduce(function(total,producto){
    return total+producto.precio;
},0);
console.log(flechas);

flechas=carrito.reduce((total,producto)=>total+producto.precio,0)
console.log(flechas);

flechas=carrito.filter(function (producto){
    return producto.precio>400
});
flechas=carrito.filter(producto=>producto.precio>50);
console.log(flechas);

function numeros(n1,n2,n3){
    return n1+n2+n3;
}console.log(numeros(1,2,3));

let numeros1=function(n1,n2,n3){
    return n1+n2+n3;
}
console.log(numeros(1,2,3));

numeros=(n1,n2,n3)=>n1+n2+n3;
console.log(numeros(10,20,30));


let arreglo=[1,2,3,4,5];
function buscarA(n){
     arreglo.includes(n);
}console.log(buscarA(4));

let buscar1=function(n,e){
    return e.includes(n);
}
console.log(buscar1(8,arreglo));

buscar1= (n,e)=>e.includes(n);
console.log(buscar1(3,arreglo));

let por10=(n1,n2)=>(n1+n2)*10;
console.log(por10(3,5));

let sumarCadenas = (c1,c2)=>c1.length+c2.length;
console.log(sumarCadenas("Hola","Hola"));