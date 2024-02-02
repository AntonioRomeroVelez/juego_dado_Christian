
// var evaluoLiterales = [
//     'esta es una pregunta',
//     'otra pregutna'

// ]
$("#evaluoProceso").html(
    `<img src="img/ico_evaluo_mi_proceso.png" alt=""><b>Marca</b> según corresponda.
    <div align="center">
        <table  id="opcionesEvaluo">
            <tr>
                <td style="min-width:400px"></td>
                <td><div class="titulo_evaluo"> Lo logré</div></td>
                <td><div class="titulo_evaluo"> Lo lograré</div></td>
                <td><div class="titulo_evaluo"> Debo mejorar</div></td>
            </tr>
        </table>
    </div>`
)
evaluoLiterales.forEach((element, index) => {
    let valor =
        `<tr>
            <td><div class="enunciado_evaluo">${element}</div></td>
            <td><div class="caja_evaluo evaluo${index}" data-anijs="if: click, do: bounceIn animated"></div></td>
            <td><div class="caja_evaluo evaluo${index}" data-anijs="if: click, do: bounceIn animated"></div></td>
            <td><div class="caja_evaluo evaluo${index}" data-anijs="if: click, do: bounceIn animated"></div></td>
        </tr>`
    $("#opcionesEvaluo").append(valor)
});

$(".caja_evaluo").on("click", function () {
    var obtenerClass = $(this).attr("class").split(' ')[1];
    $("." + obtenerClass).text("");
    $(this).text("X");
});
