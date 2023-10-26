const producto= {
    nombre:"Tablet",
    precio:500
}

function ProductoClase(nombre,precio,disponibilidad=false,categoria="play"){
    this.nombre=nombre;
    this.precio=precio;
    this.disponibilidad=disponibilidad;
    this.categoria=categoria;
}

const producto2 = new ProductoClase("Monitor curvo",800,true,"tech");
const producto3 = new ProductoClase("PC",1800);
const producto4 = new ProductoClase("Reloj",800);
console.log(producto2);
console.log(producto3);
console.log(producto4);

function Fecha(anio,mes,dia){
    this.anio=anio;
    this.mes=mes;
    this.dia=dia;
}

let fecha1 = new Fecha(2021,12,25);
let fecha2 = new Fecha(2022,11,15);
let fecha3 = new Fecha(2023,10,5);
let fecha4 = new Fecha(2024,9,23);

console.log(fecha1);
console.log(fecha2);
console.log(fecha3);
console.log(fecha4);

ProductoClase.prototype.formatearProducto = function (){
    return `El producto ${this.nombre} tiene un precio de ${this.precio} $`;
}

let producto5=new ProductoClase("Monitor curvo",800,true,"tech");
let producto6=new ProductoClase("Monitor",600,true,"tech");
let producto7=new ProductoClase("Mon",300,true,"tech");

console.log(producto5.formatearProducto());
console.log(producto6.formatearProducto());
console.log(producto7.formatearProducto());


// CLASES EN JAVASCRIPT

class ProductoClase2{
    constructor(nombre,precio){
        this.nombre=nombre;
        this.precio=precio;
    }

    formatearProducto2(){
        return `El producto ${this.nombre} tiene un precio de ${this.precio} $`;
    }

    calcularDescuento(descuento){
        return (1-(descuento/100))*this.precio;
    }

}

let productoNuevo2= new ProductoClase2("Alberto",30);
console.log(productoNuevo2.formatearProducto2());
console.log(productoNuevo2.calcularDescuento(20));

class Libro{
    constructor(nombre,precio,isbn){
        this.nombre=nombre;
        this.precio=precio;
        this.isbn=isbn;
    }

}
let libro1= new Libro("Hola",30,43431);
console.log(libro1);

class Biblioteca extends Libro{
    constructor(nombre,precio,isbn, pasillo ){
        super(nombre,precio,isbn);
        this.pasillo=pasillo;
        
    }
    formatearProducto3(){
        return `El producto ${this.nombre} tiene un precio de ${this.precio} $`;
    }
}
let libro2=new Biblioteca("Libro 2",30,3,5);
console.log(libro2);
libro2.formatearProducto3();

class Coche{
    constructor(marca,año,matricula){
        this.marca=marca;
        this.año=año;
        this.matricula=matricula;
    }
    numAños(){
        let añoAct=new Date().getFullYear();
        return añoAct-this.año;
    }
}
let coche1=new Coche("Seat",2017,"9920JWL");
let coche2=new Coche("Toyota",2012,"2309GTS");

console.log(coche1.numAños());
console.log(coche2.numAños());

class ITV extends Coche{
    constructor(año, matricula, añoitv) {
        super(undefined,año, matricula); // Omit the first argument to not inherit marca
        this.añoitv = añoitv;
    }
    proximaItv(){
        return this.añoitv-this.año;
    }
}
let coche3=new ITV(2015,"9920JWL",2022);
console.log(coche3);
console.log(coche3.proximaItv());