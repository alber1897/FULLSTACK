
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
    document.querySelector(".parrafo").innerHTML=`Esta es la web de ${nombreF}, con correo
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


