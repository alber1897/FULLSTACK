function obtenerEmpleados(){
    fetch("empleados.json")
    .then(resultado =>{
        return resultado.json();
    })
    .then(datos=>{
        const{empleados}=datos;
        console.log(empleados);

        empleados.forEach(element => {
            console.log(element);
            console.log(element.id);
            console.log(element.nombre);
            console.log(element.puesto);
        });

    })
}
obtenerEmpleados();

// ASYN AWAIT PARA FETCH

async function obtenerEmpleados2() {

    const resultado = await fetch("empleados.json");

    const datos = await resultado.json();

    console.log(datos);
    
    const{empleados}=datos;
    console.log(empleados.id);

    empleados.forEach(element => {
        console.log(element);
        console.log(element.id);
        console.log(element.nombre);
        console.log(element.puesto);
    });
}

obtenerEmpleados2();