
/*
*******************
    COMIENZO CLASE 2023/10/23
*******************


/*
!!!!!!!!!!!!!
REPASO ULTIMO DÍA


for(let i=0; i<10; i++)             ///////FOR
{
    console.log(i)
}


let i=0;                            ///////WHILE
while(i<10){
    console.log(i);
    i++;
}


let i=0;                            ////////DO WHILE
do{
    console.log(i);
    i++;
}while(i<10)
*/

/*función que invierta una cadena.
F: INVERTIR
P: CADENA*/


function invertir(cadena){
    let cadenaF="";
    for(let i=cadena.length-1;i>=0;i--){
       cadenaF+=cadena[i];
    }
    console.log(cadenaF);
    return cadenaF;
}
console.log(invertir("Hola"));

/*
función que concatene dos cadenas.
F: CONCATENAR
P: CADENA1, CADENA2*/


let concatenar=(cadena1,cadena2)=> cadenaFinal=`${cadena1} ${cadena2}`;

console.log(concatenar("cadena1","cadena2"));

/*
función que determine si una cadena contiene una letra.
F: CONTIENE
P: CADENA, LETRA*/

let contiene=(cadena,letra)=>{
    
    if(cadena.includes(letra)){console.log(`La letra ${letra} si se encuentra en la cadena`);}
    else{console.log(`La letra ${letra} NO se encuentra en la cadena`)}
}
contiene("cadena1","a");


/*
función que encuentre el número más grande en un array.
F: MAXNUM
P: ARRAY*/
 let arrayMaxNum=[4,12,16]
function maxnum(array){
    let numGrande=0;
    for(let i=0;i<=array.length-1;i++){
        if(i<i+1){
            numGrande=array[i];
        }
    }
    return numGrande;
}
console.log(maxnum(arrayMaxNum));

/*
función que encuentre el número más pequeño en un array.
F: MINNUM
P: ARRAY*/

let arrayMinNum=[4,5,6,7]
function minNum(array){
    let numPeq=0;
    for( i=array.length;i>=0;i--){
        if(i<i+1){
            numPeq=array[i];
        }
    }
    return numPeq;
}
console.log(minNum(arrayMinNum));


/*
función que cuente la cantidad de elementos booleanos verdadero/falso en un array.
F: NUMBOOLEANOS
P: ARRAY, VALOR
*/
let arrayBo=[true,true,false,false,true]
function numBooleanos(array,valor){
    let cantidad=0;
    for(i=0;i<=array.length;i++){
        if(array[i]==valor){
            cantidad++;
        }
    }
    return cantidad;
}
console.log(numBooleanos(arrayBo,false));

/*
función que determine si todos los elementos de un array son números.
F: ARRAYNUMEROS
P: ARRAY*/
let arrayNum=[3,4,5,6,"a",7]
function arrayNumeros(array){
    let bandera=true;
    for(i=0;i<=array.length;i++){
        
        if(typeof array[i]!=Number){
            bandera=false
        }
    }
    if(bandera==false){return `${bandera}, no todo el array son numeros`;}
    else{return `${bandera},  todo el array son numeros`;}
}
console.log(arrayNumeros(arrayNum));


/*
función que genere un número aleatorio entre N1 y N2.
F: NUMALEATORIO
P: N1,N2*/

let numAleatorio=(n1,n2)=>Math.floor((Math.random()*(n2-n1))+n1);
   

console.log(numAleatorio(3,12));
console.log(numAleatorio(3,12));

/*
función que calcule el área de un triángulo con base y altura como parámetros. Area=base*altura/2
F: AREATRIAGULO
P: BASE,ALTURA*/
let areaTriangulo=(base,altura)=>  areaFinal=base*altura/2;
console.log(areaTriangulo(3,12));

/*
función que convierta grados Celsius a Fahrenheit.
F: GRADOS
P: CELSIUS*/

let grados=(celsius)=> gradosF=(celsius * 9/5) + 32
console.log(grados(200));


/*
función que determine si un año es bisiesto.
F: BISIESTO
P: DIAS
*/

function bisiesto(dias){
    if((dias%100!=0 && dias%4==0) || dias%400==0){
        return `El año es bisiesto`;
    }else{
        return `El año NO es bisiesto`;
    }
}
console.log(bisiesto(2020));

/*

función que cuente la cantidad de vocales en una cadena.
F: VOCALES
P: TEXTO*/
let textoVocales="Hola esto es una prueba"
function vocales(texto){
    let contador=0;
    for(i=0;i<=texto.length;i++){
        if(texto[i]=="a" || texto[i]=="e" || texto[i]=="i" || texto[i]=="o" || texto[i]=="u"){
            contador++;
        }
    }
return contador;
}
console.log(vocales(textoVocales));

/*
función que cuente la cantidad de palabras en una cadena.
F: PALABRAS
P: TEXTO*/
let textoPalabras="Hola esto es una prueba"
function palabras(texto){
   let textoArray=textoPalabras.split(' ');
   return textoArray.length;
}
console.log(palabras(textoPalabras));

/*
función que elimine los elementos duplicados de un array.
F: ELIMINADUPLICADOS
P: ARRAY*/

let arrayDuplicados=[1,2,3,1,2,3];
function eliminaDuplicados(array){
    
    for(i=0;i<=array.length;i++){
       for(k=i+1;k<=array.length;k++){
        if(array[i]==array[k]){
            delete(array[k])
        }
       }
    }
    return array;
}
console.log(eliminaDuplicados(arrayDuplicados));

/*
función que ordene un array de números de forma ascendente.
F: ORDENARARRAY
P: ARRAY*/
    let arrayOrdenado=[2,1,4,3];
    function ordenarArray(array){
        for(i=0;i<=array.length;i++){
            for(k=0;k<=array.length;k++){
                if(array[i]<array[k]){
                    let aux=array[i];
                    array[i]=array[k];
                    array[k]=aux;
                }
               }
        }
        return array;
    }
    console.log(ordenarArray(arrayOrdenado));

/*
función que muestre la tabla de multiplicar de un numero.
F: TABLAMULTIPLICAR
A: NUMERO*/

function tablaMultiplicar(numero){
    for(i=0;i<=10;i++){
        let mult=i*numero;
        console.log(`${numero} x ${i} = ${mult}`);
    }
}
tablaMultiplicar(1);

/*
función que tome un número del 1 al 12 y devuelva el nombre del mes 
correspondiente utilizando una declaración switch
F: NOMBREMES
P: NUMMES*/

function nombreMes(numMes){
    switch(numMes){
        case 12 : console.log("El mes es diciembre");
        break;
        case 11 : console.log("El mes es noviembre");
        break;
        case 10 : console.log("El mes es octubre");
        break;
        case 9 : console.log("El mes es septiembre");
        break;
        case 8 : console.log("El mes es agosto");
        break;
        case 7 : console.log("El mes es julio");
        break;
        case 6 : console.log("El mes es junio");
        break;
        case 5 : console.log("El mes es mayo");
        break;
        case 4 : console.log("El mes es abril");
        break;
        case 3 : console.log("El mes es marzo");
        break;
        case 2 : console.log("El mes es febrero");
        break;
        case 1 : console.log("El mes es enero");
        break;
        default: console.log("No has introducido numero de mes correcto");
        break;

    }
}
nombreMes(11)

/*
función que determine si una contraseña es segura basándose en 
longitud>8, 
mayúsculas y minusculas
números
F: CONTRASEÑASEGURA
P: CONTRASEÑA*/
function contraseñaSegura(contraseña){
    
    if(contraseña.length>8 && contraseña.match(/[A-z]/) && contraseña.match(/[A-Z]/) && contraseña.match(/\d/)){
        console.log("Contraseña valida");
    }else{
        console.log("Contraseña invalida");
    }

}
contraseñaSegura("Alberto97");


/*
función que tome una cadena y reemplace todas las letras 'LETRA1' por 'LETRA2'.
F: REEMPLAZAR
P: LETRA1, LETRA2
*/
let cadenaR="Hasta cuando";

function remplazar(letra1, letra2){
    let convertir=cadenaR.split('');

    for(i=0;i<=convertir.length-1;i++){
        if(convertir[i]==letra1){
            convertir[i]=letra2;
        }
    }
    return convertir.join('');
    
}
console.log(remplazar("a","e"));


function INVERTIR(cadena){
    var nuevaCadena="";
    for(i=cadena.length-1;i>=0;i--){
        
        console.log(cadena[i]);
        cadena[i]="A";
        nuevaCadena+=cadena[i];
    }
    return nuevaCadena;
}
console.log(INVERTIR("Hola"));