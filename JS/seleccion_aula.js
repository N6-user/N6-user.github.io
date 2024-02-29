class Materia {
    constructor(nombre, link, img) {
        this.nombre = nombre;
        this.link = link;
        this.img = img;
    }
}

const LABOTARORIO_PROGRAMACION_1 = new Materia("TUDS - 2023: Lab. de programación 1 - C2", "lab_prog_1_seccion_principal.html", "Imágenes/lab_programacion_1.png");
const PROGRAMACION_WEB_1 = new Materia("TUDS - 2023: Programación Web 1 - C2", "prog_web_1_seccion_principal.html", "Imágenes/programacion_web_1.png");
const MATEMATICA_1 = new Materia("TUDS - 2023: Matemática 1 - C2", "mat_1_seccion_principal.html", "Imágenes/matemática_1.png");
const EDA = new Materia("TUDS - 2023: Estructura de datos y algoritmos - C2", "eda_seccion_principal.html", "Imágenes/estructura_datos_algoritmos.png");
const MATERIAS = [LABOTARORIO_PROGRAMACION_1, PROGRAMACION_WEB_1, MATEMATICA_1, EDA];
const ANCLA_MATERIA = document.getElementById("link-materia");
const IMG_MATERIA = document.getElementById("img-materia");
const NOMBRE_MATERIA = document.getElementById("nombre-materia");
let materiaActual = 0;

function anteriorMateria() {
    materiaActual = (materiaActual-- + MATERIAS.length - 1) % MATERIAS.length;
    const MATERIA_MOSTRADA = MATERIAS[materiaActual];

    ANCLA_MATERIA.href = MATERIA_MOSTRADA.link;
    IMG_MATERIA.src = MATERIA_MOSTRADA.img;
    IMG_MATERIA.alt = MATERIA_MOSTRADA.nombre;
    NOMBRE_MATERIA.innerHTML = MATERIA_MOSTRADA.nombre;
}

function posteriorMateria() {
    materiaActual = (materiaActual++ + 1) % MATERIAS.length;
    const MATERIA_MOSTRADA = MATERIAS[materiaActual];

    ANCLA_MATERIA.href = MATERIA_MOSTRADA.link;
    IMG_MATERIA.src = MATERIA_MOSTRADA.img;
    IMG_MATERIA.alt = MATERIA_MOSTRADA.nombre;
    NOMBRE_MATERIA.innerHTML = MATERIA_MOSTRADA.nombre;
}
