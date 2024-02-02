const IDIOMAS_PREFERIDOS = ["es-MX", "es-US", "es-ES", "es_US", "es_ES"];

// Esperar a que el que DOM cargue
document.addEventListener("DOMContentLoaded", () => {
    //const $voces = document.querySelector("#voces"),
    $botoniniciar = document.querySelector("#btnEscuchar"),
        $botoncancelar = document.querySelector("#btnPausarleer"),
        $mensaje = document.querySelector("#mensaje");
    let posibleIndice = 0,
        vocesDisponibles = [];
    let synth = window.speechSynthesis; // abbreviation

    // Función que pone las voces dentro del select
    const cargarVoces = () => {
        if (vocesDisponibles.length > 0) {
            //console.log("No se cargan las voces porque ya existen: ", vocesDisponibles);
            return;
        }
        vocesDisponibles = speechSynthesis.getVoices();
        //console.log({ vocesDisponibles })
        posibleIndice = vocesDisponibles.findIndex(voz => IDIOMAS_PREFERIDOS.includes(voz.lang));
        if (posibleIndice === -1) posibleIndice = 0;
        vocesDisponibles.forEach((voz, indice) => {
            const opcion = document.createElement("option");
            opcion.value = indice;
            opcion.innerHTML = voz.name;
            opcion.selected = indice === posibleIndice;
            //$voces.appendChild(opcion);
        });
    };

    // Si no existe la API, lo indicamos
    if (!'speechSynthesis' in window) return alert("Lo siento, tu navegador no soporta esta tecnología");

    // No preguntes por qué pongo esto que se ejecuta dos veces
    // en determinados casos, solo así funciona en algunos casos
    cargarVoces();
    // Si hay evento, entonces lo esperamos
    if ('onvoiceschanged' in speechSynthesis) {
        speechSynthesis.onvoiceschanged = function () {
            cargarVoces();
        };
    }

    // El click del botón. Aquí sucede la magia
    $botoniniciar.addEventListener("click", () => {
        let textoAEscuchar = $mensaje.textContent;
        //if (!textoAEscuchar) return alert("Escribe el texto");
        let mensaje = new SpeechSynthesisUtterance();
        //mensaje.voice = vocesDisponibles[$voces.value];
        mensaje.volume = 1;
        mensaje.rate = 1;
        mensaje.text = textoAEscuchar;
        mensaje.pitch = 1;
        // ¡Parla!
        speechSynthesis.speak(mensaje);
    });

    $botoncancelar.addEventListener("click", () => {
        speechSynthesis.cancel(mensaje);
    });
});



const IDIOMAS_PREFERIDOS2 = ["es-MX", "es-US", "es-ES", "es_US", "es_ES"];

// Esperar a que el que DOM cargue
document.addEventListener("DOMContentLoaded", () => {
    //const $voces = document.querySelector("#voces"),
    $botoniniciar2 = document.querySelector("#btnEscuchar2"),
        $botoncancelar2 = document.querySelector("#btnPausarleer2"),
        $mensaje2 = document.querySelector("#mensaje2");
    let posibleIndice2 = 0,
        vocesDisponibles2 = [];
    let synth2 = window.speechSynthesis; // abbreviation

    // Función que pone las voces dentro del select
    const cargarVoces2 = () => {
        if (vocesDisponibles2.length > 0) {
            //console.log("No se cargan las voces porque ya existen: ", vocesDisponibles2);
            return;
        }
        vocesDisponibles2 = speechSynthesis.getVoices();
        //console.log({ vocesDisponibles2 })
        posibleIndice2 = vocesDisponibles2.findIndex(voz => IDIOMAS_PREFERIDOS2.includes(voz.lang));
        if (posibleIndice2 === -1) posibleIndice2 = 0;
        vocesDisponibles2.forEach((voz, indice) => {
            const opcion = document.createElement("option");
            opcion.value = indice;
            opcion.innerHTML = voz.name;
            opcion.selected = indice === posibleIndice2;
            //$voces.appendChild(opcion);
        });
    };

    // Si no existe la API, lo indicamos
    if (!'speechSynthesis' in window) return alert("Lo siento, tu navegador no soporta esta tecnología");

    // No preguntes por qué pongo esto que se ejecuta dos veces
    // en determinados casos, solo así funciona en algunos casos
    cargarVoces2();
    // Si hay evento, entonces lo esperamos
    if ('onvoiceschanged' in speechSynthesis) {
        speechSynthesis.onvoiceschanged = function () {
            cargarVoces2();
        };
    }

    // El click del botón. Aquí sucede la magia
    // $botoniniciar2.addEventListener("click", () => {
    //     let textoAEscuchar = $mensaje2.textContent;
    //     //if (!textoAEscuchar) return alert("Escribe el texto");
    //     let mensaje = new SpeechSynthesisUtterance();
    //     //mensaje.voice = vocesDisponibles2[$voces.value];
    //     mensaje.volume = 1;
    //     mensaje.rate = 1;
    //     mensaje.text = textoAEscuchar;
    //     mensaje.pitch = 1;
    //     // ¡Parla!
    //     speechSynthesis.speak(mensaje);
    // });

    // $botoncancelar2.addEventListener("click", () => {
    //     speechSynthesis.cancel(mensaje);
    // });
});



$(document).ready(function () {
    $("#btnact1help , #btnact2help , #btnact3help , #btnact4help ,  #btnact5help ,  #btnact6help").val('Mostrar instrucciones');
    $('.act1help, .act2help , .act3help , .act4help, .act5help, .act6help').hide();
});


function helpers() {
    var boton1 = $("#btnact1help").val();

    if (boton1 == "Mostrar instrucciones") {
        $('.act1help').removeClass('binmocultarhelp');
        $('.act1help').show().addClass('binmostrarhelp');
        $("#btnact1help").val('Ocultar instrucciones');
    } else if (boton1 == "Ocultar instrucciones") {
        $('.act1help').addClass('binmocultarhelp');
        setTimeout(function () {
            $('.act1help').hide();
            $('.act1help').removeClass('binmocultarhelp');
        }, 1100);
        $("#btnact1help").val('Mostrar instrucciones');
    }
}

function helpers2() {
    var boton2 = $("#btnact2help").val();

    if (boton2 == "Mostrar instrucciones") {
        $('.act2help').removeClass('binmocultarhelp');
        $('.act2help').show().addClass('binmostrarhelp');
        $("#btnact2help").val('Ocultar instrucciones');
    } else if (boton2 == "Ocultar instrucciones") {
        $('.act2help').addClass('binmocultarhelp');
        setTimeout(function () {
            $('.act2help').hide();
            $('.act2help').removeClass('binmocultarhelp');
        }, 1100);
        $("#btnact2help").val('Mostrar instrucciones');
    }
}

function helpers3() {
    var boton3 = $("#btnact3help").val();

    if (boton3 == "Mostrar instrucciones") {
        $('.act3help').removeClass('binmocultarhelp');
        $('.act3help').show().addClass('binmostrarhelp');
        $("#btnact3help").val('Ocultar instrucciones');
    } else if (boton3 == "Ocultar instrucciones") {
        $('.act3help').addClass('binmocultarhelp');
        setTimeout(function () {
            $('.act3help').hide();
            $('.act3help').removeClass('binmocultarhelp');
        }, 1100);
        $("#btnact3help").val('Mostrar instrucciones');
    }
}

function helpers4() {
    var boton4 = $("#btnact4help").val();

    if (boton4 == "Mostrar instrucciones") {
        $('.act4help').removeClass('binmocultarhelp');
        $('.act4help').show().addClass('binmostrarhelp');
        $("#btnact4help").val('Ocultar instrucciones');
    } else if (boton4 == "Ocultar instrucciones") {
        $('.act4help').addClass('binmocultarhelp');
        setTimeout(function () {
            $('.act4help').hide();
            $('.act4help').removeClass('binmocultarhelp');
        }, 1100);
        $("#btnact4help").val('Mostrar instrucciones');
    }
}

function helpers5() {
    var boton5 = $("#btnact5help").val();

    if (boton5 == "Mostrar instrucciones") {
        $('.act5help').removeClass('binmocultarhelp');
        $('.act5help').show().addClass('binmostrarhelp');
        $("#btnact5help").val('Ocultar instrucciones');
    } else if (boton5 == "Ocultar instrucciones") {
        $('.act5help').addClass('binmocultarhelp');
        setTimeout(function () {
            $('.act5help').hide();
            $('.act5help').removeClass('binmocultarhelp');
        }, 1100);
        $("#btnact5help").val('Mostrar instrucciones');
    }
}

function helpers6() {
    var boton6 = $("#btnact6help").val();

    if (boton6 == "Mostrar instrucciones") {
        $('.act6help').removeClass('binmocultarhelp');
        $('.act6help').show().addClass('binmostrarhelp');
        $("#btnact6help").val('Ocultar instrucciones');
    } else if (boton6 == "Ocultar instrucciones") {
        $('.act6help').addClass('binmocultarhelp');
        setTimeout(function () {
            $('.act6help').hide();
            $('.act6help').removeClass('binmocultarhelp');
        }, 1100);
        $("#btnact6help").val('Mostrar instrucciones');
    }
}