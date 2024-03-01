const USUARIO = document.getElementById("tf-usuario");
const CONTRASEÑA = document.getElementById("pf-contraseña");
const todosLosDatos = [USUARIO, CONTRASEÑA], erroresDatoIncompleto = [], erroresDatoEquivocado = [];

function corroborarDatos() {
    erroresDatoIncompleto.length = 0;
    erroresDatoEquivocado.length = 0;
    let usuario = (USUARIO.value + "").trim();  // existe otra manera?
    let contraseña = CONTRASEÑA.value;
    let datosCorrectos = true;

    // revisar usuario    
    if (usuario == "") {
        datosCorrectos = false;
        erroresDatoIncompleto.push(USUARIO);
    } else {
        if (usuario != "usuario") {
            datosCorrectos = false;
            erroresDatoEquivocado.push(USUARIO)
        }
    }

    // revisar contraseña
    if (contraseña == "") {
        datosCorrectos = false;
        erroresDatoIncompleto.push(CONTRASEÑA);
    } else {
        if (contraseña != "contraseña") {
            datosCorrectos = false;
            erroresDatoEquivocado.push(CONTRASEÑA);
        }
    }

    if (datosCorrectos) {
        window.location.replace("aulas.html");
    } else {
        mostrarErrores();
    }
}

function mostrarErrores() {
    const MENSAJE = document.getElementById("mensaje-form-usuario-contraseña");
    // limpiar advertencia anterior si la hubiera
    MENSAJE.innerHTML = "";

    // colocar advertencia de ser necesario - usuario
    if (erroresDatoIncompleto.length > 0) {
        MENSAJE.innerHTML = "Debe completar ambos campos.";
        return;
    }

    // colocar advertencia de ser necesario - contraseña
    if (erroresDatoEquivocado.length > 0) {
        MENSAJE.innerHTML = "Usuario y/o contraseña incorrectos. Por favor, vuelta a intentarlo.";
    }
}



