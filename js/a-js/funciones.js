// var ayudasTexto = [
//    'Selecciona el color para la línea',
// ]
ayudasTexto.forEach((element, index) => {
   let valor = `En la actividad ${index + 1}. ${element} <br>`
   $("#ayudasTexto").append(valor)
});

