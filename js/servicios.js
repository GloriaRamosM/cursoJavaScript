
let registroStorage = JSON.parse(localStorage.getItem("registro"));

if (!registroStorage || !registroStorage.email) {
    window.location = "./registro.html"
}


// ARRAY Y UN OBJETO DENTRO DEL ARRAY, DONDE TENGO PLASMADOS LOS SERVICIOS QUE OFRECE EL SITIO



const renderPagina = (servicios) => {

    let carrito = [];


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
            let { nombre, precio } = item;
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
    
    
            let numeroTarjeta = document.getElementById("numeroTarjeta").value;
            let nombreCompleto = document.getElementById("nombreCompleto").value;
            let CVV = document.getElementById("CVV").value;
            let vencimiento = document.getElementById("vencimiento").value;
    
    
    
            if (!numeroTarjeta) {
                Swal.fire("Debes ingresar tu numero de tarjeta para continuar")
                return
            }
            if (!nombreCompleto) {
                Swal.fire("Debes ingresar tu nombre completo para continuar")
                return
            }
            if (!CVV) {
                Swal.fire("Debes ingresar el CVV de tu tarjeta para continuar")
                return
            }
            if (!vencimiento) {
                Swal.fire("Debes ingresar la fecha de vencimiento de tu tarjeta para continuar")
                return
            }
            Swal.fire(registroStorage.nombreUsuario + ' gracias por adquirir los servicios. Su compra fue procesada.')
    
    
        });
    
    
    
    });
    

}

const traerDatos = async () => {
    const response = await fetch("../js/serviciosdata.json");
    const data = await response.json();

    renderPagina(data)
}

traerDatos();