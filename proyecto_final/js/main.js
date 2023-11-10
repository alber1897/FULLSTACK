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
          let secciones=[...document.querySelectorAll("h3")];
          for(let i=0;i<secciones.length;i++){
            
            const {entrantes}=datos;
            
            entrantes.forEach(element => {
            let introducir=document.querySelector(".productos"+secciones[i].innerText);

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


function ajustarDisplay(seccion){
  let todas=[...document.querySelectorAll(".productoSecciones>div")];
  for(let i=0;i<todas.length;i++){
     console.log(todas[i]);
    if(todas[i]==seccion){
      todas[i].style.display="in-line";
    }else{todas[i].style.display="none";}
    
  }
}

let entrantes=document.getElementsByClassName("productosEntrantes");
let patatas=document.getElementsByClassName("productosPatatas");
let alitas=document.getElementsByClassName(".productosAlitas");
let compartir=document.getElementsByClassName(".productosCombos");
let ensaladas=document.getElementsByClassName(".productosEnsaladas");
let hamburguesas=document.getElementsByClassName(".productosHamburguesas");
let postres=document.getElementsByClassName(".productosPostres");

entrantes.addEventListener("click",()=>{ajustarDisplay(entrantes)});
document.addEventListener("click",()=>{ajustarDisplay(patatas)});
document.addEventListener("click",()=>{ajustarDisplay(alitas)});
document.addEventListener("click",()=>{ajustarDisplay(compartir)});
document.addEventListener("click",()=>{ajustarDisplay(ensaladas)});
document.addEventListener("click",()=>{ajustarDisplay(hamburguesas)});
document.addEventListener("click",()=>{ajustarDisplay(postres)});