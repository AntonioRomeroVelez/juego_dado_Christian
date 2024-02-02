var colorSeleccionado;
$(".btn-color").on("click", function () {
    colorSeleccionado = $(this).css("background-color");
    console.log(colorSeleccionado);
    $(".botepintura")[0].style.setProperty(
        "background-color",
        colorSeleccionado,
        "important"
    );
});

$(".pintarimg").on("click", function () {
    $(this)[0].style.setProperty(
        "background-color",
        colorSeleccionado,
        "important"
    );
});