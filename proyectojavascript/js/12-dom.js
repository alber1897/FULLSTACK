const heading= document.querySelector(".seccionPrincipal h1");
console.log(heading);

heading.textContent="Nuevo titulo 1234";

heading.classList.add("NuevaClaseDesdeJS");
heading.classList.remove("NuevaClaseDesdeJS");

const enlaces= document.querySelectorAll("div a");
console.log(enlaces);
console.log(enlaces[0]);

enlaces[0].href="#";

enlaces[1].textContent="Modificando segundo enlace";
enlaces[1].href="#";
console.log(enlaces[1]);


const boton= document.getElementById("botonPrincipal");
console.log(boton);

const botonClase=document.getElementsByClassName("botonClase");

const nuevoEnlace = document.createElement("A");
nuevoEnlace.href="#";
nuevoEnlace.textContent="Nuevo enlace 4";
nuevoEnlace.classList.add("enlace");
console.log(nuevoEnlace);

const enlacesAñadir=document.querySelector(".navPrincipal");
enlacesAñadir.appendChild(nuevoEnlace);

const ejercicioEnlace=document.createElement("A");
ejercicioEnlace.href="#";
ejercicioEnlace.textContent="Ejercicio Enlace";
ejercicioEnlace.classList.add("enlace");

document.querySelector(".navPrincipal").appendChild(ejercicioEnlace);

