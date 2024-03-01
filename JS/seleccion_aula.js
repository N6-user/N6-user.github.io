class Materia {
    constructor(nombre, link, img) {
        this.nombre = nombre;
        this.link = link;
        this.img = img;
    }
}

// Tener a disposición facilmente los recursos vinculados a cada materia
const LABOTARORIO_PROGRAMACION_1 = new Materia("TUDS-23 - Lab. de Programación 1 - C2", "lab_prog_1_seccion_principal.html", "Imágenes/lab_programacion_1.png");
const PROGRAMACION_WEB_1 = new Materia("TUDS-23 - Programación Web 1 - C2", "prog_web_1_seccion_principal.html", "Imágenes/programacion_web_1.png");
const MATEMATICA_1 = new Materia("TUDS-23 - Matemática 1 - C2", "mat_1_seccion_principal.html", "Imágenes/matemática_1.png");
const EDA = new Materia("TUDS-23 Estructura de Datos y Algoritmos - C2", "eda_seccion_principal.html", "Imágenes/estructura_datos_algoritmos.png");

const MATERIAS = [LABOTARORIO_PROGRAMACION_1, PROGRAMACION_WEB_1, MATEMATICA_1, EDA];
const LONGITUD_MATERIAS = MATERIAS.length;
// Tener a disposición facilmente los elementos que deben mostrar los recursos de la materia seleccionada
const ANCLA_MATERIA = document.getElementById("link-materia");
const IMG_MATERIA = document.getElementById("img-materia");
const NOMBRE_MATERIA = document.getElementById("nombre-materia");
// Indicar el índice de la materia seleccionada
let materiaActual = 0;

/**
 * Mostrar la materia posterior a la mostrada actualmente en el carrousel
 */
function anteriorMateria() {
    // Calcular la materia anterior a la actual y actualizar
    materiaActual = (materiaActual + LONGITUD_MATERIAS - 1) % LONGITUD_MATERIAS;

    const MATERIA_MOSTRADA = MATERIAS[materiaActual];
    // Mostrar los recursos vinculados a la nueva materia mostrada
    ANCLA_MATERIA.href = MATERIA_MOSTRADA.link;
    IMG_MATERIA.src = MATERIA_MOSTRADA.img;
    IMG_MATERIA.alt = MATERIA_MOSTRADA.nombre;
    NOMBRE_MATERIA.innerHTML = MATERIA_MOSTRADA.nombre;
}

/**
 * Mostrar la materia anterior a la mostrada actualmente en el carrousel
 */
function posteriorMateria() {
    // Calcular la materia posterior a la actual y actualizar
    materiaActual = (materiaActual + 1) % LONGITUD_MATERIAS;

    const MATERIA_MOSTRADA = MATERIAS[materiaActual];
    // Mostrar los recursos vinculados a la nueva materia mostrada
    ANCLA_MATERIA.href = MATERIA_MOSTRADA.link;
    IMG_MATERIA.src = MATERIA_MOSTRADA.img;
    IMG_MATERIA.alt = MATERIA_MOSTRADA.nombre;
    NOMBRE_MATERIA.innerHTML = MATERIA_MOSTRADA.nombre;
}
