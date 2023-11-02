
//document.querySelector("h1").textContent=prompt("Introduce nombre");

console.log(1);

window.addEventListener("load",function(){
    console.log("Se ha cargado la pagina");
})

console.log(2);

/* EVENTO DOMCONTENTLOAD*/

document.addEventListener("DOMContentLoaded",()=>{console.log("Se ha cargado el HTML");})

console.log(4);

window.addEventListener("scroll",()=>{console.log("Scrolling..");})

const botonNotificacion = document.querySelector("#botonPrincipal");
botonNotificacion.addEventListener("click",evento=>{
    console.log(evento);
    evento.preventDefault();
    console.log("Mostrando Notificacion");
})

const nombreForm=document.querySelector("#nombre");
const correo=document.querySelector("#correo");
const mensaje=document.querySelector("#mensaje");
const enviar=document.querySelector("#enviar");

let nombreF,correoF,mensajeF,enviarF;
// nombreForm.addEventListener("change",()=>{console.log("Se ha completado el nombre");})

nombreForm.addEventListener("input",evento=>{

    nombreF=evento.target.value;
    act();
    pasar(evento);
})
correo.addEventListener("input",evento=>{

    correoF=evento.target.value;
    act();
    pasar(evento);
})
mensaje.addEventListener("input",evento=>{

    mensajeF=evento.target.value;
    act();
    pasar(evento);
})

function act(){
    document.zquerySelector(".parrafo").innerHTML=`Esta es la web de ${nombreF}, con correo
    ${correoF} y su propuesta es ${mensajeF}`;
}
   

let datos={
    nombre:"",
    correo:"",
    mensaje:""
}

function pasar(evento){
    datos[evento.target.id]=evento.target.value;
    console.log(datos);
}
function crearDiv(){
    const seccionZonas1=document.querySelector(".zonas");

    const divGeneral=document.createElement("DIV");
    divGeneral.classList.add("divGeneral");
    seccionZonas1.appendChild(divGeneral);
    
    const divG=document.querySelector(".divGeneral");
    
    const p1=document.createElement("P");
    p1.classList.add("p1");
    divG.appendChild(p1);

    const p2=document.createElement("P");
    p2.classList.add("p2");
    divG.appendChild(p2);

    const enlaces=document.createElement("DIV");
    enlaces.classList.add("enlaces");
    divG.appendChild(enlaces);
    
    const seccionEnlaces=document.querySelector(".enlaces")

    const enl1=document.createElement("A");
    enl1.classList.add("enl1");
    seccionEnlaces.appendChild(enl1);

    const enl2=document.createElement("A");
    enl2.classList.add("enl2");
    seccionEnlaces.appendChild(enl2);
}


function obtenerZonas(){
     fetch("zonas.json").then(
        resultado=>{
            return resultado.json();
        }
        ).then(datos=>{
            const{zonas}=datos;
            zonas.forEach(element => {
                
                const seccionZonas1=document.querySelector(".zonas");

                const divGeneral=document.createElement("DIV");
                divGeneral.classList.add("divGeneral");
                seccionZonas1.appendChild(divGeneral);
                
                const p1=document.createElement("P");
                p1.textContent=element.zonas;
                divGeneral.appendChild(p1);
            
                const p2=document.createElement("P");
                p2.textContent=element.ciudades;
                divGeneral.appendChild(p2);
            
                const enlaces=document.createElement("DIV");
                enlaces.classList.add("enlaces");
                divGeneral.appendChild(enlaces);
                
                const enl1=document.createElement("A");
                enl1.classList.add("enl1");
                enl1.href="aa";
                enl1.textContent=element.enlaceZonas;
                enlaces.appendChild(enl1);
            
                const enl2=document.createElement("A");
                enl2.classList.add("enl2");
                enl2.textContent=element.enlaceCursos;
                enl2.href="aa";
                enlaces.appendChild(enl2);
                
            });
        }

        )
     
}
obtenerZonas();