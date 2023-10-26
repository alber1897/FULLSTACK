

// TRY CATCH
const numero1=20;
const numero3=40;

console.log(numero1);

try{
    console.log(2);
}catch(error){
    console.log("Tienes un error en el console log 2");
}

console.log(numero3);

// PROMESAS

let autenticado=true;

const usuarioAutenticado = new Promise((resolve,reject)=>{
    if(autenticado){
        resolve("Usuario autenticado");
    }else{
        reject("No se puede iniciar sesion");
    }
});
console.log(usuarioAutenticado);

usuarioAutenticado
    .then(function(resultado){
        //console.log(resultado);
    })
    .catch(function (resultado){
        console.log(resultado);
    });
    console.log(usuarioAutenticado);



    const boton = document.querySelector("#boton");

boton.addEventListener("click", function () {

    console.log("DISTE CLICK");

    Notification.requestPermission() // YA ES UNA PROMISA
        .then(resultado => console.log(`El resultado es ${resultado}`)); // SOLICITAR PERMISO DE NOTIFICACIONES

})
if(Notification.permission==="granted"){
    new Notification("Esta es una notificacion",{
        icon: 'ico-centro.png',
        body: "Notificacion tu carrera digital"
    })
}

// FUNCIONES ASINCRONAS

// setTimeout(()=>{console.log("TimeOut Finalizado")},3000);

// setInterval(()=>{console.log("Set interval actuando");},4000)

function descargarNuevosClientes(){
    return new Promise(resolve=>{
        console.log("Descargando clientes espere...")

        setTimeout(()=> { 
            resolve("Los clientes fueron descargados")
        },1000);
    });
}

async function app(){
    const resultadoAsync=await descargarNuevosClientes();
    console.log(resultadoAsync);
    console.log("ESTE CODIGO SI SE BLOQUEAAAAA");
    
}
app();
console.log("ESTE CODIGO NO SE BLOQUEA");

let pedidos=false;
function descargarPedidos(){
    return new Promise((resolve,reject)=>{
        console.log("Descargando pedidos espere...")

        setTimeout(()=> { 
            resolve("Los pedidosss fueron descargados")
        },
        reject(()=>{
            reject("No se pueden descargar los pedidos");
        }),
        
        3000);
    });
}
descargarPedidos();