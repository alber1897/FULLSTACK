
let editar=[...document.querySelectorAll(".productos tbody") ];
function ajustarBody(seccion){
  
  for(let i=0;i<editar.length;i++){
    
    if(editar[i].className.slice(6)==seccion.className.slice(7).toLowerCase()){
      editar[i].style.display="table-row-group";
      
    }else{
      editar[i].style.display="none";
      
    }
    
  }
}


function ajustarInicio(){
    for(let i=0;i<editar.length;i++){
        if(editar[i].className.slice(6)!="entrantes"){
            editar[i].style.display="none";
        }
    }
}
ajustarInicio();



async function cambioProductos() {
  try {
    const response = await fetch("carta.json");
    const datos = await response.json();

    const secciones = Object.keys(datos);

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
        boton.setAttribute("id",element.nombrePlato);
        boton.textContent="Editar";
        editar.appendChild(boton);

      });
    });

 
  } catch (error) {
    console.error('Error al cargar los datos:', error);
  }
}


function displayModify(e){
  if(e){
    document.querySelector("table").style.display="none";
    document.querySelector("form").style.display="contents"
  }
}

function modificar(plato){
  
  fetch("carta.json").then(response=>{return response.json();}).
    then(datos=>{
      let secciones=Object.keys(datos);

      secciones.forEach(s=>{
        datos[s].forEach(element=>{
         
          if(plato==element.nombrePlato){
            let tabla=document.querySelector(".productos");
            
            
            let form=document.createElement("FORM");
            tabla.appendChild(form);


            //CREAMOS CAMPO NOMBRE A EDITAR
            let labelN=document.createElement("LABEL");
            labelN.setAttribute("for","nombre");
            labelN.textContent=plato+": ";
            form.appendChild(labelN);
            


            let inputN=document.createElement("INPUT");
            inputN.setAttribute("type","text");
            inputN.setAttribute("id","nombre");
            inputN.setAttribute("value",plato);
            form.appendChild(inputN);
            

            //CREAMOS CAMPO DESCRIPCION A EDITAR
            let labelD=document.createElement("LABEL");
            labelD.setAttribute("for","descripcion");
            labelD.textContent="Descripcion: ";
            form.appendChild(labelD);
            

            let inputD=document.createElement("INPUT");
            inputD.setAttribute("type","text");
            inputD.setAttribute("id","descripcion");
            inputD.setAttribute("value",element.descripcion);
            form.appendChild(inputD)

            //CREAMOS CAMPO PRECIO A EDITAR
            let labelP=document.createElement("LABEL");
            labelP.setAttribute("for","precio");
            labelP.textContent="Precio: ";
            form.appendChild(labelP)

            let inputP=document.createElement("INPUT");
            inputP.setAttribute("type","text");
            inputP.setAttribute("id","precio");
            inputP.setAttribute("value",element.precio);
            form.appendChild(inputP)

           
            //CREAMOS IMAGEN NOMBRE A EDITAR
            let labelI=document.createElement("LABEL");
            labelI.setAttribute("for","imagen");
            labelI.textContent="Imagen: ";
            form.appendChild(labelI)

            let inputI=document.createElement("INPUT");
            inputI.setAttribute("type","text");
            inputI.setAttribute("id","imagen");
            inputI.setAttribute("value",element.urlImagen);
            form.appendChild(inputI)
           
          }
          
        })
      })
    })
}


document.addEventListener('DOMContentLoaded', function () {
  cambioProductos();  // Llama a la función dentro del evento DOMContentLoaded
});





document.addEventListener("click",e=>{
  const secciones=[".seccionEntrantes",".seccionPatatas",".seccionAlitas",".seccionCompartir",".seccionEnsaladas",".seccionHamburguesas",".seccionPostres"]

  if(secciones.includes("."+e.target.className)){
    document.querySelector(".productos table").style.display="table-row-group";
    document.querySelector(".productos form").remove();
    ajustarBody(e.target)
  }
  else if(e.target.className=="edit-btn"){
    
    document.querySelector(".productos table").style.display="none";
    modificar(e.target.id);
    
  }

});