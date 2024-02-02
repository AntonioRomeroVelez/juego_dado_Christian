$(document).ready(function () {
  // esquema.sort(f_randomico);
  var serpientesEscaleras = [
    '<img src="img/fichas/serpiente.png" alt="" style="position: absolute; top: 60px; left: 280px; z-index: 1"/>',
    '<img src="img/fichas/serpiente.png" alt="" style="position: absolute; top: 600px; left: 500px; z-index: 1"/>',
    '<img src="img/fichas/serpiente.png" alt="" style="position: absolute; top: 730px; left: 70px; z-index: 1"/>',
    '<img src="img/fichas/serpiente.png" alt="" style="position: absolute; top: 280px; left: 500px; z-index: 1"/>',
    '<img src="img/fichas/escalera.png" alt="" style="position: absolute; top: 290px; left: 360px; z-index: 1"/>',
    '<img src="img/fichas/escalera.png" alt="" style="position: absolute; top: 510px; left: 10px; z-index: 1"/>',
    '<img src="img/fichas/escalera.png" alt="" style="position: absolute; top: 730px; left: 350px; z-index: 1"/>',
  ]
  serpientesEscaleras.forEach(element => {
    $("#cajaTabla").append(element)
  });
  var casilleros = [
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },
    {
      tipo: "avanza",
      textoCasilla: "",
      class: "bg-nada",
    },

  ];
  

  casilleros.forEach((element, index) => {
    let numero = index + 1;
    let contenido;
    if (element.tipo == "avanza") {
      contenido = `
        <div class="casillero ${element.class}" id="imagenCuadro${numero}">
               <div class="numeroCasillero">${numero}</div>
               <div class="textoCasillero">${element.textoCasilla}</div>              
        </div>`;
    } else if (element.tipo == "nada") {
      contenido = `
        <div class="casillero ${element.class}" id="imagenCuadro${numero}">
               <div class="numeroCasillero">${numero}</div>
               <div class="textoCasillero">${element.textoCasilla}</div>              
        </div>`;
    } else if (element.tipo == "regresa") {
      contenido = `
        <div class="casillero ${element.class}" id="imagenCuadro${numero}">
               <div class="numeroCasillero">${numero}</div>
               <div class="textoCasillero">${element.textoCasilla}</div>              
        </div>`;
    } else {
      contenido = `
    <div class="casillero ${element.pos}" style="background-color: ${element.bg} !important" align="center" id="imagenCuadro${numero}">
        <img src="${element.img}" alt="">
        <div>${numero}</div>
    </div>`;
    }
    $("#posicionDado" + numero + "").after(contenido);
  });
  $("#modal-numjugadores").modal({ backdrop: "static", keyboard: false });
  $("#modal-numjugadores").modal();
});

let rel = null,
  conteoDado = 0,
  contD = 1,
  longCasilla = 0,
  rdnCasilla = 0,
  resultados = [];
var njugadores,
  jugadorActual = 1,
  numeroTurno = 1,
  bucleActual = 0,
  caraDado;

var acumPosiciones = [];
var acumPosicionesPreguntas = [];
var acumDado = [];
var respuesta = false;
var ajustePosicion;
var preguntasJugador = [];
var RespuestaCorrectaSeleccion;

var posFin;
var sumar;

var valorInicial = 0;
var valorFinal;
var numFicha = 0;

////funcion para mostrar las preguntas recibe el numero actual y el jugador
var preguntasReto = 0;
let valor_pregunta;
let valor_segundos;
let mostrarSegundos;
var tipoPregunta;
let opcionesPregunta;

var indicePregunta; /// el indiece de la pregunta que se va a mostrar
var controlindicePregunta;

var Sumar;
var Restar;
var posActual = 0;

var acomulacionMostrarPreguntas = [
  { nombre: "", conteoPregunta: "" },
  { nombre: "1", conteoPregunta: "0" },
  { nombre: "2", conteoPregunta: "0" },
  { nombre: "3", conteoPregunta: "0" },
  { nombre: "4", conteoPregunta: "0" },
];

var acomulacionReto = [
  { nombre: "", conteoReto: "" },
  { nombre: "1", conteoReto: "0" },
  { nombre: "2", conteoReto: "0" },
  { nombre: "3", conteoReto: "0" },
  { nombre: "4", conteoReto: "0" },
];

$(".btn-retos").hide();
$("#opcionMultiple").hide();
$(".btn-terminar_varias").hide();

// class="animate__animated animate__heartBeat animate__infinite"   latido de corazon
function guardar_NumJugadores(numJugadores) {
  var colNombreJugador = ["#F83315", "#015C66", "#2D7E26", "#D59200"];
  njugadores = numJugadores;
  for (var i = 1; i <= numJugadores; i++) {
    $("#fichasJugadores").append(
      `<div style="display:inline-table;"><img src="img/fichas/jugador${i}.png" alt="" class="fichaJugador${i} imgFicha"><div style="color:${colNombreJugador[i]} !important;display:inline-table;margin:5px;font-weight:bolder;background-color:white;border:solid 1px ${colNombreJugador[i]};padding:5px;border-radius:5px">Equipo ${i} <span class="NombreEquipo NombreEquipo${i}"></span></div></div>`
    );
  }
  $("#modal-numjugadores").modal("hide");
  $("#num_jugadores").focus();

  for (let i = 1; i <= numJugadores; i++) {
    acumPosiciones[i] = 0;
  }
  ////crearPregunas para jugadores
  crearPreguntasJugadores();
  crearRetosJugadores();
  ///comentar//  console.log(acumPosiciones);
}

var preguntasPorJugador = [];
function crearPreguntasJugadores() {
  // Recorre cada jugador
  for (let i = 0; i <= njugadores; i++) {
    var preguntasJugador = [...Arraypreguntas];
    preguntasJugador.sort(f_randomico);
    preguntasPorJugador.push(preguntasJugador);
  }
  // console.log("Preguntas para cada jugador:" + preguntasPorJugador[0].pregunta);
  // console.log("Preguntas para cada jugador:" + preguntasPorJugador[1].pregunta);
  // console.log("Preguntas para cada jugador:" + preguntasPorJugador[2].pregunta);
  preguntasPorJugador.forEach((preguntasJugador, index) => {
    ///comentar//  console.log("Jugador " + (index + 1) + ": ", preguntasJugador);
  });
  //console.log("Preguntas para el primer jugador:", preguntasPorJugador[1]);
}

var retosPorJugador = [];
function crearRetosJugadores() {
  // Recorre cada jugador
  for (let i = 0; i <= njugadores; i++) {
    var retosJugador = [...Arrayretos];
    retosJugador.sort(f_randomico);
    retosPorJugador.push(retosJugador);
  }
  // console.log("retos para cada jugador:" + retosPorJugador[0]);
  // console.log("retos para cada jugador:" + retosPorJugador[1]);
  // console.log("retos para cada jugador:" + retosPorJugador[2]);
  retosPorJugador.forEach((retosJugador, index) => {
    ///comentar//  console.log("Jugador " + (index + 1) + ": ", retosJugador);
  });
  //console.log("retos para el primer jugador:", retosPorJugador[1]);
}

function mostrarPregunta() {
  $("#imgPreguntaActual").html('') ///vaciamos los campos
  $("#opcionMultiple").html('') ///vaciamos los campos
  $("#iniciarCro").show();
  $("#iniciarCro").show();
  $("#MensajePregunta").html("");
  $("#opcionMultiple").hide()
  $("#contador").html('00:00')


  ///console.log("DESDE FUNCION MOSTRAR PREGUNTA " + "posicion del jugador actual: " + acumPosiciones[jugadorActual] + " que le pertenece al jugador " + jugadorActual + " conteo pregutna " + acomulacionMostrarPreguntas[jugadorActual].conteoPregunta)

  indicePregunta = parseInt(
    acomulacionMostrarPreguntas[jugadorActual].conteoPregunta
  );
  // console.log(
  //   "indice pregutna : " +
  //   indicePregunta +
  //   " posiion actual" +
  //   acumPosiciones[jugadorActual] +
  //   " del jugador" +
  //   jugadorActual)

  if (acumPosiciones[jugadorActual] == 11) {
    texto = "Avanza a la casilla número 18.";
    textoBtn = "Avanzar";
    Sumar = 7;
    caraDado = caraDado + 7;
    avanzar(jugadorActual, texto, Sumar, textoBtn);
  } else if (acumPosiciones[jugadorActual] == 22) {
    texto = "Avanza a la casilla número 35.";
    textoBtn = "Avanzar";
    Sumar = 13;
    caraDado = caraDado + 13;
    avanzar(jugadorActual, texto, Sumar, textoBtn);
  } else if (acumPosiciones[jugadorActual] == 39) {
    texto = "Avanza a la casilla número 46.";
    textoBtn = "Avanzar";
    Sumar = 7;
    caraDado = caraDado + 7;
    avanzar(jugadorActual, texto, Sumar, textoBtn);
  }
  /////cuando caen en la serpiente
  else if (acumPosiciones[jugadorActual] == 10) {
    texto = "Regresa a la casilla número 2.";
    textoBtn = "Regresar";
    Restar = 10 - 2;
    caraDado = caraDado - (10 - 2);
    retroceder(texto, Restar, textoBtn);
  }
  else if (acumPosiciones[jugadorActual] == 26) {
    texto = "Regresa a la casilla número 14.";
    textoBtn = "Regresar";
    Restar = 26 - 14;
    caraDado = caraDado - (26 - 14);
    retroceder(texto, Restar, textoBtn);
  }
  else if (acumPosiciones[jugadorActual] == 45) {
    texto = "Regresa a la casilla número 29.";
    textoBtn = "Regresar";
    Restar = 45 - 29;
    caraDado = caraDado - (45 - 29);
    retroceder(texto, Restar, textoBtn);
  } else if (acumPosiciones[jugadorActual] == 50) {
    texto = "Regresa a la casilla número 44.";
    textoBtn = "Regresar";
    Restar = 50 - 38;
    caraDado = caraDado - (50 - 38);
    retroceder(texto, Restar, textoBtn);
  }
  else {
    setTimeout(() => {
      AbrirModalPreguntas(acumPosiciones[jugadorActual]);
    }, 1000);
  }
}

function AbrirModalPreguntas() {

  ///// aquiiii vamos a actualizar las preguntas si se acaban


  // console.log("ABIERTO DESDE ABRIRMODALPREGUTNAS: Acomulacion de resto : " + acomulacionReto[jugadorActual].conteoReto + " NUMERO DE RESTOS " + retosPorJugador[jugadorActual].length)

  $("#modal-pregunta").modal({ backdrop: "static", keyboard: false });
  respuesta = false; //se vuelve false para que responda el siguiente jugador
  $("#modal-pregunta").modal();

  /// abrimos el modal de preguntas 
  ///comentar//  console.log("desde abrir modal pregutnas : posicion actual " + acumPosiciones[jugadorActual])

  if (
    acumPosiciones[jugadorActual] == 2 ||
    acumPosiciones[jugadorActual] == 11 ||
    acumPosiciones[jugadorActual] == 18 ||
    acumPosiciones[jugadorActual] == 25 ||
    acumPosiciones[jugadorActual] == 33 ||
    acumPosiciones[jugadorActual] == 40 ||
    acumPosiciones[jugadorActual] == 48 ||
    acumPosiciones[jugadorActual] == 55 ||
    acumPosiciones[jugadorActual] == 59 ||
    acumPosiciones[jugadorActual] == 7) { /// cuando hay reto
    //alert('vamos a mostrar un reto')
    acomulacionReto[jugadorActual].conteoReto = parseInt(acomulacionReto[jugadorActual].conteoReto + 1)
    ///comentar//  console.log("RETOS DESDE LA FUCNION ABRIR PREGUTNAS:" + acomulacionReto[jugadorActual].conteoReto + " == " + retosPorJugador[jugadorActual].length)
    if (acomulacionReto[jugadorActual].conteoReto == retosPorJugador[jugadorActual].length) {
      ///comentar//  console.log('vamos a modificar LOS RETOS')
      acomulacionReto[jugadorActual].conteoReto = parseInt(0)
      retosPorJugador[jugadorActual].sort(f_randomico)
      retosPorJugador[jugadorActual].sort(f_randomico)
      retosPorJugador[jugadorActual] = retosPorJugador[jugadorActual]
      ///comentar//  console.log(" nuevo arras de pregutnas" + retosPorJugador[jugadorActual])
    }

    valor_pregunta = retosPorJugador[`${jugadorActual}`][acomulacionReto[jugadorActual].conteoReto].titulo;
    valor_segundos = retosPorJugador[`${jugadorActual}`][acomulacionReto[jugadorActual].conteoReto].segundos;
    mostrarSegundos = retosPorJugador[`${jugadorActual}`][acomulacionReto[jugadorActual].conteoReto].tiempo;
    tipoPregunta = retosPorJugador[`${jugadorActual}`][acomulacionReto[jugadorActual].conteoReto].tipo;

    ///comentar//  console.log("desde ABRIR MODAL RETO " + valor_pregunta + " tipo: " + tipoPregunta)

    $("#imgPreguntaActual").html(valor_pregunta);
    $("#mostrarSegundos").html(mostrarSegundos);
    $("#jugador").html(jugadorActual);
    $(".btn-retos").show();
    $("#idCronoIni").html(
      `<button class="btn btn-warning" style="font-size:3.2rem;" id="iniciarCro" onclick ="iniciarCronometro(${valor_segundos},'reto')">Iniciar</button>`
    );

    ///comentar//  console.log("CONTEO RETOS:____" + acomulacionReto[jugadorActual].conteoReto)

  } else {
    acomulacionMostrarPreguntas[jugadorActual].conteoPregunta = parseInt(acomulacionMostrarPreguntas[jugadorActual].conteoPregunta + 1)
    ///comentar//  console.log("PREGUTNAS DESDE LA FUCNION ABRIR PREGUTNAS:" + acomulacionMostrarPreguntas[jugadorActual].conteoPregunta + " == " + preguntasPorJugador[jugadorActual].length)
    //alert("vamos a mostrar las preguntas")
    if (acomulacionMostrarPreguntas[jugadorActual].conteoPregunta == preguntasPorJugador[jugadorActual].length) {
      ///comentar//  console.log('vamos a modificar las pregutnas')
      acomulacionMostrarPreguntas[jugadorActual].conteoPregunta = 0
      preguntasPorJugador[jugadorActual].sort(f_randomico)
      preguntasPorJugador[jugadorActual].sort(f_randomico)
      preguntasPorJugador[jugadorActual] = preguntasPorJugador[jugadorActual]
      ///comentar//  console.log(" nuevo arras de pregutnas" + retosPorJugador[jugadorActual])
    }

    valor_pregunta = preguntasPorJugador[`${jugadorActual}`][acomulacionMostrarPreguntas[jugadorActual].conteoPregunta].pregunta;
    valor_segundos = preguntasPorJugador[`${jugadorActual}`][acomulacionMostrarPreguntas[jugadorActual].conteoPregunta].segundos;
    mostrarSegundos = preguntasPorJugador[`${jugadorActual}`][acomulacionMostrarPreguntas[jugadorActual].conteoPregunta].tiempo;
    tipoPregunta = preguntasPorJugador[`${jugadorActual}`][acomulacionMostrarPreguntas[jugadorActual].conteoPregunta].tipo;
    RespuestaCorrectaSeleccion = preguntasPorJugador[`${jugadorActual}`][acomulacionMostrarPreguntas[jugadorActual].conteoPregunta].correcta;
    ///comentar//  console.log(RespuestaCorrectaSeleccion)
    const contenedorOpciones = document.getElementById('opcionMultiple');

    ///comentar//  console.log("desde ABRIR MODAL " + preguntasPorJugador[`${jugadorActual}`][acomulacionMostrarPreguntas[jugadorActual].conteoPregunta].opciones)
    // Iterar sobre el array de preguntas

    preguntasPorJugador[`${jugadorActual}`][acomulacionMostrarPreguntas[jugadorActual].conteoPregunta].opciones.sort(f_randomico)
    preguntasPorJugador[`${jugadorActual}`][acomulacionMostrarPreguntas[jugadorActual].conteoPregunta].opciones.sort(f_randomico)
    preguntasPorJugador[`${jugadorActual}`][acomulacionMostrarPreguntas[jugadorActual].conteoPregunta].opciones.forEach(opcion => {
      const divOpcion = document.createElement('div');
      divOpcion.className = 'opcionPre';
      divOpcion.innerText = `${opcion}`;
      divOpcion.addEventListener('click', function () {
        validarRespuestaSeleccion(opcion)
        divOpcion.classList.add('pintarOpcio');
      });
      contenedorOpciones.appendChild(divOpcion);
    });

    controlindicePregunta = preguntasPorJugador[`${jugadorActual}`].length;  ///conocer la cantidad de preguntas para cada jugador
    $("#imgPreguntaActual").html(valor_pregunta);
    $("#mostrarSegundos").html(mostrarSegundos);
    $("#jugador").html(jugadorActual);
    $("#idCronoIni").html(
      `<button class="btn btn-warning" style="font-size:3.2rem;" id="iniciarCro" onclick ="iniciarCronometro(${valor_segundos},'multiple')">Iniciar</button>`
    );

    ///comentar//  console.log("CONTEO PREGUTNAS:____" + acomulacionMostrarPreguntas[jugadorActual].conteoPregunta)
  }
  return valor_segundos;
}

function turnoSiguienteJugador() {
  jugadorActual++;
  numeroTurno++;
  bucleActual++;
  numFicha++;
  ////console.log("cantidad de jugadores: " + njugadores)
  if (jugadorActual > njugadores) {
    jugadorActual = 1;
  }
  if (numeroTurno > njugadores) {
    numeroTurno = 1;
  }
  $(".NombreEquipo" + jugadorActual + "").html("Posición: " + acumPosiciones[jugadorActual])
  $(".imagen-animada").show()


  $("#contador").html("00:00");
  $("#opcionMultiple").addClass('habilitar')
  $("#turnoJugador").html(jugadorActual)
  $(".imagen-animada").show()
  $("#imgDado").addClass("animate__animated animate__bounce animate__infinite");
  $("#imgDado").addClass("habilitar");

  $("#jugadorActual").text(jugadorActual);
  $("#numeroTurno").text(numeroTurno);
}


function girar() {
  $(".imagen-animada").hide()
  ////console.log("acomulacionMostrarPreguntas " + acomulacionMostrarPreguntas[jugadorActual].conteoPregunta)
  $("#modal-dado").modal({ backdrop: "static", keyboard: false });
  respuesta = false; //se vuelve false para que responda el siguiente jugador
  $("#modal-dado").modal();
  caraDado = Math.floor(Math.random() * (7 - 1)) + 1;
  //caraDado = 60;
  $("#imgDadoGiro").text("");
  dados_girar();
  $("#jugadorActual").html(jugadorActual);
  $("#caraDado").text(caraDado);

  $("#imgDado").removeClass(
    "animate__animated animate__bounce animate__infinite"
  );
  $("#imgDado").addClass("desabilitar");
}

function dados_girar() {
  $("#valorDadoLanzado").html("");
  rel = setInterval(function () {
    conteoDado++;
    $("#imgDadoGiro").html('<img src="img/dados/r' + contD + '.png">');
    contD == 12 ? (contD = 1) : contD++;
    if (conteoDado == 24) {
      $("#imgDadoGiro").html(
        '<img src="img/dados/d' +
        caraDado +
        '.png" class="img-responsive animate__animated animate__tada animate__infinite" data-toggle="tooltip" ' +
        'title="Click para ver la pregunta" style="cursor: pointer;" onclick="moverFicha();">'
      );
      clearInterval(rel);
      // alert(caraDado) es el numero que va a salir en en la lanzada
      conteoDado = 0;
      setTimeout(() => {
        $("#valorDadoLanzado").html(
          "Número: " + caraDado + "<br> Selecciona el dado para mover tu ficha"
        );
      }, 10);
    }
  }, 100);
}

function moverFicha() {

  /// verificar que no pase de las 62 casillas
  ////console.log('FUNCION MOVER FICHA esta es la posicion que tienen actualemente el jugador' + jugadorActual + " posision " + acumPosiciones[jugadorActual] + " cara del dado : " + caraDado)
  let posici = acumPosiciones[jugadorActual] + caraDado;
  if (posici > 62) {

    //alert('mostar modal debes sacar el número exacto para ganar. Debes sacar ' + (posici - 62))
    numeroExacto()
  } else {
    /// mandamos a subir el contador jjugador   turnoSiguienteJugador()


    $("#imgDado").attr("src", "img/dados/d" + caraDado + ".png");
    $("#modal-dado").modal("hide");

    ////console.log("DESDE FUNCION MOVER FICHA " + "posicion del jugador actual: " + acumPosiciones[jugadorActual] + " que le pertenece al jugador " + jugadorActual + " jugador actual " + acomulacionMostrarPreguntas[jugadorActual].nombre + " conteo pregutna " + acomulacionMostrarPreguntas[jugadorActual].conteoPregunta) /// muetra el valor actual

    $(".fichaJugador" + jugadorActual).css("display", "none");
    animar(
      acumPosiciones[jugadorActual],
      acumPosiciones[jugadorActual] + caraDado
    );
    // setTimeout(() => {
    //   mostrarPregunta();
    //   // alert("parametro que pasa a mostrar pregunta  " + acumPosiciones[jugadorActual])
    // }, caraDado * 2 + "000");
    acumPosiciones[jugadorActual] = acumPosiciones[jugadorActual] + caraDado; /// suma la possicion del del jugador
  }


}

function animar(valorInicial, valorFinal) {
  let i = valorInicial;
  function mostrarSiguienteImagen() {
    const posicionActual = $("#posicionDado" + i);
    posicionActual.find("img.fichaJugador" + jugadorActual).remove();
    const nuevaImagen = $(`<img src="img/fichas/jugador${jugadorActual}.png" alt="" class="fichaJugador${jugadorActual} imgFicha animate__animated animate__pulse animate__infinite" tabindex="-1">`);
    posicionActual.append(nuevaImagen);
    nuevaImagen.focus();
    if (i < valorFinal) {
      setTimeout(() => {
        posicionActual.find("img.fichaJugador" + jugadorActual).remove();
        i++;
        setTimeout(mostrarSiguienteImagen, 200);
      }, 200);
    } else {
      mostrarPregunta();
    }
  }
  mostrarSiguienteImagen();
}


function avanzar(jugadorActual, texto, Sumar) {

  //console.log("DESDE FUNCION AVANZAR " + "posicion del jugador actual: " + acumPosiciones[jugadorActual] + " que le pertenece al jugador " + jugadorActual + " conteo pregutna " + acomulacionMostrarPreguntas[jugadorActual].conteoPregunta)

  ///se abre el modal
  $("#modal-Retrocede").modal({ backdrop: "static", keyboard: false });
  respuesta = false; //se vuelve false para que responda el siguiente jugador
  $("#modal-Retrocede").modal();
  $(".jugadorActual").html(jugadorActual);
  $(".texto").html(texto);
  $("#btn-AvanzaRetrocede").html(
    `<button class="btn btn-warning"  data-dismiss="modal" style="font-size:3.2rem;" onclick="avanzarEnCasilla(${jugadorActual}, ${Sumar})">${textoBtn}</button>`
  );
}

function avanzarEnCasilla(jugadorActual, Sumar) {
  valorInicial = acumPosiciones[jugadorActual];
  valorFinal = acumPosiciones[jugadorActual] + Sumar;
  ////console.log((acumPosiciones[jugadorActual] + Sumar));
  valorInicial = acumPosiciones[jugadorActual] + Sumar;
  //console.log(valorInicial)
  setTimeout(() => {
    $(".fichaJugador" + jugadorActual).css("display", "none");
    numFicha++;
    $("#posicionDado" + valorInicial).append(
      `<img src="img/fichas/jugador${jugadorActual}.png" alt="" class="animate__animated animate__heartBeat animate__infinite fichaJugador${jugadorActual} imgFicha">`
    );
    $("#imgDado").addClass(
      "animate__animated animate__bounce animate__infinite"
    );
    acumPosiciones[jugadorActual] = valorInicial;
    // console.log(" posicion actual : " + acumPosiciones[jugadorActual])
  }, 500);
  setTimeout(() => {
    AbrirModalPreguntas(acumPosiciones[jugadorActual]);
  }, 1000);
}

function retroceder(texto, Restar) {

  ///comentar//  console.log("DESDE FUNCION Retroceder " + "posicion del jugador actual: " + acumPosiciones[jugadorActual] + " que le pertenece al jugador " + jugadorActual + " conteo pregutna " + acomulacionMostrarPreguntas[jugadorActual].conteoPregunta + " Lo que vamos a restar a la posiscon actual " + Restar)


  ///se abre el modal
  $("#modal-Retrocede").modal({ backdrop: "static", keyboard: false });
  respuesta = false; //se vuelve false para que responda el siguiente jugador
  $("#modal-Retrocede").modal();
  $(".jugadorActual").html(jugadorActual);
  $(".texto").html(texto);
  $("#btn-AvanzaRetrocede").html(
    `<button class="btn btn-warning"  data-dismiss="modal" style="font-size:3.2rem;" onclick ="retrocederEnCasilla( ${Restar})">${textoBtn}</button>`
  );
}

function retrocederEnCasilla(Restar) {

  ///comentar//  console.log("DESDE FUNCION RetrocederCASILLA " + "posicion del jugador actual: " + acumPosiciones[jugadorActual] + " que le pertenece al jugador " + jugadorActual + " conteo pregutna " + acomulacionMostrarPreguntas[jugadorActual].conteoPregunta + " Lo que vamos a restar a la posiscon actual " + Restar)

  setTimeout(() => {
    $(".fichaJugador" + jugadorActual).css("display", "none");
    numFicha++;

    $("#posicionDado" + (acumPosiciones[jugadorActual] - Restar)).append(
      `<img src="img/fichas/jugador${jugadorActual}.png" alt="" class="animate__animated animate__heartBeat animate__infinite fichaJugador${jugadorActual} imgFicha">`
    );

    $("#imgDado").addClass(
      "animate__animated animate__bounce animate__infinite"
    );
    ///comentar//  console.log(" posicion actual desde retorecerCasilla sin restar : " + acumPosiciones[jugadorActual])
    ///comentar//  console.log(" le vamos a resatr : " + Restar)
    acumPosiciones[jugadorActual] = acumPosiciones[jugadorActual] - Restar;
    ///comentar//  console.log(" posicion actual desde retorecerCasilla : " + acumPosiciones[jugadorActual])
    turnoSiguienteJugador()
  }, 500);
  // setTimeout(() => {
  //   AbrirModalPreguntas(acumPosiciones[jugadorActual]);
  // }, 3500);
}


function f_randomico(a, b) {
  if (Math.random() < 0.5) return -1;
  else return 1;
}

function retoNoCumplido() {
  $("#modal-pregunta").modal("hide");
  $("#modal-RetoNoCumplido").modal({ backdrop: "static", keyboard: false });
  respuesta = false; //se vuelve false para que responda el siguiente jugador
  $("#modal-RetoNoCumplido").modal();
  $(".btn-retos").hide();

}

function noAvanzar() {

  ///comentar//  console.log("DESDE FUNCION NO AVAMZAR " + "posicion del jugador actual: " + acumPosiciones[jugadorActual] + " que le pertenece al jugador " + jugadorActual + " jugador actual " + acomulacionMostrarPreguntas[jugadorActual].nombre + " conteo pregutna " + acomulacionMostrarPreguntas[jugadorActual].conteoPregunta) /// muetra el valor actual

  let valorRetroceder = acumPosiciones[jugadorActual] - caraDado;
  $("#posicionDado" + valorRetroceder).append(
    `<img src="img/fichas/jugador${jugadorActual}.png" alt="" class="animate__animated animate__heartBeat animate__infinite fichaJugador${jugadorActual} imgFicha">`
  );
  $("#posicionDado" + acumPosiciones[jugadorActual])
    .find("img.fichaJugador" + jugadorActual)
    .remove();

  ///7// RESTAMOS EL VALOR AL NUMERO DEL DADO PARA VOLVER A LACASILLA ANTERIOR
  acumPosiciones[jugadorActual] = acumPosiciones[jugadorActual] - caraDado;
  restrablecerCronometro();
  $("#opcionMultiple").html("");
  turnoSiguienteJugador();
}

function retoCumplido() {
  ///comentar//  console.log('esta es la posicion que tienen actualemente el jugador' + jugadorActual + " posision " + acumPosiciones[jugadorActual])
  if (acumPosiciones[jugadorActual] == 62) {
    //alert('mostrar modal ganaste')
    Ganaste(jugadorActual)
  }
  $(".btn-retos").hide();
  ///comentar//  console.log("DESDE FUNCION RETO CUMPLIDO " + "posicion del jugador actual: " + acumPosiciones[jugadorActual] + " que le pertenece al jugador " + jugadorActual + " jugador actual " + acomulacionMostrarPreguntas[jugadorActual].nombre + " conteo pregutna " + acomulacionMostrarPreguntas[jugadorActual].conteoPregunta) /// muetra el valor actual

  $("#MensajePregunta").html("Lo has logrado, sigue asi!");
  setTimeout(() => {
    $("#modal-pregunta").modal("hide");
  }, 1000);
  $("#imgDado").addClass("animate__animated animate__bounce animate__infinite");
  restrablecerCronometro();
  $("#opcionMultiple").html("");
  turnoSiguienteJugador();
}

function validarRespuestaSeleccion(opcion) {
  detenerCronometro();
  $("#opcionMultiple").addClass('desabilitar')

  ///comentar//  console.log("DESDE FUNCION MOVER FICHA " + "posicion del jugador actual: " + acumPosiciones[jugadorActual] + " que le pertenece al jugador " + jugadorActual + " jugador actual " + acomulacionMostrarPreguntas[jugadorActual].nombre + " conteo pregutna " + acomulacionMostrarPreguntas[jugadorActual].conteoPregunta + " elemento seleccionado " + opcion) /// muetra el valor actual

  setTimeout(() => {
    let Seleccionado = opcion.toLowerCase();
    let opcSel = Seleccionado.replace(/(\r\n|\n|\r)/gm, "");
    let opcionCorrectaSelect = RespuestaCorrectaSeleccion.toLowerCase();
    let resCorrecta = opcionCorrectaSelect.replace(/(\r\n|\n|\r)/gm, "");
    if (opcSel == resCorrecta) {
      retoCumplido();
    } else {
      retoNoCumplido();
    }
  }, 500);

}

function validarVarios(triviaRespuestasVarias, triviaRespuestasVariasCorrectas) {
  $(".btn-terminar_varias").hide();
  detenerCronometro();
  let core = 0;
  // console.log(triviaRespuestasVarias);
  for (let i = 0; i < triviaRespuestasVarias[0].length; i++) {
    let tienePintar = $("#opcVarias" + [i] + "").hasClass("pintarOpcioTrivia");
    let tieneCorrecta = $("#opcVarias" + [i] + "").hasClass("correcta");
    if (tienePintar) {
      if (tieneCorrecta) {
        core++;
        $("#opcVarias" + [i] + "").addClass("bien10");
      } else {
        core--;
        $("#opcVarias" + [i] + "").addClass("mal10");
      }
    }
  }
  let total = core / triviaRespuestasVariasCorrectas;
  // console.log("core: " + core + "// cantidad de pregutnas buenas" + triviaRespuestasVariasCorrectas + " total _: " + total)
  setTimeout(() => {
    if (total == 1) {
      retoCumplido();
    } else {
      retoNoCumplido();
    }
  }, 3000);

  // console.log(triviaRespuestasVarias.length + "dfdfd " + core + " dffdf " + total)
}


document.addEventListener('DOMContentLoaded', function () {
  // $(".opcionPre").click(function () {
  //   if ($(this).hasClass('pintarOpcio')) {
  //     $(this).removeClass('pintarOpcio');
  //   } else {
  //     $(this).addClass('pintarOpcio');
  //   }
  // });
  $(".opcionPre").on("click touchstart", function (event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del evento

    if ($(this).hasClass("pintarOpcioTrivia")) {
      $(this).removeClass("pintarOpcioTrivia");
    } else {
      $(this).addClass("pintarOpcioTrivia");
    }
  });
});



function Ganaste() {
  ///comentar//  console.log("DESDE FUNCION ganaste " + "posicion del jugador actual: " + acumPosiciones[jugadorActual] + " que le pertenece al jugador " + jugadorActual + " conteo pregutna " + acomulacionMostrarPreguntas[jugadorActual].conteoPregunta)

  ///se abre el modal
  $("#modal-Ganaste").modal({ backdrop: "static", keyboard: false });
  respuesta = false; //se vuelve false para que responda el siguiente jugador
  $("#modal-Ganaste").modal();
  $("#jugadorGanador").html(jugadorActual)
}


function numeroExacto() {
  var valorExacto = (62 - acumPosiciones[jugadorActual])
  //alert('vlor que falta es de : ' + valorExacto)
  $("#modal-dado").modal("hide");
  ///comentar//  console.log("DESDE FUNCION ganaste " + "posicion del jugador actual: " + acumPosiciones[jugadorActual] + " que le pertenece al jugador " + jugadorActual + " conteo pregutna " + acomulacionMostrarPreguntas[jugadorActual].conteoPregunta)

  ///se abre el modal
  $("#modal-NumeroExacto").modal({ backdrop: "static", keyboard: false });
  respuesta = false; //se vuelve false para que responda el siguiente jugador
  $("#modal-NumeroExacto").modal();
  $("#jugadorExacto").html(jugadorActual)
  $("#numExacto").html(valorExacto)
}


$("#btn-Modal-Jugadores").html('Jugadores')
$("#btn-Modal-Jugadores").addClass('btn-success')

function MostrarOcultarJugadores() {
  var cajaJugadores = $("#caja-Jugadores");
  if (cajaJugadores.hasClass('mostrar')) {
    cajaJugadores.removeClass('mostrar');
    $("#btn-Modal-Jugadores").html('Jugadores')
    $("#btn-Modal-Jugadores").removeClass('btn-danger')
    $("#btn-Modal-Jugadores").addClass('btn-success')
  } else {
    cajaJugadores.addClass('mostrar');
    $("#btn-Modal-Jugadores").html('Ocultar')
    $("#btn-Modal-Jugadores").removeClass('btn-success')
    $("#btn-Modal-Jugadores").addClass('btn-danger')
  }
}
