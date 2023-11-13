class Productos{
  constructor(nombrePlato, descripcion, precio, urlImagen){
    this.nombrePlato=nombrePlato;
    this.descripcion=descripcion;
    this.precio=precio;
    this.urlImagen=urlImagen;
  }

  meterProducto(nuevoProducto, seccion){

  }
}
function obtenerSecciones(){

}
function obtenerEntrantes(){
  fetch("carta.json").then(resultado=>{return resultado.json();})
        .then(datos=>{
          let secciones=[...document.querySelectorAll(".seccionesCajas div")];
          for(let i=0;i<secciones.length;i++){
            
            const {entrantes}=datos;
            
            entrantes.forEach(element => {
            let introducir=document.querySelector(".productos"+secciones[i].className.slice(7));
            let contenidoPlato=document.createElement("DIV");
            contenidoPlato.classList.add("contenidoPlato");
            introducir.appendChild(contenidoPlato);

            let imgProducto=document.createElement("DIV");
            imgProducto.classList.add("imgProducto");
            contenidoPlato.appendChild(imgProducto);

            let imagen=document.createElement("IMG");
            imagen.src=element.urlImagen;
            imgProducto.appendChild(imagen);

            let descripcionProducto=document.createElement("DIV");
            descripcionProducto.classList.add("descripcionProducto");
            contenidoPlato.appendChild(descripcionProducto);

            let nombreProducto=document.createElement("H3");
            nombreProducto.textContent=element.nombrePlato;
            descripcionProducto.appendChild(nombreProducto);

            // let precio=document.createElement("P");
            // precio.textContent=element.precio;
            // descripcionProducto.appendChild(precio);

            let ingredientes=document.createElement("P");
            ingredientes.textContent=element.descripcion;
            descripcionProducto.appendChild(ingredientes);
          });
          }
          
        })
  
}
obtenerEntrantes();

let todas=[...document.querySelectorAll(".productoSecciones div") ];



function ajustarDisplay(seccion){
  
  for(let i=0;i<todas.length;i++){
    if(todas[i].className.slice(9)==seccion.className.slice(7)){
      todas[i].style.display="grid";
    }else{
      todas[i].style.display="none";
    }
    
  }
}

let entrantes=document.querySelector(".seccionEntrantes");
let patatas=document.querySelector(".seccionPatatas");
let alitas=document.querySelector(".seccionAlitas");
let compartir=document.querySelector(".seccionCombos");
let ensaladas=document.querySelector(".seccionEnsaladas");
let hamburguesas=document.querySelector(".seccionHamburguesas");
let postres=document.querySelector(".seccionPostres");


entrantes.addEventListener("click",()=>{ajustarDisplay(entrantes)});
patatas.addEventListener("click",()=>{ajustarDisplay(patatas)});
alitas.addEventListener("click",()=>{ajustarDisplay(alitas)});
compartir.addEventListener("click",()=>{ajustarDisplay(compartir)});
ensaladas.addEventListener("click",()=>{ajustarDisplay(ensaladas)});
hamburguesas.addEventListener("click",()=>{ajustarDisplay(hamburguesas)});
postres.addEventListener("click",()=>{ajustarDisplay(postres)});

// let secciones = document.querySelector(".seccionesCajas");

// secciones.addEventListener("click", (event) => {
//   const target = event.target;
//   if (target && target.matches(".seccionesCajas > div")) {
//     ajustarDisplay(target);
//   }
// });