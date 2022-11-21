// ACA HAY TRES FUNCIONES PARA CADA UNA DE LAS OPCIONES A B O C DEPENDE DE LA ELECCION DEL USUARIO

function consultarServicios(servicios) {

    let mensajeOpciones = "";

    for (let index = 0; index < servicios.length; index++) {
        const servicio = servicios[index];

        mensajeOpciones = mensajeOpciones + "El servicio de " + servicio.nombre + " tiene un valor de " + servicio.precio + " pesos argentinos ,";
    }

    alert(mensajeOpciones);
}

function contratarServicios(servicios) {

    const serviciosSeleccionados = [];
    let mensajeProductosSeleccionados = "";

    for (let index = 0; index < servicios.length; index++) {
        const servicio = servicios[index];

        const seleccionServicio = prompt(`"Si desea aquirir el servicio de " ${servicio.nombre} que tiene un valor de ${servicio.precio} marque Si, de lo contrario marque No`).toLowerCase();

        if (seleccionServicio === "si") {
            serviciosSeleccionados.push(servicio);
        }
    }
    let sumaServicios = 0;

    for (let index = 0; index < serviciosSeleccionados.length; index++) {
        const servicioSeleccionado = serviciosSeleccionados[index];

        mensajeProductosSeleccionados = mensajeProductosSeleccionados + "Usted selecciono el servicio de " + servicioSeleccionado.nombre + " con un valor de " + servicioSeleccionado.precio + " \n";

        sumaServicios = sumaServicios + servicioSeleccionado.precio
    }




    alert(mensajeProductosSeleccionados + " y su total a pagar es de " + sumaServicios);
}


function buscarServicio(servicios) {
    let nombreDeServicio = prompt(" Ingrese el servicio que necesita").toLowerCase();

    const servicioSeleccionado = servicios.find(servicio => {
        if (nombreDeServicio === servicio.nombre) {
            return true
        }

    });

    if (!servicioSeleccionado) {
        alert(" este servicio no fue encontrado");
    }
    else {
        alert(" Ud selecciono " + servicioSeleccionado.nombre + " y ese servicio tiene un valor de " + servicioSeleccionado.precio)
    }

}

// ARRAY Y UN OBJETO DENTRO DEL ARRAY, DONDE TENGO PLASMADOS LOS SERVICIOS QUE OFRECE EL SITIO

let servicios = [
    { id: 1, nombre: "consulta psicologica", precio: 1500 },
    { id: 2, nombre: "consulta psiquiatrica", precio: 1800 },
    { id: 3, nombre: "seminario psicoeducativo", precio: 1200 },
    { id: 4, nombre: "grupo de apoyo", precio: 700 },
    { id: 5, nombre: "evaluacion diagnostica", precio: 850 },
];

// SE LE PIDE AL USUARIO UNA ELECCION A B O C SEGUN CORRESPONDA,  Y SEGUN LA RESPUESTA SE DESENVUELVE UNA FUNCION

const seleccionDeOpcion = prompt("Seleccione A para consultar servicios y precios , o seleccione B para contratar un servicio o seleccione C si quieres buscar la existencia de un servicio").toUpperCase();



if (seleccionDeOpcion === "A") {
    consultarServicios(servicios);
}


if (seleccionDeOpcion === "B") {
    contratarServicios(servicios);
}


if (seleccionDeOpcion === "C") {
    buscarServicio(servicios);

}





//////////////// GUARDAR LOCALMENTE MI ARRAY Y ADEMAS AGREGAR UNA SECCION CON LOS SERVICIOS ( MEJORAR) ejercicio de clase  ////

localStorage.setItem("servicios", JSON.stringify(servicios));



let servicioStorage = JSON.parse(localStorage.getItem("servicios"));

if (servicioStorage.length > 0) {
    servicios = servicioStorage;
} else {
    let seccionServicios = document.getElementById("seccionServicios")
    let div = document.createElement("div");
    div.innerHTML = "No hay productos en el carrito";

    seccionServicios.append(div);
}

servicios.forEach(item => {
    let seccionServicios = document.getElementById("seccionServicios")
    let div = document.createElement("div");
    div.innerHTML = `

    <p> Servicio: ${item.nombre}</p>
    <b>$${item.precio}</b>
    
  ` ;
    div.className = ("morado")
    seccionServicios.append(div);
});






