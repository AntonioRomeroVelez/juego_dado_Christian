

///// validar Inputs se debe pásar el numero de la actividad
function validarInputs(actividad) {
  var respuestas = document.getElementsByClassName(`respuestas${actividad}`);
  var soluciones = document.getElementsByClassName(`solucion${actividad}`);
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
  return nota; // retorna 10 si todo esta bien 
}





/* ====== Validar palabras exactas ====== */

//let core = validarExactas(["c", "o", "n", "t", "o", "l", "p", "r", "e", "c", "i", "s", "o"], "#p1var");
function validarExactas(respuestas, id) {
  let core = 0;
  for (let i = 0; i < respuestas.length; i++) {
    if ($(`${id}${i}`).val() === "") {
      $(`${id}${i}`).addClass("mal");
    } else {
      var val = $(`${id}${i}`).val().toLowerCase();
      if (sinespacios(val) === sinespacios(respuestas[i].toLowerCase())) {
        core++;

        $(`${id}${i}`).addClass("bien");
      } else {
        $(`${id}${i}`).addClass("mal");
      }
    }
  }
  nota = core / respuestas.length;
  return nota;
}



//// funcion para ingresar imagenes que tenga un input para texto excacto

// var p4act = [
//   { img: 'img/i1_p63_act4.png', respuesta: 'planicie' },
//   { img: 'img/i2_p63_act4.png', respuesta: 'espacio' },
//   { img: 'img/i3_p63_act4.png', respuesta: 'palacio' },
//   { img: 'img/i4_p63_act4.png', respuesta: 'infancia' },
//   { img: 'img/i5_p63_act4.png', respuesta: 'aprecia' },
//   { img: 'img/i6_p63_act4.png', respuesta: 'calvicie' }
// ];
// ImagenesInputs(p4act, "#p4act",4);
function ImagenesInputs(array, selector, actividad) {
  array.sort(f_randomico);
  array.forEach(element => {
    let valor = `<div style="display:inline-table;margin:10px"><img src="${element.img}" alt="" style="display:block"><input class="caracter15 respuestas${actividad}"><input type="hidden" class="solucion${actividad}" value="${element.respuesta}"></div>`;
    $(selector).append(valor);
  });
}
/// fin funcion  ImagenesInputs


//// IMPUTS SELECTS
//// funcion para ingresar imagenes que tenga un select
// var p4act = [
//   { img: 'img/i1_p63_act4.png', respuesta: 'planicie', id:'0' },
//   { img: 'img/i2_p63_act4.png', respuesta: 'espacio', id:'1' },
//   { img: 'img/i3_p63_act4.png', respuesta: 'palacio', id:'2' },
//   { img: 'img/i4_p63_act4.png', respuesta: 'infancia', id:'3' },
//   { img: 'img/i5_p63_act4.png', respuesta: 'aprecia', id:'4' },
//   { img: 'img/i6_p63_act4.png', respuesta: 'calvicie', id:'5' }
// ];
// ImagenesSelect(p4act, "#p4act",4);

function ImagenesSelect(array, selector, actividad) {
  array.sort(f_randomico);
  array.forEach(element => {
    let valor = `
    <div style="display:inline-table;margin:10px;text-align:center;border:solid 1px #0CADDC;padding:5px;border-radius:5px"><center><img src="${element.img}" alt="" style="display:block"></center>
      <select class="selectbox1 no-arrow p${actividad}sel" id="p${actividad}var${element.id}"></select>
    </div>`;
    $(selector).append(valor);
  });
}
//FIN FUNCION INPUTS SELECTS



//// funcion para agregar titulos con inputs 

function tituloInputs(array, selector, actividad, clase) {
  array.sort(f_randomico);
  array.forEach(element => {
    let color = randomColor();
    let valor = `<div style="display:inline-table;margin:10px;" class="${clase}"><div style="background-color: ${color} !important">${element.titulo}</div><input class="inputTexto respuestas${actividad}"><input type="hidden" class="solucion${actividad}" value="${element.respuesta}"></div>`;
    $(selector).append(valor);
  });
}




///// validar tituloInputs
function validartituloInputs(actividad) {
  var respuestas = document.getElementsByClassName(`respuestas${actividad}`);
  var soluciones = document.getElementsByClassName(`solucion${actividad}`);
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
  return nota; // retorna 10 si todo esta bien 
}
/// fin funcion tituloInputs



/////////// FUNCION PARA SELECCION SIMPLE CON ENUNCIADO

// var p3act = [
//   {
//     enunciado: 'Si la polea conductora A transmite movimiento a la polea B, el sistema es:',
//     respuesta: ['Multiplicador', 'Reductor'],
//     correcta: 'Multiplicador'
//   },
//   {
//     enunciado: 'otre pregunta',
//     respuesta: ['bien', 'mal'],
//     correcta: 'bien'
//   },
//   {
//     enunciado: 'otre pregunta',
//     respuesta: ['bien', 'mal'],
//     correcta: 'bien'
//   },
// ];

// document.addEventListener("DOMContentLoaded", function () {
//   literalesRespuestasSeleccionSimple(p3act, "#p3act", 3);
// });

function literalesRespuestasSeleccionSimple(array, selector, actividad) {
  array.sort(f_randomico);
  array.forEach((element, index) => {
    let valor = `
            <li>${element.enunciado}</li>
            <div>`;
    element.respuesta.sort(f_randomico)
    element.respuesta.forEach((respuestas, valorindex) => {
      valor += `<div class="literalEncerrar literalOpcion${actividad}${index}" id="p${actividad}var${index}${valorindex}" data-anijs="if: click, do: bounceIn animated" style="border: solid 1px silver;padding: 5px;display: inline-table;margin: 10px;border-radius:5px;cursor:pointer">${respuestas}</div>`;
    });
    valor += `</div>`;
    $(selector).append(valor);
  });
}

function validarLiteralesRespuestasSeleccionSimple(array, actividad) {
  let core = 0;
  let cantidadOpciones = array.length;
  array.forEach((element, index) => {
    let elementosOpcion = document.getElementsByClassName("literalOpcion" + actividad + index);
    for (let i = 0; i < elementosOpcion.length; i++) {

      let validarEncerrado = elementosOpcion[i].classList.contains('literalEncerrarOpcion')
      // alert(validarEncerrado)
      // alert("Elemento " + i + ": " + elementosOpcion[i].textContent);
      if (validarEncerrado) {
        // alert(elementosOpcion[i].textContent)
        if (elementosOpcion[i].textContent === element.correcta) {
          elementosOpcion[i].classList.add('bien3');
          core++
        } else {
          elementosOpcion[i].classList.add('mal3')
        }
      }
    }
  });
  let valorPregunta = (core / cantidadOpciones)
  if (valorPregunta < 0) {
    valorPregunta = 0;
  }
  return valorPregunta
}
///// FIN  FUNCION PARA SELECCION SIMPLE


/////////// FUNCION PARA SELECCION SIMPLE IMAGENES SIN ENUNCIADO
// var p4act = [
//   { img: 'img/i1_p76_act4.jpg', validacion: 'no' },
//   { img: 'img/i2_p76_act4.jpg', validacion: 'no' },
//   { img: 'img/i3_p76_act4.jpg', validacion: 'si' }
// ];

function ImagenesSeleccionSimple(array, selector, actividad) {
  array.sort(f_randomico);
  array.forEach((element, index) => {
    // Agregar clases adicionales según la validación
    let clasesValidacion = element.validacion === 'si' ? 'imagen-correcta' : 'imagen-no-correcta';
    let valor = `
            <div class="encerImg pregunta${actividad} hvr-grow encerImg${actividad}${index} ${clasesValidacion}" 
                 style="display:inline-table;border-radius:5px;margin:10px;cursor: pointer" 
                 data-anijs="if: click, do: flipInY animated">
                <img src="${element.img}" alt="">
            </div>`;
    $(selector).append(valor);
  });
}


//// validar Seleccion simple imgenes
///  validarImagenesSeleccionSimple(p4act, 4)
function validarImagenesSeleccionSimple(array, actividad) {
  let core = 0;
  for (let i = 0; i < array.length; i++) {
    let tieneEcerrar = $(".encerImg" + actividad + i + "").hasClass('encerImgOpcion')
    let tieneSi = $(".encerImg" + actividad + i + "").hasClass('imagen-correcta')
    if (tieneEcerrar) {
      if (tieneSi) {
        $(".encerImg" + actividad + i + "").addClass('bien10'); core++
      } else {
        $(".encerImg" + actividad + i + "").addClass('mal10')
      }
    }
  }
  return core;
}

/////FIN FUNCION PARA SELECCION SIMPLE IMAGENES SIN ENUNCIADO





/////////// FUNCION PARA SELECCION SIMPLE PARRAFO
// var p5act = [
//     { item: 'Reduce.', validacion: 'no' },
//     { item: 'Es una palanca ', validacion: 'no' },
//     { item: 'Superficie diagonal', validacion: 'si' },
//     { item: 'Mecanismo circular', validacion: 'no' },
// ];

function SeleccionSimpleDiv(array, selector, actividad) {
  array.sort(f_randomico);
  array.forEach(function (element, index) {
    var clasesValidacion = element.validacion === 'si' ? 'opcDiv-correcta' : 'opcDiv-no-correcta';
    var valor = document.createElement('div');
    valor.className = "encerDiv pregunta" + actividad + " encerDiv" + actividad + index + " " + clasesValidacion;
    valor.style.display = "inline-table";
    valor.style.borderRadius = "5px";
    valor.style.margin = "10px";
    valor.style.cursor = "pointer";
    valor.style.padding = "2px 10px";
    valor.setAttribute('data-anijs', 'if: click, do: flipInX animated');
    var contenido = document.createTextNode(element.item);
    valor.appendChild(contenido);
    document.querySelector(selector).appendChild(valor);
  });
}


//// validar Seleccion simple div
///  validarSeleccionSimpleDiv(p4act, 4)
function validarSeleccionSimpleDiv(array, actividad) {
  let core = 0;
  for (let i = 0; i < array.length; i++) {
    let tieneEcerrar = $(".encerDiv" + actividad + i + "").hasClass('encerDivOpcion')
    let tieneSi = $(".encerDiv" + actividad + i + "").hasClass('opcDiv-correcta')
    if (tieneEcerrar) {
      if (tieneSi) {
        $(".encerDiv" + actividad + i + "").append('<img src="img/ico_bien.png" alt="">'); core++
      } else {
        $(".encerDiv" + actividad + i + "").append('<img src="img/ico_mal.png" alt="">')
      }
    }
  }
  return core;
}

/////FIN FUNCION PARA SELECCION SIMPLE div


//MARCAR INPUT UNA SOL OPCION
// var p6act = [
//   { item: 'Polipasto', validacion: 'no' },
//   { item: 'Movedora', validacion: 'no' },
//   { item: 'Conductora', validacion: 'si' },
//   { item: 'Rueda', validacion: 'no' },
// ];

function MarcarInputUnaOpcion(array, selector, actividad) {
  array.sort(f_randomico);
  array.forEach((element, index) => {
    let clasesValidacion = element.validacion === 'si' ? 'marcar-correcta' : 'marcar-no-correcta';
    let valor = `
            <div style="display:flex;gap:10px;flex-wrap: wrap;margin:10px">
                 <input class="botonCheck pregunta${actividad} hvr-grow botonCheck${actividad}${index} ${clasesValidacion} id="" readonly="" data-anijs="if: click, do: bounceIn animated">
               <div>${element.item}</div>
            </div>`;
    $(selector).append(valor);
  });
}

///  validarMarcarInputUnaOpcion(p6act, 6)
function validarMarcarInputUnaOpcion(array, actividad) {
  let core = 0;
  for (let i = 0; i < array.length; i++) {
    let tieneX = $(".botonCheck" + actividad + i + "").val()
    let tieneSi = $(".botonCheck" + actividad + i + "").hasClass('marcar-correcta')
    if (tieneX == 'X') {
      if (tieneSi) {
        $(".botonCheck" + actividad + i + "").addClass('bien3'); core++
      } else {
        $(".botonCheck" + actividad + i + "").addClass('mal3')
      }
    }
  }
  return core;
}
//FIN MARCAR INPUT UNA SOL OPCION




//// ImagenesSeleccionMultiple SELECCIONA MULTIPLE SOLO IMAGENES
function ImagenesSeleccionMultiple(array, selector, actividad) {
  array.sort(f_randomico);
  array.forEach((element, index) => {
    // Agregar clases adicionales según la validación
    let clasesValidacion = element.validacion === 'si' ? 'imagen-correcta' : 'imagen-no-correcta';
    let valor = `
            <div class="encerImgMultiple pregunta${actividad} hvr-grow encerImg${actividad}${index} ${clasesValidacion}" 
                 style="display:inline-table;border-radius:5px;margin:10px;cursor: pointer" 
                 data-anijs="if: click, do: flipInY animated">
                <img src="${element.img}" alt="">
            </div>`;
    $(selector).append(valor);
  });
}

//// validar Seleccion MULTIPLE imgenes
///  validarImagenesSeleccionMultiple(p4act, 4,buenas) -> buenas es la cantidad de opciones correcta que hay en la pregunta
function validarImagenesSeleccionMultiple(array, actividad, buenas) {
  let core = 0;
  let incore = 0;
  let encerrados = 0;
  let valorPregunta = 0;
  let cantArray = array.length
  for (let i = 0; i < array.length; i++) {
    let tieneEcerrar = $(".encerImg" + actividad + i + "").hasClass('encerImgOpcion')
    let tieneSi = $(".encerImg" + actividad + i + "").hasClass('imagen-correcta')
    if (tieneEcerrar) {
      encerrados++
      if (tieneSi) {
        $(".encerImg" + actividad + i + "").addClass('bien10');
        core++
      } else {
        $(".encerImg" + actividad + i + "").addClass('mal10')
        incore++
      }
    }
  }
  // console.log("core: " + core + "____" + "incore: " + incore + "____" + "encerrados: " + encerrados + "____" + "valorPregutna: " + valorPregunta + "____")
  valorPregunta = (core - incore) / buenas;
  if ((cantArray == encerrados) || (encerrados == 0)) {
    for (let i = 0; i < array.length; i++) {
      $(".encerImg" + actividad + i + "").addClass('mal10');
    }
    core = 0;
    incore = 0;
    encerrados = 0;
    valorPregunta = 0;
  }
  return valorPregunta;
}

///FIN ImagenesSeleccionMultiple SELECCION MULTIPLE VARIAS IMAGENES





document.addEventListener("DOMContentLoaded", function () {
  $(".literalEncerrar").on("click", function () {
    var obtenerClass = $(this).attr("class").split(' ')[1];
    $("." + obtenerClass).removeClass("literalEncerrarOpcion");
    $(this).addClass("literalEncerrarOpcion");
  });

  $(".encerImg").on("click", function () {
    var obtenerClass = $(this).attr("class").split(' ')[1];
    $("." + obtenerClass).removeClass("encerImgOpcion");
    $(this).addClass("encerImgOpcion");
  });

  $(".encerImgMultiple").on("click", function () {
    if ($(this).hasClass('encerImgOpcion')) {
      $(this).removeClass('encerImgOpcion')
    } else {
      $(this).addClass('encerImgOpcion')
    }
  });


  $(".encerDiv").on("click", function () {
    var obtenerClass = $(this).attr("class").split(' ')[1];
    $("." + obtenerClass).removeClass("encerDivOpcion");
    $(this).addClass("encerDivOpcion");
  });

  $(".botonCheck").on("click", function () {
    var obtenerClass = $(this).attr("class").split(' ')[1];
    $("." + obtenerClass).val('');
    $(this).val('X');
  });


  $(".inputTexto").attr("autocomplete", "off");
  $(".inputTexto").attr("maxlength", "20");
  $(".inputTexto").attr("placeholder", "escribir...");
  $(".inputTexto").addClass("form-control");


  $(".caracter1").attr('autocomplete', 'off');
  $(".caracter1").attr('maxlength', '1');
  $(".caracter1").attr('placeholder', '--');
  $(".caracter1").addClass('form-control2');

  $(".caracter2").attr('autocomplete', 'off');
  $(".caracter2").attr('maxlength', '2');
  $(".caracter2").attr('placeholder', '--');
  $(".caracter2").addClass('form-control2');

  $(".caracter3").attr('autocomplete', 'off');
  $(".caracter3").attr('maxlength', '3');
  $(".caracter3").attr('placeholder', '--');
  $(".caracter3").addClass('form-control2');

  $(".caracter4").attr('autocomplete', 'off');
  $(".caracter4").attr('maxlength', '4');
  $(".caracter4").attr('placeholder', '--');
  $(".caracter4").addClass('form-control2');

  $(".caracter5").attr('autocomplete', 'off');
  $(".caracter5").attr('maxlength', '5');
  $(".caracter5").attr('placeholder', '--');
  $(".caracter5").addClass('form-control2');

  $(".caracter6").attr('autocomplete', 'off');
  $(".caracter6").attr('maxlength', '6');
  $(".caracter6").attr('placeholder', '--');
  $(".caracter6").addClass('form-control2');


  $(".caracter7").attr('autocomplete', 'off');
  $(".caracter7").attr('maxlength', '7');
  $(".caracter7").attr('placeholder', '--');
  $(".caracter7").addClass('form-control2');


  $(".caracter8").attr('autocomplete', 'off');
  $(".caracter8").attr('maxlength', '8');
  $(".caracter8").attr('placeholder', '--');
  $(".caracter8").addClass('form-control2');


  $(".caracter9").attr('autocomplete', 'off');
  $(".caracter9").attr('maxlength', '9');
  $(".caracter9").attr('placeholder', '--');
  $(".caracter9").addClass('form-control2');

  $(".textocorto").attr('autocomplete', 'off');
  $(".textocorto").attr('maxlength', '20');
  $(".textocorto").attr('placeholder', 'escribir');
  $(".textocorto").addClass('form-control2');
})

///// AYUDAS DE TEXTO
// var ayudasTexto = [
//    '1. Selecciona el color para la línea',
// ]
ayudasTexto.forEach((element) => {
  let valor = `En la actividad ${element} <br>`
  $("#ayudasTexto").append(valor)
});



/// para llamarla hay que poner en el input
// onKeyPress="return soloNumeros(event)"
//  onKeyPress="return sololetras(event)" 

function soloNumeros(e) {
  var key = window.Event ? e.which : e.keyCode
  return (key >= 48 && key <= 57)
}

function sololetras(e) {

  key = e.keyCode || e.which;
  teclado = String.fromCharCode(key).toLowerCase();
  letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
  especiales = "8-37-38-46-164";
  teclasEspeciales = false;

  for (var i in especiales) {
    if (key == especiales[i]) {
      teclasEspeciales = true; break;
    }
  }
  if (letras.indexOf(teclado) == -1 && !teclasEspeciales) {
    return false;
  }
}


vof = [
  '<option>V</option>',
  '<option>F</option>',
];
vof.sort(f_randomico);
$(".vof").html('<option>---</option>' + vof + "");

$(".10pts").html('<br>&emsp;&emsp;( 10 pts. ) ')
$(".9pts").html('<br>&emsp;&emsp;( 9 pts. ) ')
$(".8pts").html('<br>&emsp;&emsp;( 8 pts. ) ')
$(".7pts").html('<br>&emsp;&emsp;( 7 pts. ) ')
$(".6pts").html('<br>&emsp;&emsp;( 6 pts. ) ')
$(".5pts").html('<br>&emsp;&emsp;( 5 pts. ) ')
$(".4pts").html('<br>&emsp;&emsp;( 4 pts. ) ')
$(".3-5pts").html('<br>&emsp;&emsp;( 3,5 pts. ) ')
$(".3pts").html('<br>&emsp;&emsp;( 3 pts. ) ')
$(".2-5pts").html('<br>&emsp;&emsp;( 2,5 pts. ) ')
$(".2pts").html('<br>&emsp;&emsp;( 2 pts. ) ')
$(".1-5pts").html('<br>&emsp;&emsp;( 1,5 pts. ) ')
$(".1-25pts").html('<br>&emsp;&emsp;( 1,25 pts. ) ')
$(".0-25pts").html('<br>&emsp;&emsp;( 0,25 pts. ) ')
$(".0-5pts").html('<br>&emsp;&emsp;( 0,5 pts. ) ')
$(".0-75pts").html('<br>&emsp;&emsp;( 0,75 pts. ) ')
$(".1pt").html('<br>&emsp;&emsp;( 1 pt. ) ')
$(".arrastre").html('Imágenes para pegar')
$(".c-d").html('Actividad calificada por tu docente')
$(".literal").html(' • ')
$(".respuesta").html('Resp.')

// &lt;, &gt;


$(".10pts").addClass('puntajeCalificacion')
$(".9pts").addClass('puntajeCalificacion')
$(".8pts").addClass('puntajeCalificacion')
$(".7pts").addClass('puntajeCalificacion')
$(".6pts").addClass('puntajeCalificacion')
$(".5pts").addClass('puntajeCalificacion')
$(".4pts").addClass('puntajeCalificacion')
$(".3-5pts").addClass('puntajeCalificacion')
$(".3pts").addClass('puntajeCalificacion')
$(".2-5pts").addClass('puntajeCalificacion')
$(".2pts").addClass('puntajeCalificacion')
$(".1-5pts").addClass('puntajeCalificacion')
$(".1-25pts").addClass('puntajeCalificacion')
$(".0-25pts").addClass('puntajeCalificacion')
$(".0-5pts").addClass('puntajeCalificacion')
$(".0-75pts").addClass('puntajeCalificacion')
$(".1pt").addClass('puntajeCalificacion')

function EndActivity() {
  document.getElementById("bt_comprobar").disabled = true;
  $("#txtAlumno").attr("disabled", false);
  $(".panel-body").addClass('fin-actividad');
  $(".info").css('display', 'none');
  $(".dedoayuda1").css('border', 'none');
  $(".dedoayuda2").css('border', 'none');
  $(".nota-abierta").addClass("backnoabierta");
  $(".selectbox1").css('border', 'none');
  $(".drag1").removeClass('sombraArrastre');
  $(".drag2").removeClass('sombraArrastre');
  $(".drag3").removeClass('sombraArrastre');
  $(".drag4").removeClass('sombraArrastre');
  $(".drag5").removeClass('sombraArrastre');
  $(".drag6").removeClass('sombraArrastre');
  $(".drag7").removeClass('sombraArrastre');
  $(".drag8").removeClass('sombraArrastre');
  $(".drag9").removeClass('sombraArrastre');
  $(".drag10").removeClass('sombraArrastre');
  $(".divstart").css('display', 'none');
  $(".divend").css('display', 'none');
  borrarAlerta();
}


function reemplazar(valor) {
  let nuevo = valor.replace('.', ',');
  return nuevo;
}

function reemplazarcoma(valor) {
  let nuevo = valor.replace(',', '.');
  return nuevo;
}


function sinespacios(texto) {
  let nuevotexto = texto.replace(/ /g, '');
  return nuevotexto

  // quitar espacios
  // .replace(/\s+/g, '')
}









///// titulo tema, pagina 
valoresAct.forEach(element => {
  $("#numTemaActividad").append(element.tema + " ");
  $("#TemaActividad").append(element.nombre + " ");
  $("#n_pagina").append(element.pagina + " ");
});
///// FIN titulo tema, pagina


$(".textBox").html(`<textarea class="form-control text-question no-redimensionar hvr-grow-shadow textArea" rows="2" style="margin:5px 0px;" placeholder="Escribir"></textarea>`)






/////EVALUO MI PROCESO
// var evaluoLiterales = [
//     'esta es una pregunta',
//     'otra pregutna'

// ]
$("#evaluoProceso").html(
  `
    <div align="center" style="margin-top:20px;border:solid  3px #D6D7EE;border-radius:10px;padding:15px;display:table;box-shadow: 5px 6px 5px 0px rgba(214,215,238,0.75) !important; -webkit-box-shadow: 5px 6px 5px 0px rgba(214,215,238,0.75) !important; -moz-box-shadow: 5px 6px 5px 0px rgba(214,215,238,0.75) !important;">
        <table  id="opcionesEvaluo">
            <tr>
                <td><img src="img/ico_evaluo_mi_proceso.png" alt=""></td>
                <td><b>Pinta</b> según corresponda.</td>
            </tr>
        </table>
    </div>`
)
evaluoLiterales.forEach((element, index) => {
  let valor =
    `<tr>
      <td style="padding:5px"><div class="enunciado_evaluo">${element}</div></td>
        <td style="padding:5px">
          <div style="display:inline-block" data-anijs="if: click, do: flipInY animated" class="caja_evaluo evaluo${index}"><img src="img/evaluoMiproceso_c1.png" alt=""></div>
          <div style="display:inline-block" data-anijs="if: click, do: flipInY animated" class="caja_evaluo evaluo${index}"><img src="img/evaluoMiproceso_c2.png" alt=""></div>
          <div style="display:inline-block" data-anijs="if: click, do: flipInY animated" class="caja_evaluo evaluo${index}"><img src="img/evaluoMiproceso_c3.png" alt=""></div>
        </td>
      </tr>`
  $("#opcionesEvaluo").append(valor)
});



$(".caja_evaluo").on("click", function () {
  var obtenerClass = $(this).attr("class").split(' ')[1];
  $("." + obtenerClass).removeClass('pintarEvaluoProceso');
  $(this).addClass('pintarEvaluoProceso')
});

document.addEventListener("DOMContentLoaded", function () {
  AniJS.run();
});
////FINN EVALUO MI PREOCSO


