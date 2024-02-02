// function mostrar() {
//     document.getElementsByClassName('modalcuento').style.display = "block";
//     document.getElementById('btnocultar').style.display = "block";
//     document.getElementById('btnmostrar').style.display = "none";
//     document.getElementsByClassName('divactividades').style.display = "none";
//     document.getElementsByClassName('modalrima').style.display = "none";

// }

// function ocultar() {
//     document.getElementsByClassName('modalcuento').style.display = "none";
//     document.getElementById('btnocultar').style.display = "none";
//     document.getElementById('btnmostrar').style.display = "block";
//     document.getElementsByClassName('divactividades').style.display = "block";
// }

function mostrar() {
    $('.modalcuento').css('display', 'block');
    document.getElementById('btnocultar').style.display = "block";
    document.getElementById('btnmostrar').style.display = "none";
    $('.divactividades').css('display', 'none');

}

function ocultar() {
    $('.modalcuento').css('display', 'none');
    document.getElementById('btnocultar').style.display = "none";
    document.getElementById('btnmostrar').style.display = "block";
    $('.divactividades').css('display', 'block');
}