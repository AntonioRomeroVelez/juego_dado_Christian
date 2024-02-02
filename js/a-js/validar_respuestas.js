/* ====== Validar palabras aleatoreas ====== */
function validarAleatoreas(respuestas, id) {
  let core = 0;
  for (let i = 0; i < respuestas.length; i++) {
    var rc = respuestas.indexOf($(`${id}${i}`).val()?.toLowerCase() ?? "");
    if ($(`${id}${i}`).val()?.toLowerCase() === "" || rc === -1) {
      $(`${id}${i}`).addClass("mal");
    } else {
      if (
        sinespacios($(`${id}${i}`).val()?.toLowerCase() ?? "") ===
        sinespacios(respuestas[rc] ?? "")
      ) {
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

/* ====== Validar palabras exactas mayusculas y minusculas ====== */
function validarExactasMayusMinu(respuestas, id) {
  let core = 0;
  for (let i = 0; i < respuestas.length; i++) {
    if ($(`${id}${i}`).val() === "") {
      $(`${id}${i}`).addClass("mal");
    } else {
      var val = $(`${id}${i}`).val();
      if (sinespacios(val) === sinespacios(respuestas[i])) {
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

