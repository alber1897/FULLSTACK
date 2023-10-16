let ejercicio6={};

let variableA="valor varA";
let variableB="valor varB";
let variableC="valor varC";

ejercicio6.variableA=variableA;
ejercicio6.variableB=variableB;
ejercicio6.variableB=variableB;

console.log(ejercicio6);

/***************ARRAYS*************** */

const numeros=[10,20,30,40,50];
console.log(numeros);
console.table(numeros);

const meses = new Array("Enero","Febrero","Marzo");
console.table(meses);

const diaSemana = new Array("Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo");
console.table(diaSemana);
console.log(diaSemana[0],diaSemana[3]);

let objeto1={
    nombre:"meses",
    numMeses:12,
    finde:false,
    finSemana:["Viernes","Sabado","Domingo"],
    
}
objeto1.arrayPrueba=[1,2,3]

console.log(objeto1.finSemana);
console.log(objeto1);

//DESTRUCTURING

let {nombre,numMeses,finde,finSemana}=objeto1;
console.log(nombre,numMeses,finde,finSemana);
console.log(finSemana.length);

/******************************************************** */

let num=[10,20,30,40];

num.push(50,60,70);//AÑADE AL FINAL DEL ARRAY
console.log(num);

num.unshift(7,8,9);//AÑADE AL PRINCIPIO DEL ARRAY
console.log(num);

num.shift(7); //ELIMINA AL PRINCIPIO DEL ARRAY
console.log(num);

num.pop(70);//ELIMINA EL ULTIMO DEL ARRAY
console.log(num);

//ELIMINAR 3 ELEMENTOS A PARTIR DE LA POSICION 2
num.splice(2,3);
console.log(num);

let nuevoNum=[...num,1000];
console.log(nuevoNum);

let estaciones=["Verano"];
estaciones.unshift("Primavera");
estaciones.push("Otoño","Invierno")
console.log(estaciones);

let carrito=[
    producto1={nombre:"mochila",precio:20},
    producto2={nombre:"zapatilla",precio:80},
    producto3={nombre:"pantalones",precio:50},
    producto4={nombre:"camiseta",precio:40}
];

console.log(carrito);
console.log(producto1);
console.log(carrito[1]);

//BUSCAR UN VALOR CON INCLUDES
console.log(estaciones.includes("Otoño"));

//USO DE "SOME" PARA ARRAY DE OBJETOS
resultado=carrito.some(function (productos){
    
})
//METODO PARA SABER EL TOTAL
    resultado=carrito.reduce(function(total,producto){
        return total + producto.precio
    },0);
    console.log(resultado);

//METODO FILTER
resultado=carrito.filter(function(producto){
    return producto.precio>60
})
console.log(resultado);
