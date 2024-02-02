function unir1_1() {
    var total1a1 = 0;
    for (var i = 0; i < arrayElemFin.length; i++) {
        let idinicio = $("#arrastre" + [i] + "").attr('id');
        let validarfin = $("#finarrastre" + [i] + "").attr('validarlinea');
        // console.log(idinicio + ", " + validarfin)
        if ($("#arrastre" + [i] + "").attr('id') == $("#finarrastre" + [i] + "").attr('validarlinea')) {
            $("#validar" + [i] + "").addClass('bien10');
            total1a1++;
        } else {
            $("#validar" + [i] + "").addClass('mal10');
        }
    }
    return total1a1;
}

