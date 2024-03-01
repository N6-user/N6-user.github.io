const CORREO = document.getElementById("fm-inscripcion-tf-correo"),
    APELLIDO = document.getElementById("fm-inscripcion-tf-apellido"),
    NOMBRE = document.getElementById("fm-inscripcion-tf-nombre"),
    DNI = document.getElementById("fm-inscripcion-tf-dni"),
    CELULAR = document.getElementById("fm-inscripcion-tf-celular"),
    LAB_PROG_2 = document.getElementById("fm-inscripcion-cb-lab-prog-2"),
    ADM_BASE_DATOS = document.getElementById("fm-inscripcion-cb-adm-base-datos"),
    PROG_WEB_2 = document.getElementById("fm-inscripcion-cb-prog-web-2"),
    MAT_2 = document.getElementById("fm-inscripcion-cb-mat-2"),
    INGLES_TEC_1 = document.getElementById("fm-inscripcion-cb-ingles-tec-1"),
    ING_SOFTWARE = document.getElementById("fm-inscripcion-cb-ing-software"),
    MENSAJE = document.getElementById("inscripcion-mensaje-datos-enviados"),
    MATERIAS = [LAB_PROG_2, ADM_BASE_DATOS, PROG_WEB_2, MAT_2, INGLES_TEC_1, ING_SOFTWARE],
    erroresDatoIncompleto = [],
    erroresDatoEquivocado = [];

function corroborarDatos() {
    erroresDatoIncompleto.length = 0;
    erroresDatoEquivocado.length = 0;
    let correo = CORREO.value.trim(),
        apellido = APELLIDO.value.trim(),
        nombre = NOMBRE.value.trim(),
        dni = DNI.value.trim(),
        celular = CELULAR.value.trim(),
        datosCorrectos = true;

    // revisar correo
    if (correo == "") {
        datosCorrectos = false;
        erroresDatoIncompleto.push(CORREO);
    } else {
        if (!/^[a-z][\w-\.]{2,29}@[a-z][\w]{2,29}(\.[a-z]{2,4}){1,2}$/.test(correo)) {
            datosCorrectos = false;
            erroresDatoEquivocado.push(CORREO)
        }
    }

    // revisar apellido
    if (apellido == "") {
        datosCorrectos = false;
        erroresDatoIncompleto.push(APELLIDO);
    } else {
        if (!/^[a-zA-Z\sñüáéíóúÁÉÍÓÚ]{2,50}$/.test(apellido)) {
            datosCorrectos = false;
            erroresDatoEquivocado.push(APELLIDO);
        }
    }

    // revisar nombre
    if (nombre == "") {
        datosCorrectos = false;
        erroresDatoIncompleto.push(NOMBRE);
    } else {
        if (!/^[a-zA-Z\s]{2,50}$/.test(nombre)) {
            datosCorrectos = false;
            erroresDatoEquivocado.push(NOMBRE);
        }
    }

    // revisar dni
    if (dni == "") {
        datosCorrectos = false;
        erroresDatoIncompleto.push(DNI);
    } else {
        if (!/^[1-9][0-9]{7}$/.test(dni)) {
            datosCorrectos = false;
            erroresDatoEquivocado.push(DNI);
        }
    }

    // revisar celular
    if (celular == "") {
        datosCorrectos = false;
        erroresDatoIncompleto.push(CELULAR);
    } else {
        if (!/^[1-9][0-9]{7,19}$/.test(celular)) {
            datosCorrectos = false;
            erroresDatoEquivocado.push(CELULAR);
        }
    }

    // revisar materias
    if (!LAB_PROG_2.checked && !ADM_BASE_DATOS.checked && !PROG_WEB_2.checked && !INGLES_TEC_1.checked && !ING_SOFTWARE.checked && !MAT_2.checked) {
        datosCorrectos = false;
        erroresDatoEquivocado.push(MATERIAS);
    }

    if (datosCorrectos) {
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
    }

    actualizarMensajesError();
}

function actualizarMensajesError() {
    const MEN_ERROR_CORREO = document.getElementById("fm-inscripcion-tf-correo-error"),
        MEN_ERROR_APELLIDO = document.getElementById("fm-inscripcion-tf-apellido-error"),
        MEN_ERROR_NOMBRE = document.getElementById("fm-inscripcion-tf-nombre-error"),
        MEN_ERROR_DNI = document.getElementById("fm-inscripcion-tf-dni-error"),
        MEN_ERROR_CELULAR = document.getElementById("fm-inscripcion-tf-celular-error"),
        MEN_ERROR_MATERIAS = document.getElementById("fm-inscripcion-cb-materias-error");

    // limpiar mensajes anteriores si los hubiera
    MEN_ERROR_CORREO.innerHTML = "";
    MEN_ERROR_APELLIDO.innerHTML = "";
    MEN_ERROR_NOMBRE.innerHTML = "";
    MEN_ERROR_DNI.innerHTML = "";
    MEN_ERROR_CELULAR.innerHTML = "";
    MEN_ERROR_MATERIAS.innerHTML = "";

    // colocar mensajes de ser necesario 
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



