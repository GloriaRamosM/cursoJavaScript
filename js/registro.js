let botonRegistro = document.getElementById("botonRegisto");
botonRegistro.addEventListener("click", (event) => {
    event.preventDefault();

    let nombreUsuario = document.getElementById("nombreUsuario").value;
    let email = document.getElementById("email").value;
    let contrasena = document.getElementById("contrasena").value;

    let formularioUsuario = {
        nombreUsuario: nombreUsuario,
        email: email,
        contrasena: contrasena
    }

    localStorage.setItem("registro", JSON.stringify(formularioUsuario));

    Swal.fire("Hola "  + nombreUsuario + ", bienvenide al lugar donde acompanamos a los pacientes y familiares de personas con TLP.")
    .then(() => {
        window.location = "./test.html";
    });
});
