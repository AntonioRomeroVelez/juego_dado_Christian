var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

p1act = [
    '<div class="div1"><input value="rápido" readonly="" class="textocorto"><input id="p1var0" class="textocorto"></div>',
    '<div class="div1"><input value="rico" readonly="" class="textocorto"><input id="p1var1" class="textocorto"></div>',
    '<div class="div1"><input value="viejo" readonly="" class="textocorto"><input id="p1var2" class="textocorto"></div>',
    '<div class="div1"><input value="franco" readonly="" class="textocorto"><input id="p1var3" class="textocorto"></div>',
];
p1act.sort(f_randomico);
$("#p1act").html(p1act);

function pregunta1() {
    let core = 0;
    let p1vec = ['rapidez', 'riqueza', 'vejez', 'franqueza'];
    for (var i = 0; i < p1vec.length; i++) {
        var p1res = sinespacios($('#p1var' + [i] + '').val().toLowerCase());
        if (p1vec[i] == p1res) {
            core++;
            $('#p1var' + [i] + '').addClass('bien');
        } else {
            $('#p1var' + [i] + '').addClass('mal');
        }
    }
    let total1 = (core / 4) * 1;
    if (total1 < 0) {
        total1 = 0;
        $('#pre1a').val(parseFloat(total1).toFixed(2));
    } else {
        $('#pre1a').val(parseFloat(total1).toFixed(2));
    }
}
p2act = [
    '<div class="div2"><input value="zapato" readonly="" class="textocorto"><input id="p2var0" class="textocorto"></div>',
    '<div class="div2"><input value="carro" readonly="" class="textocorto"><input id="p2var1" class="textocorto"></div>',
    '<div class="div2"><input value="codo" readonly="" class="textocorto"><input id="p2var2" class="textocorto"></div>',
    '<div class="div2"><input value="regla" readonly="" class="textocorto"><input id="p2var3" class="textocorto"></div>',
];
p2act.sort(f_randomico);
$("#p2act").html(p2act);

function pregunta2() {
    let core = 0;
    let p2vec = ['zapatazo', 'carrazo', 'codazo', 'reglaza'];
    for (var i = 0; i < p2vec.length; i++) {
        var p2res = sinespacios($('#p2var' + [i] + '').val().toLowerCase());
        if (p2vec[i] == p2res) {
            core++;
            $('#p2var' + [i] + '').addClass('bien');
        } else {
            $('#p2var' + [i] + '').addClass('mal');
        }
    }
    let total2 = (core / 4) * 1;
    if (total2 < 0) {
        total2 = 0;
        $('#pre2a').val(parseFloat(total2).toFixed(2));
    } else {
        $('#pre2a').val(parseFloat(total2).toFixed(2));
    }
}

function pregunta3() {
    let core = unir1_1();
    let total3 = (core / 8) * 1.25;
    if (total3 < 0) {
        total3 = 0;
        $('#pre3a').val(parseFloat(total3).toFixed(2));
    } else {
        $('#pre3a').val(parseFloat(total3).toFixed(2));
    }
}

p4act = [
    '<div class="div4"><div><img src="img/i1_p77_act4.png" alt=""></div><div class="div4contenedor"><input type="text" class="texto20" style="top:-10px"><input type="text" class="texto20" style="top:40px"><input type="text" class="texto20" style="top:90px"></div></div>',
    '<div class="div4"><div><img src="img/i2_p77_act4.png" alt=""></div><div class="div4contenedor"><input type="text" class="texto20" style="top:-10px"><input type="text" class="texto20" style="top:40px"><input type="text" class="texto20" style="top:90px"></div></div>',
    '<div class="div4"><div><img src="img/i3_p77_act4.png" alt=""></div><div class="div4contenedor"><input type="text" class="texto20" style="top:-10px"><input type="text" class="texto20" style="top:40px"><input type="text" class="texto20" style="top:90px"></div></div>',
    '<div class="div4"><div><img src="img/i4_p77_act4.png" alt=""></div><div class="div4contenedor"><input type="text" class="texto20" style="top:-10px"><input type="text" class="texto20" style="top:40px"><input type="text" class="texto20" style="top:90px"></div></div>',
    '<div class="div4"><div><img src="img/i5_p77_act4.png" alt=""></div><div class="div4contenedor"><input type="text" class="texto20" style="top:-10px"><input type="text" class="texto20" style="top:40px"><input type="text" class="texto20" style="top:90px"></div></div>',
];
p4act.sort(f_randomico);
$("#p4act").html(p4act);

p5act = [
    '<div class="div5"><img src="img/i1_p78_act5.png" alt=""><textarea class="form-control fuente1" rows="2" placeholder="Escribe"></textarea></div>',
    '<div class="div5"><img src="img/i2_p78_act5.png" alt=""><textarea class="form-control fuente1" rows="2" placeholder="Escribe"></textarea></div>',
    '<div class="div5"><img src="img/i3_p78_act5.png" alt=""><textarea class="form-control fuente1" rows="2" placeholder="Escribe"></textarea></div>',
    '<div class="div5"><img src="img/i4_p78_act5.png" alt=""><textarea class="form-control fuente1" rows="2" placeholder="Escribe"></textarea></div>',
    '<div class="div5"><img src="img/i5_p78_act5.png" alt=""><textarea class="form-control fuente1" rows="2" placeholder="Escribe"></textarea></div>',
    '<div class="div5"><img src="img/i6_p78_act5.png" alt=""><textarea class="form-control fuente1" rows="2" placeholder="Escribe"></textarea></div>',
];
p5act.sort(f_randomico);
$("#p5act").html(p5act);



p6act = [
    '<div class="p6var0 div6" style=" border: solid 1px #35BCBE;">des<select class="p6sel selectbox1 no-arrow" id="p6var0" style="border:none;border-bottom: solid 1px silver;padding:0px 3px;border-radius:0px;text-align-last:center;"></select></div>',
    '<div class="p6var1 div6" style=" border: solid 1px #F253B1;"><select class="p6sel selectbox1 no-arrow" id="p6var1" style="border:none;border-bottom: solid 1px silver;padding:0px 3px;border-radius:0px;text-align-last:center;"></select>tarra</div>',
    '<div class="p6var2 div6" style=" border: solid 1px #B379C2;">bilin<select class="p6sel selectbox1 no-arrow" id="p6var2" style="border:none;border-bottom: solid 1px silver;padding:0px 3px;border-radius:0px;text-align-last:center;"></select></div>',
    '<div class="p6var3 div6" style=" border: solid 1px #F89E5F;">pin<select class="p6sel selectbox1 no-arrow" id="p6var3" style="border:none;border-bottom: solid 1px silver;padding:0px 3px;border-radius:0px;text-align-last:center;"></select>no</div>',
    '<div class="p6var4 div6" style=" border: solid 1px #B2DB4C;">enjua<select class="p6sel selectbox1 no-arrow" id="p6var4" style="border:none;border-bottom: solid 1px silver;padding:0px 3px;border-radius:0px;text-align-last:center;"></select></div>',
    '<div class="p6var5 div6" style=" border: solid 1px #A2E0F0;">á<select class="p6sel selectbox1 no-arrow" id="p6var5" style="border:none;border-bottom: solid 1px silver;padding:0px 3px;border-radius:0px;text-align-last:center;"></select>la</div>'
];
p6act.sort(f_randomico);
$("#p6act").html(p6act);

function pregunta6() {
    let core = 0;
    p6vec = ['güe', 'gui', 'güe', 'güi', 'gue', 'gui'];
    for (let i = 0; i < p6vec.length; i++) {
        let valor = $("#p6var" + [i] + "").val();
        // let valor6 = sinespacios(valor);
        // console.log(valor6)
        if (valor == p6vec[i]) {
            $(".p6var" + [i] + "").addClass('bien'); core++;
        } else {
            $(".p6var" + [i] + "").addClass('mal');
        }
    }
    let total6 = (core / 1) * 1.25;
    if (total6 < 0) {
        total6 = 0;
        $('#pre6a').val(parseFloat(total6).toFixed(2));
    } else {
        $('#pre6a').val(parseFloat(total6).toFixed(2));
    }
}

p7act = [
    '<li style="margin:10px 0px;">La <select class="selectbox1 no-arrow p7sel" id="p7var0"></select> humana es una facultad de la mente que permite pensar, aprender, diseñar, etc.</li>',
    '<li style="margin:10px 0px;">Ten paciencia, no seas tan <select class="selectbox1 no-arrow p7sel" id="p7var1"></select>.</li>',
    '<li style="margin:10px 0px;">El estudiante <select class="selectbox1 no-arrow p7sel" id="p7var2"></select> siempre se esfuerza y entrega sus tareas a tiempo.</li>',
    '<li style="margin:10px 0px;">Los paramédicos llegan en la ambulancia para atender la <select class="selectbox1 no-arrow p7sel" id="p7var3"></select>.</li>',
];
p7act.sort(f_randomico);
$("#p7act").html(p7act);


function pregunta7() {
    let core = 0;
    p7vec = ['inteligencia', 'exigente', 'diligente', 'emergencia',];
    for (var i = 0; i < p7vec.length; i++) {
        var p7res = $('#p7var' + [i] + '').val();
        if (p7vec[i] == p7res) {
            core++;
            $('#p7var' + [i] + '').addClass('bien');
        } else {
            $('#p7var' + [i] + '').addClass('mal');
        }
    }
    let total7 = (core / 1) * 1.25;
    // alert(total7)
    if (total7 < 0) {
        total7 = 0;
        $('#pre7a').val(parseFloat(total7).toFixed(2));
    } else {
        $('#pre7a').val(parseFloat(total7).toFixed(2));
    }
}

p8act = [
    '<div class="div8"><div style="background-color: rgb(188, 236, 250);">bailar</div><input class="textocorto"><input class="textocorto"></div>',
    '<div class="div8"><div style="background-color: rgb(250, 246, 188);">hermoso</div><input class="textocorto"><input class="textocorto"></div>',
    '<div class="div8"><div style="background-color: rgb(190, 250, 188);">beber</div><input class="textocorto"><input class="textocorto"></div>',
    '<div class="div8"><div style="background-color: rgb(250, 188, 242);">caminar</div><input class="textocorto"><input class="textocorto"></div>',
    '<div class="div8"><div style="background-color: rgb(250, 211, 188);">bailar</div><input class="textocorto"><input class="textocorto"></div>',
];
p8act.sort(f_randomico);
$("#p8act").html(p8act);

p9act = [
    '<div class="div9"><div style="background-color: #00ACEF !important;color:white !important">alto</div><div id="p9adiv" class="caja9" style="margin-top:8px;"></div></div>',
    '<div class="div9"><div style="background-color: #00AAAD !important;color:white !important">feliz</div><div id="p9bdiv" class="caja9" style="margin-top:8px;"></div></div>',
    '<div class="div9"><div style="background-color: #D006C1 !important;color:white !important">iniciar</div><div id="p9cdiv" class="caja9" style="margin-top:8px;"></div></div>',
    '<div class="div9"><div style="background-color: #F8A158 !important;color:white !important">generoso</div><div id="p9ddiv" class="caja9" style="margin-top:8px;"></div></div>',
];
p9act.sort(f_randomico);
$("#p9act").html(p9act);


var p9avec = ['bajo', 'elevado', 'grande', 'largo'];
p9avec.sort(f_randomico)
var contenedor = document.getElementById('p9adiv'); // Reemplaza 'contenedor' con el ID de tu contenedor
p9avec.forEach(function (elemento, index) {
    var div = document.createElement('div');
    div.className = 'p9aopcion p9opc'; // Reemplaza 'mi-clase' con la clase que desees
    div.setAttribute('data-anijs', 'if: click, do: flipInX animated'); // Reemplaza 'data-atributo' y 'valor' con los nombres que desees
    // Asignar un ID al div
    div.id = 'p9avar' + index; // Asigna un ID único a cada div
    // Agregar el contenido del elemento al div (opcional)
    div.textContent = elemento;
    // Agregar el div al contenedor
    contenedor.appendChild(div);
});

var p9bvec = ['contento', 'triste', 'alegre', 'risueño'];
p9bvec.sort(f_randomico)
var contenedor = document.getElementById('p9bdiv');
p9bvec.forEach(function (elemento, index) {
    var div = document.createElement('div');
    div.className = 'p9bopcion p9opc';
    div.setAttribute('data-anijs', 'if: click, do: flipInX animated');
    div.id = 'p9bvar' + index;
    div.textContent = elemento;
    contenedor.appendChild(div);
});

var p9cvec = ['comenzar', 'consumar', 'finalizar', 'empezar'];
p9cvec.sort(f_randomico)
var contenedor = document.getElementById('p9cdiv');
p9cvec.forEach(function (elemento, index) {
    var div = document.createElement('div');
    div.className = 'p9copcion p9opc';
    div.setAttribute('data-anijs', 'if: click, do: flipInX animated');
    div.id = 'p9cvar' + index;
    div.textContent = elemento;
    contenedor.appendChild(div);
});

var p9dvec = ['caritativo', 'dadivoso', 'altruista', 'egoísta'];
p9dvec.sort(f_randomico)
var contenedor = document.getElementById('p9ddiv');
p9dvec.forEach(function (elemento, index) {
    var div = document.createElement('div');
    div.className = 'p9dopcion p9opc';
    div.setAttribute('data-anijs', 'if: click, do: flipInX animated');
    div.id = 'p9dvar' + index;
    div.textContent = elemento;
    contenedor.appendChild(div);
});




function pregunta9() {
    let core = 0;
    let incorea = 0;
    for (var i = 0; i < 4; i++) {
        if ($('#p9avar' + [i] + '').hasClass("encerrar")) {
            if ($('#p9avar' + [i] + '').text() == "bajo") {
                core++;
                $('#p9avar' + [i] + '').addClass('bien3');
            } else {
                $('#p9avar' + [i] + '').addClass('mal3');
            }
        } else {
            incorea++;
        }
        if (incorea == 4) {
            for (var i = 0; i < 4; i++) {
                $('#p9avar' + [i] + '').addClass('mal3');
            }
        }
    }

    let incoreb = 0;
    for (var i = 0; i < 4; i++) {
        if ($('#p9bvar' + [i] + '').hasClass("encerrar")) {
            if ($('#p9bvar' + [i] + '').text() == "triste") {
                core++;
                $('#p9bvar' + [i] + '').addClass('bien3');
            } else {
                $('#p9bvar' + [i] + '').addClass('mal3');
            }
        } else {
            incoreb++;
        }
        if (incoreb == 4) {
            for (var i = 0; i < 4; i++) {
                $('#p9bvar' + [i] + '').addClass('mal3');
            }
        }
    }

    let incorec = 0;
    for (var i = 0; i < 4; i++) {
        if ($('#p9cvar' + [i] + '').hasClass("encerrar")) {
            if ($('#p9cvar' + [i] + '').text() == "finalizar") {
                core++;
                $('#p9cvar' + [i] + '').addClass('bien3');
            } else {
                $('#p9cvar' + [i] + '').addClass('mal3');
            }
        } else {
            incorec++;
        }
        if (incorec == 4) {
            for (var i = 0; i < 4; i++) {
                $('#p9cvar' + [i] + '').addClass('mal3');
            }
        }
    }

    let incored = 0;
    for (var i = 0; i < 4; i++) {
        if ($('#p9dvar' + [i] + '').hasClass("encerrar")) {
            if ($('#p9dvar' + [i] + '').text() == "egoísta") {
                core++;
                $('#p9dvar' + [i] + '').addClass('bien3');
            } else {
                $('#p9dvar' + [i] + '').addClass('mal3');
            }
        } else {
            incored++;
        }
        if (incored == 4) {
            for (var i = 0; i < 4; i++) {
                $('#p9dvar' + [i] + '').addClass('mal3');
            }
        }
    }
    tpre9 = ((core / 4) * 1.25);
    $("#pre9a").val(parseFloat(tpre9).toFixed(2));
}


function total() {
    $("#pre4a").val('');
    $("#pre5a").val('');
    $("#pre8a").val('');
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta6();
    pregunta7();
    pregunta9();
    var pre1a = document.getElementById('pre1a').value;
    var pre2a = document.getElementById('pre2a').value;
    var pre3a = document.getElementById('pre3a').value;
    var pre6a = document.getElementById('pre6a').value;
    var pre7a = document.getElementById('pre7a').value;
    var pre9a = document.getElementById('pre9a').value;
    cor = parseFloat(pre1a) + parseFloat(pre2a) + parseFloat(pre3a) + parseFloat(pre6a) + parseFloat(pre7a) + parseFloat(pre9a);
    Calculo_nota();
    EndActivity();
}

$(".p2opc1").click(function () {
    $(this).css('background-color', colorSeleccionado);
    $(this).siblings().css('background-color', '#ffffff')
    $(this).addClass('si');
    $(this).siblings().removeClass('si')
})

$(".p2opc2").click(function () {
    $(this).css('background-color', colorSeleccionado);
    $(this).siblings().css('background-color', '#ffffff')
    $(this).addClass('si');
    $(this).siblings().removeClass('si')
})
$(".p2opc3").click(function () {
    $(this).css('background-color', colorSeleccionado);
    $(this).siblings().css('background-color', '#ffffff')
    $(this).addClass('si');
    $(this).siblings().removeClass('si')
})
$(".p2opc4").click(function () {
    $(this).css('background-color', colorSeleccionado);
    $(this).siblings().css('background-color', '#ffffff')
    $(this).addClass('si');
    $(this).siblings().removeClass('si')
})


var p9aopcion = document.getElementsByClassName("p9aopcion");
for (var i = 0; i < p9aopcion.length; i++) {
    p9aopcion[i].addEventListener("click", function (event) {
        $(".p9aopcion").removeClass('encerrar')
        event.target.classList.add("encerrar");
    });
}

var p9bopcion = document.getElementsByClassName("p9bopcion");
for (var i = 0; i < p9bopcion.length; i++) {
    p9bopcion[i].addEventListener("click", function (event) {
        $(".p9bopcion").removeClass('encerrar')
        event.target.classList.add("encerrar");
    });
}


var p9copcion = document.getElementsByClassName("p9copcion");
for (var i = 0; i < p9copcion.length; i++) {
    p9copcion[i].addEventListener("click", function (event) {
        $(".p9copcion").removeClass('encerrar')
        event.target.classList.add("encerrar");
    });
}


var p9dopcion = document.getElementsByClassName("p9dopcion");
for (var i = 0; i < p9dopcion.length; i++) {
    p9dopcion[i].addEventListener("click", function (event) {
        $(".p9dopcion").removeClass('encerrar')
        event.target.classList.add("encerrar");
    });
}


p6sel = [
    '<option>gue</option>',
    '<option>gui</option>',
    '<option>güe</option>',
    '<option>güi</option>'
];
p6sel.sort(f_randomico);
$(".p6sel").html('<option>----</option>' + p6sel + "");

p7sel = [
    '<option>emergencia</option>',
    '<option>diligente</option>',
    '<option>inteligencia</option>',
    '<option>exigente</option>'
];
p7sel.sort(f_randomico);
$(".p7sel").html('<option>----</option>' + p7sel + "");



