let carrito=[
    {
        nombre:"TV",
        precio:750
    },
    {
        nombre:"Tablet",
        precio:350
    },
    {
        nombre:"Movil",
        precio:550
    },
    {
        nombre:"PC",
        precio:1750
    }
];

// FOREACH
for(i=0;i<carrito.length;i++){
    console.log(carrito[i]);
}
carrito.forEach(element =>  console.log(element.nombre));

// MAP

const arrayMap= carrito.map(producto=>producto);
arrayMap.forEach(producto=>console.log(producto.precio))

// THIS 

const reserva={
    nombre: "Alberto",
    apellido: "Rey",
    total: 50,
    pagado: false,
}
console.log(reserva.nombre);


reserva.informacion=function(){
    console.log(`El cliente ${this.nombre} ${this.apellido} tiene una
    reserva de ${this.total} y esta pagada: ${this.pagado}`);}

reserva.informacion();

let fecha={
    año:2020,
    mes:"Octubre",
    octubre:31,
    dia:24,
    faltantes: function(){
        return this.octubre-this.dia;
    }
}
console.log(fecha.faltantes());