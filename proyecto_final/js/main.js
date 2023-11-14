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
          const secciones = Object.keys(datos); // Obtén todas las secciones del JSON

          secciones.forEach((seccion) => {
            datos[seccion].forEach((element) => {
              let introducir = document.querySelector(".productos" + seccion); // Usa el nombre de la sección como clase
              let contenidoPlato = document.createElement("DIV");
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
        })
          
        })
  
}
obtenerEntrantes();

let todas=[...document.querySelectorAll(".productoSecciones div") ];
function ajustarDisplay(seccion){
  
  for(let i=0;i<todas.length;i++){
    console.log(todas[i].className.slice(9))
    console.log(seccion.className.slice(7).toLowerCase());
    if(todas[i].className.slice(9)==seccion.className.slice(7).toLowerCase()){
      todas[i].style.display="grid";
    }else{
      todas[i].style.display="none";
    }
    
  }
}

let entrantes=document.querySelector(".seccionEntrantes");
let patatas=document.querySelector(".seccionPatatas");
let alitas=document.querySelector(".seccionAlitas");
let compartir=document.querySelector(".seccionCompartir");
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

function cambioProductos(){
  fetch("carta.json").then(resultado=>{return resultado.json();})
        .then(datos=>{
          const secciones = Object.keys(datos); // Obtén todas las secciones del JSON

          secciones.forEach((seccion) => {
            datos[seccion].forEach((element) => {
              let introducir = document.querySelector(".editar" + seccion); // Usa el nombre de la sección como clase


            let tr=document.createElement("TR");
            introducir.appendChild(tr);

            let id=document.createElement("TD");
            id.textContent=element.id;
            tr.appendChild(id);

            let nombre=document.createElement("TD");
            nombre.textContent=element.nombrePlato;
            tr.appendChild(nombre);

            let descripcion=document.createElement("TD");
            descripcion.textContent=element.descripcion;
            tr.appendChild(descripcion);

            let precio=document.createElement("TD");
            precio.textContent=element.precio;
            tr.appendChild(precio);

            let url=document.createElement("TD");
            url.textContent=element.urlImagen;
            tr.appendChild(url);

            let editar=document.createElement("TD");
            tr.appendChild(editar);

            let boton=document.createElement("A");
            boton.classList.add("edit-btn");
            boton.textContent="Editar";
            editar.appendChild(boton);


          });
        })
          
        })
  
}
cambioProductos();