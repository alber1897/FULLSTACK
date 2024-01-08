function rellenarCarton(n){
    for(i=0;i<n;i++){
        let ubicacion= document.querySelector(".cartones");
     
        let carton=document.createElement("DIV");
        carton.className="carton";
        ubicacion.appendChild(carton)

        for(let k=0;k<27;k++){
            let divPosicion=document.createElement("DIV");
            divPosicion.className="divPosicion"+k;
            divPosicion.innerText=Math.floor(Math.random() * (100 - 0 + 1) + 0);
            carton.appendChild(divPosicion);
        }
    }
    let disable=document.querySelector("#formulario");

    disable.style.display="none";
}


let jugadores=document.querySelector("form").addEventListener("submit",e=>{
    e.preventDefault();
    let valor=document.querySelector("#players");
    rellenarCarton(valor.value);
})