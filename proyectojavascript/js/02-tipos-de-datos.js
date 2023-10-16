const producto1 = "Juego de mesa EL PUEBLO DUERME";
const producto2 = String("DOOBLE");
const producto3 = new String("UNO");

console.log("PRODUCTO: " + producto1);
console.log("PRODUCTO2 CON STRING: "+producto2);
console.log("PRODUCTO3 CON NEW STRING: ",producto3);

console.log("TYPEOF PRODUCTO: " + typeof producto1);
console.log(" TYPEOF PRODUCTO2 CON STRING: "+typeof producto2);
console.log(" TYPEOF PRODUCTO3 CON NEW STRING: " +typeof producto3);

let cien;
let doscientos;

cien = 100;
doscientos = "200";

console.log(typeof cien);
console.log(typeof doscientos);

console.log("METODO LENGTH: "+producto1.length);

console.log("METODO INDEXOF: ",producto3.indexOf("UNO"));

console.log("METODO INDEXOF: ",producto3.includes("UNO"));


//CREAR 3 VARIABLES ejString1,2 y 3. 

let ejString1="Esto es una cadena de texto";
let ejString2="Esto es una prueba para indexOf";
let ejString3="Esto es una prueba para includes";

console.log("Longitud de la cadena:"+ejString1.length);
console.log("Posicion: " + ejString2.indexOf("prueba"));
console.log("Existe en la cadena: "+ejString3.includes("includes"));

/*****************NUMBER******************* */

let numero1=100;
let numero2=200.25;
let numero3="200";
let numero4=2/3;

console.log(numero1 + " Tipo de dato: " + typeof numero1);
console.log(numero2 + " Tipo de dato: " + typeof numero2);
console.log(numero3 + " Tipo de dato: " + typeof numero3);
console.log(numero4 + " Tipo de dato: " + typeof numero4);

console.log("NUMERO 1+2= ", numero1+numero2);
console.log("NUMERO 1-2= ", numero1-numero2);
console.log("NUMERO 1x2= ", numero1*numero2);
console.log("NUMERO 1/2= ", numero1/numero2);
console.log("NUMERO 1%2= ", numero1%numero2);


/********MATH***** */

let resultado = Math.round(30*Math.random());
console.log(resultado);


let area;

let diametro=5;
area=Math.pow(diametro/2,2)*Math.PI;

console.log("El area es:" + area);

/********DADO****** */

let numAleatorio=Math.ceil(Math.random()*5+1);
console.log(numAleatorio);

let resultadoOrden = 20 + 30 * 2;
console.log("MOSTRAR EL ORDEN DE LAS OPERACIONES", resultadoOrden);

let resultadoOrden1 = (20 + 30) * 2;
console.log("MOSTRAR EL ORDEN DE LAS OPERACIONES", resultadoOrden1);

let prenda1=120;
let prenda2=85;
let prenda3=24;
let descuento=40/100;
let ahorro;
let total=prenda1+prenda2+prenda3;
let dineroAhorrado=total*descuento;



let pagar=total- (total*descuento);
console.log("El precio total es: " + total);
console.log("El precio total con descuento es: ",Math.round(pagar*10)/10);
console.log("El dinero que ahorro es: " ,Math.round(dineroAhorrado*10)/10);

let meGusta=0;
meGusta++;
console.log("USO DE INCREMENTOS, ME GUSTA", meGusta+=15);
console.log("TRAS EL INCREMENTO", meGusta);

let meGusta2=0;


const nombre="Alberto";
const email="alber1897@gmail.com";
console.log(`Nombre: ${nombre} Email: ${email}`);
