let tiempoRestante;
let intervalo;

function iniciarCronometro(valor_segundos, tipo) {
   // $("#iniciarCro").addClass("desabilitar");
   $("#iniciarCro").hide();

   if (tipo == "simple") {
      $(".btn-retos").show();
   } else if (tipo == "multiple") {
      $("#opcionMultiple").show();
   } else if (tipo == "reto") {
      $(".btn-retos").show();
   }



   // Establecer la duración del cronómetro en segundos (por ejemplo, 5 minutos)
   const duracionTotal = valor_segundos;

   // Inicializar el tiempo restante
   tiempoRestante = duracionTotal;

   // Actualizar el contador inicialmente
   actualizarContador();

   // Deshabilitar el botón de inicio
   document.querySelector("button").disabled = true;

   // Iniciar el intervalo para actualizar el contador cada segundo
   intervalo = setInterval(function () {
      tiempoRestante--;

      // Verificar si el tiempo ha llegado a cero
      if (tiempoRestante <= 0) {
         detenerCronometro();
         $("#contador").html("00:00");
         retoNoCumplido();
      } else {
         // Actualizar el contador
         actualizarContador();
      }
   }, 1000);
}

function detenerCronometro() {
   // Detener el intervalo
   clearInterval(intervalo);

   // Habilitar el botón de inicio
   document.querySelector("button").disabled = false;
}

function actualizarContador() {
   const minutos = Math.floor(tiempoRestante / 60);
   const segundos = tiempoRestante % 60;

   // Formatear el tiempo en MM:SS
   const tiempoFormateado = `${minutos < 10 ? "0" : ""}${minutos}:${segundos < 10 ? "0" : ""
      }${segundos}`;

   // Actualizar el contenido del contador
   document.getElementById("contador").innerText = tiempoFormateado;
}

function restrablecerCronometro() {
   clearInterval(intervalo);
   detenerCronometro();
}
