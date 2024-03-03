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
        if (!/^[a-zA-Z\sñüáéíóúÁÉÍÓÚ]{2,50}$/.test(nombre)) {
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
        // Remover el formulario y el mensaje que lo acompaña
        document.getElementById("form-inscripcion").remove();
        document.getElementById("inscripcion-mensaje-datos-enviados").remove();

        // Crear nuevos elementos con los que mostrar la información enviada
        const RESPUESTA = document.createElement("div");
        const RES_TITULO = document.createElement("h3");
        const TEXT_RES_TITULO = document.createTextNode("Gracias por completar el formulario, " + NOMBRE.value + ". Esta es la información que se envió:");
        const CONTENEDOR_INFO_ENVIADA = document.createElement("div");
        const INFO_NOMBRE = document.createElement("p");
        const TEXT_INFO_NOMBRE = document.createTextNode("Nombre: " + NOMBRE.value);
        const INFO_APELLIDO = document.createElement("p");
        const TEXT_INFO_APELLIDO = document.createTextNode("Apellido: " + APELLIDO.value);
        const INFO_CORREO = document.createElement("p");
        const TEXT_INFO_CORREO = document.createTextNode("Correo: " + CORREO.value);
        const INFO_DNI = document.createElement("p");
        const TEXT_INFO_DNI = document.createTextNode("DNI: " + DNI.value);
        const INFO_CELULAR = document.createElement("p");
        const TEXT_INFO_CELULAR = document.createTextNode("Celular: " + CELULAR.value);
        const INFO_MATERIAS = document.createElement("p");
        const LISTA_MATERIAS_SOLICITADAS = document.createElement("ul");
        const TEXT_LISTA_MATERIAS_SOLICITADAS = document.createTextNode("Materias a las solicitó la inscripción:")
        for (const MAT of MATERIAS) {
            if (MAT.checked) {
                const LI = document.createElement("li");
                const TEXT_LI = document.createTextNode(MAT.value);
                LI.appendChild(TEXT_LI);
                LISTA_MATERIAS_SOLICITADAS.appendChild(LI);
            }
        }

        const CONTENEDOR_INSCRIPCION = document.getElementById("contenedor-inscripcion");

        // Dar estilo a los elmentos recién creados
        RESPUESTA.style.display = "flex";
        RESPUESTA.style.flexDirection = "column";
        RESPUESTA.style.alignItems = "center"
        CONTENEDOR_INFO_ENVIADA.style.textIndent = "15px";
        CONTENEDOR_INFO_ENVIADA.style.border = "2px solid black";
        CONTENEDOR_INFO_ENVIADA.style.borderRadius = "10px";
        CONTENEDOR_INFO_ENVIADA.style.width = "70%";

        // Agregar estos elementos al documento
        RES_TITULO.appendChild(TEXT_RES_TITULO);
        INFO_NOMBRE.appendChild(TEXT_INFO_NOMBRE);
        INFO_APELLIDO.appendChild(TEXT_INFO_APELLIDO);
        INFO_CORREO.appendChild(TEXT_INFO_CORREO);
        INFO_DNI.appendChild(TEXT_INFO_DNI);
        INFO_CELULAR.appendChild(TEXT_INFO_CELULAR);
        INFO_MATERIAS.appendChild(TEXT_LISTA_MATERIAS_SOLICITADAS)
        INFO_MATERIAS.appendChild(LISTA_MATERIAS_SOLICITADAS);
        CONTENEDOR_INFO_ENVIADA.appendChild(INFO_NOMBRE);
        CONTENEDOR_INFO_ENVIADA.appendChild(INFO_APELLIDO);
        CONTENEDOR_INFO_ENVIADA.appendChild(INFO_CORREO);
        CONTENEDOR_INFO_ENVIADA.appendChild(INFO_DNI);
        CONTENEDOR_INFO_ENVIADA.appendChild(INFO_CELULAR);
        CONTENEDOR_INFO_ENVIADA.appendChild(INFO_MATERIAS);
        RESPUESTA.appendChild(RES_TITULO);
        RESPUESTA.appendChild(CONTENEDOR_INFO_ENVIADA);
        CONTENEDOR_INSCRIPCION.appendChild(RESPUESTA);
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



