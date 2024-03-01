const USUARIO = document.getElementById("tf-usuario");
const CONTRASEÑA = document.getElementById("pf-contraseña");
const todosLosDatos = [USUARIO, CONTRASEÑA];
const erroresDatoIncompleto = [];
const erroresDatoEquivocado = [];

/**
 * Validar los datos ingresados y cambiar de página si corresponde
 */
function corroborarDatos() {
    erroresDatoIncompleto.length = 0;
    erroresDatoEquivocado.length = 0;
    let usuario = USUARIO.value.trim();
    let contraseña = CONTRASEÑA.value;
    let datosCorrectos = true;

    // Revisar usuario    
    if (usuario == "") {
        datosCorrectos = false;
        erroresDatoIncompleto.push(USUARIO);
    } else {
        if (usuario != "usuario") {
            datosCorrectos = false;
            erroresDatoEquivocado.push(USUARIO)
        }
    }

    // Revisar contraseña
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
        // Reemplazar la página de acceso a cuenta por la página que muestra las aulas, sin posibilitar el retroceso mediante navegador
        window.location.replace("aulas.html");
    } else {
        mostrarErrores();
    }
}

function mostrarErrores() {
    const MENSAJE = document.getElementById("mensaje-form-usuario-contraseña");
    // Limpiar advertencia anterior si la hubiera
    MENSAJE.innerHTML = "";

    // Colocar advertencia de ser necesario 
    if (erroresDatoIncompleto.length > 0) {
        MENSAJE.innerHTML = "Debe completar ambos campos.";
        return;
    }
    if (erroresDatoEquivocado.length > 0) {
        MENSAJE.innerHTML = "Usuario y/o contraseña incorrectos. Por favor, vuelta a intentarlo.";
    }
}



