function mostrar() {
    document.getElementById('divcontenedor').style.display = "block";
    document.getElementById('btnocultar').style.display = "block";
    document.getElementById('btnmostrar').style.display = "none";
    document.getElementById('divactiviades').style.display = "none";

}

function ocultar() {
    document.getElementById('divcontenedor').style.display = "none";
    document.getElementById('btnocultar').style.display = "none";
    document.getElementById('btnmostrar').style.display = "block";
    document.getElementById('divactiviades').style.display = "block";
    $("#audio1")[0].pause();
    $("#audio2")[0].pause();
}