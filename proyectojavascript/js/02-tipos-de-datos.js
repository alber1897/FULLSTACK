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

