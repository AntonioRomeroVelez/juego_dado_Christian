var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

/*================= Crucigrama ==================*/
//
// Agregal las palabras que se evaluaán en el crucigrama en la siguiete variable anteponiendo el número de palabra
//
// Ej. var palabras = ['1hola', '2adios', '3casa', '4perro', '5gato'];
//
/*===============================================*/
var palabras = ['1subasta', '2perturbación', '3sábado', '4sibarita', '5turbante', '6soborno'];

/*=========== Calificar crucigrama =============*/
// 
// Agregar funcion a la pregunta que se desea calificar
/* var respuestas = document.getElementsByClassName("respuestas1");
    var soluciones = document.getElementsByClassName("solucion1");
    var valor = valor_pregunta(respuestas);
    var nota = 0;
    for (var i = 0; i < respuestas.length; i++) {
        if (
            verificar_contenido(
                respuestas[i].value.toLowerCase(),
                soluciones[i].value.toLowerCase().split("*")
            )
        ) {
            respuestas[i].classList.add("bien");
            respuestas[i].classList.remove("mal");
            nota += valor;
        } else {
            respuestas[i].classList.add("mal");
            respuestas[i].classList.remove("bien");
        }
    }
    tpre4 = ((nota / 10) * 2);
    $("#pre2a").val(parseFloat(tpre4).toFixed(2)); */
//
/*===============================================*/
function pregunta2() {
    var respuestas = document.getElementsByClassName("respuestas1");
    var soluciones = document.getElementsByClassName("solucion1");
    var valor = valor_pregunta(respuestas);
    var nota = 0;
    for (var i = 0; i < respuestas.length; i++) {
        if (
            verificar_contenido(
                respuestas[i].value.toLowerCase(),
                soluciones[i].value.toLowerCase().split("*")
            )
        ) {
            respuestas[i].classList.add("bien");
            respuestas[i].classList.remove("mal");
            nota += valor;
        } else {
            respuestas[i].classList.add("mal");
            respuestas[i].classList.remove("bien");
        }
    }
    tpre4 = ((nota / 10) * 2);
    $("#pre2a").val(parseFloat(tpre4).toFixed(2));
}

function total() {
    pregunta2();
    var pre2a = document.getElementById("pre2a").value;
    cor = parseFloat(pre2a);
    Calculo_nota();
    EndActivity();
}

