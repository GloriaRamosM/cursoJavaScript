
let registroStorage = JSON.parse(localStorage.getItem("registro"));

if (!registroStorage || !registroStorage.email) {
    window.location = "./registro.html"
}


// ARRAY Y UN OBJETO DENTRO DEL ARRAY, DONDE TENGO PLASMADOS LOS SERVICIOS QUE OFRECE EL SITIO

let servicios = [
    { id: 1, nombre: "consulta psicologica", precio: 1500 },
    { id: 2, nombre: "consulta psiquiatrica", precio: 1800 },
    { id: 3, nombre: "seminario psicoeducativo", precio: 1200 },
    { id: 4, nombre: "grupo de apoyo", precio: 700 },
    { id: 5, nombre: "evaluacion diagnostica", precio: 850 },
];

let carrito = [];

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
    let { nombre, id, precio } = item;

    let seccionServicios = document.getElementById("carrito")
    let div = document.createElement("div");
    div.innerHTML = `

    <p> Servicio: ${nombre}</p>
    <b>$${precio}</b>
    <button class="botonComprar" id="${id}" > Agregar </button>
    
  ` ;
    div.className = ("morado")
    seccionServicios.prepend(div);
});



let botones = document.getElementsByClassName("botonComprar");

for (let i = 0; i < botones.length; i++) {
    let boton = botones[i];
    boton.addEventListener("click", event => {
        const { id } = event.target;
        const servicioSeleccionado = servicios.find(servicio => servicio.id === parseInt(id));
        carrito.push(servicioSeleccionado);
        event.target.setAttribute("disabled", "true");
    });

};

let botonCarrito = document.getElementById("botonCarrito");
botonCarrito.addEventListener("click", () => {
    document.getElementById("carrito").innerHTML = ""

    document.getElementById("listaCompra").setAttribute("class", "");

    let listaCompra = document.getElementById("listaCompra");

    let total = 0;

    carrito.forEach(item => {
        let {nombre, precio} = item;
        let div = document.createElement("div");
        div.innerHTML = `
            <p> Servicio: ${nombre}</p>
            <b>$${precio}</b>
        `;
        div.className = ("morado")
        listaCompra.prepend(div);

        total = total + precio


    });

    let div = document.createElement("div");
    div.innerHTML = `
    <h3> Total = ${total} </h3>
    `
    document.getElementById("total").append(div);
});

let botonComprar = document.getElementById("comprar");
botonComprar.addEventListener("click", () => {
    let formularioCompra = document.getElementById("formularioCompra");
    formularioCompra.innerHTML = `
        <form>
            <div>
                <label for="numeroTarjeta">Ingrese numero tarjeta</label>
                <input type="text" id="numeroTarjeta">
            </div>

            <div>
                <label for="nombreCompleto">Nombre Completo</label>
                <input type="text" id="nombreCompleto">
            </div>

            <div>
                <label for="CVV">CVV</label>
                <input type="text" id="CVV">
            </div>

            <div>
                <label for="vencimiento">Vencimiento</label>
                <input type="date" id="vencimiento">
            </div>

            <button id="enviarFormulario" type="submit">Enviar</button>
        </form>
    `;

    let enviarFormulario = document.getElementById("enviarFormulario");
    enviarFormulario.addEventListener("click", (event) => {
        event.preventDefault();
        Swal.fire(registroStorage.nombreUsuario + ' gracias por adquirir los servicios. Su compra fue procesada.')
    });
})








