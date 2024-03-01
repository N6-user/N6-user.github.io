// Tener a disposición facilmente los elementos que componen el formulario
const CORREO = document.getElementById("fm-inscripcion-tf-correo");
const APELLIDO = document.getElementById("fm-inscripcion-tf-apellido");
const NOMBRE = document.getElementById("fm-inscripcion-tf-nombre");
const DNI = document.getElementById("fm-inscripcion-tf-dni");
const CELULAR = document.getElementById("fm-inscripcion-tf-celular");
const LAB_PROG_2 = document.getElementById("fm-inscripcion-cb-lab-prog-2");
const ADM_BASE_DATOS = document.getElementById("fm-inscripcion-cb-adm-base-datos");
const PROG_WEB_2 = document.getElementById("fm-inscripcion-cb-prog-web-2");
const MAT_2 = document.getElementById("fm-inscripcion-cb-mat-2");
const INGLES_TEC_1 = document.getElementById("fm-inscripcion-cb-ingles-tec-1");
const ING_SOFTWARE = document.getElementById("fm-inscripcion-cb-ing-software");
const MENSAJE = document.getElementById("inscripcion-mensaje-datos-enviados");
const MATERIAS = [LAB_PROG_2, ADM_BASE_DATOS, PROG_WEB_2, MAT_2, INGLES_TEC_1, ING_SOFTWARE];
// Identificar aquellos elementos que no tengan una entrada válida
const erroresDatoIncompleto = [];
const erroresDatoEquivocado = [];

/**
 *  Valida datos ingresados en el formulario y actualiza la página con la respuesta pertinente
 */
function corroborarDatos() {
    // Quitar elementos anteriores en los arreglos, si los hubiera
    erroresDatoIncompleto.length = 0;
    erroresDatoEquivocado.length = 0;

    // Obtener datos ingresados en los campos de texto
    let correo = CORREO.value.trim();
    let apellido = APELLIDO.value.trim();
    let nombre = NOMBRE.value.trim();
    let dni = DNI.value.trim();
    let celular = CELULAR.value.trim();
    let datosCorrectos = true;

    // Revisar correo
    if (correo == "") {
        datosCorrectos = false;
        erroresDatoIncompleto.push(CORREO);
    } else {
        if (!/^[a-z][\w-\.]{2,29}@[a-z][\w]{2,29}(\.[a-z]{2,4}){1,2}$/.test(correo)) {
            datosCorrectos = false;
            erroresDatoEquivocado.push(CORREO)
        }
    }

    // Revisar apellido
    if (apellido == "") {
        datosCorrectos = false;
        erroresDatoIncompleto.push(APELLIDO);
    } else {
        if (!/^[a-zA-Z\sñüáéíóúÁÉÍÓÚ]{2,50}$/.test(apellido)) {
            datosCorrectos = false;
            erroresDatoEquivocado.push(APELLIDO);
        }
    }

    // Revisar nombre
    if (nombre == "") {
        datosCorrectos = false;
        erroresDatoIncompleto.push(NOMBRE);
    } else {
        if (!/^[a-zA-Z\s]{2,50}$/.test(nombre)) {
            datosCorrectos = false;
            erroresDatoEquivocado.push(NOMBRE);
        }
    }

    // Revisar dni
    if (dni == "") {
        datosCorrectos = false;
        erroresDatoIncompleto.push(DNI);
    } else {
        if (!/^[1-9][0-9]{7}$/.test(dni)) {
            datosCorrectos = false;
            erroresDatoEquivocado.push(DNI);
        }
    }

    // Revisar celular
    if (celular == "") {
        datosCorrectos = false;
        erroresDatoIncompleto.push(CELULAR);
    } else {
        if (!/^[1-9][0-9]{7,19}$/.test(celular)) {
            datosCorrectos = false;
            erroresDatoEquivocado.push(CELULAR);
        }
    }

    // Revisar materias
    if (!LAB_PROG_2.checked && !ADM_BASE_DATOS.checked && !PROG_WEB_2.checked && !INGLES_TEC_1.checked && !ING_SOFTWARE.checked && !MAT_2.checked) {
        datosCorrectos = false;
        erroresDatoEquivocado.push(MATERIAS);
    }

    if (datosCorrectos) {
        // Inhabilitar los componentes del formulario
        document.getElementById("fm-inscripcion-bt-envio").setAttribute("disabled", "true");
        CORREO.setAttribute("disabled", "true");
        APELLIDO.setAttribute("disabled", "true");
        NOMBRE.setAttribute("disabled", "true");
        DNI.setAttribute("disabled", "true");
        CELULAR.setAttribute("disabled", "true");
        for (let materia of MATERIAS) {
            materia.setAttribute("disabled", "true");
        }

        MENSAJE.innerHTML = "Los datos han sido enviados correctamente. Espere nuestra respuesta.";
    } else {
        MENSAJE.innerHTML = "Uno o más datos incorrectos. Por favor, reviselo y vuelva a enviar.";
    }

    // Actualizar mensajes de error en la página, si los hubiera
    actualizarMensajesError();
}

/**
 *  Actualizar los mensajes de error en la página
 */
function actualizarMensajesError() {
    const MEN_ERROR_CORREO = document.getElementById("fm-inscripcion-tf-correo-error"),
        MEN_ERROR_APELLIDO = document.getElementById("fm-inscripcion-tf-apellido-error"),
        MEN_ERROR_NOMBRE = document.getElementById("fm-inscripcion-tf-nombre-error"),
        MEN_ERROR_DNI = document.getElementById("fm-inscripcion-tf-dni-error"),
        MEN_ERROR_CELULAR = document.getElementById("fm-inscripcion-tf-celular-error"),
        MEN_ERROR_MATERIAS = document.getElementById("fm-inscripcion-cb-materias-error");

    // Limpiar mensajes anteriores si los hubiera
    MEN_ERROR_CORREO.innerHTML = "";
    MEN_ERROR_APELLIDO.innerHTML = "";
    MEN_ERROR_NOMBRE.innerHTML = "";
    MEN_ERROR_DNI.innerHTML = "";
    MEN_ERROR_CELULAR.innerHTML = "";
    MEN_ERROR_MATERIAS.innerHTML = "";

    // Colocar mensajes de ser necesario 
    if (erroresDatoIncompleto.length > 0) {
        if (erroresDatoIncompleto.includes(CORREO)) {
            MEN_ERROR_CORREO.innerHTML = "Debe ingresar su correo.";
        }
        if (erroresDatoIncompleto.includes(APELLIDO)) {
            MEN_ERROR_APELLIDO.innerHTML = "Debe ingresar su apellido.";
        }

        if (erroresDatoIncompleto.includes(NOMBRE)) {
            MEN_ERROR_NOMBRE.innerHTML = "Debe ingresar su nombre.";
        }

        if (erroresDatoIncompleto.includes(DNI)) {
            MEN_ERROR_DNI.innerHTML = "Debe ingresar su dni.";
        }

        if (erroresDatoIncompleto.includes(CELULAR)) {
            MEN_ERROR_CELULAR.innerHTML = "Debe ingresar su nro de celular.";
        }
    }

    if (erroresDatoEquivocado.length > 0) {
        if (erroresDatoEquivocado.includes(CORREO)) {
            MEN_ERROR_CORREO.innerHTML = "Debe ingresar una dirección de correo válida.";
        }

        if (erroresDatoEquivocado.includes(APELLIDO)) {
            MEN_ERROR_APELLIDO.innerHTML = "Apellido/s inválido/s. No se admiten más de 50 caracteres.";
        }

        if (erroresDatoEquivocado.includes(NOMBRE)) {
            MEN_ERROR_NOMBRE.innerHTML = "Nombre/s inválido/s. No se admiten más de 50 caracteres.";
        }

        if (erroresDatoEquivocado.includes(DNI)) {
            MEN_ERROR_DNI.innerHTML = "Debe ingresar un dni válido.";
        }

        if (erroresDatoEquivocado.includes(CELULAR)) {
            MEN_ERROR_CELULAR.innerHTML = "Debe ingresar un nro de celular válido.";
        }

        if (erroresDatoEquivocado.includes(MATERIAS)) {
            MEN_ERROR_MATERIAS.innerHTML = "Debe elegir al menos una materia a la cual inscribirse.";
        }
    }
}



