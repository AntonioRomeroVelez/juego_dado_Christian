function validNumero(num1,num2,allowFloat=0){
    if(allowFloat==1){
        var regex = new RegExp("^.|["+num1+"-"+num2+"]+$");
    }else{
        var regex = new RegExp("^["+num1+"-"+num2+"]+$");
    }
    
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
}

function validMaxIngreso(elemento,num){
    if(elemento.value>num){
        alert('La calificación no puede ser mayor a '+num)
        elemento.value= "";
        return 1;
    }else{
        
        return 0;
        
    }
}
function separateString(stringToSeparate){
    var separator = " ";
    var stringSplited = [];
    stringSplited = stringToSeparate.split(separator);
    return stringSplited;
}

function play(idSound) {
        sounds = document.getElementsByTagName('audio');
        console.log($('input'))
        $('.ico').addClass("glyphicon-headphones")
        $('.ico').removeClass("glyphicon-stop")

        for (var i = 0; i < sounds.length; i++) {
            sounds[i].pause();
            sounds[i].currentTime = 0;
            //                    $('input').val('play')

        }
        if ($('#opt' + idSound).val() == 'play') {
            $('#opt' + idSound).val('stop')
            $('#ico' + idSound).removeClass("glyphicon-headphones")
            $('#ico' + idSound).addClass("glyphicon-stop")
            document.getElementById(idSound).play();
        } else {
            $('#opt' + idSound).val('play')
            $('#ico' + idSound).addClass("glyphicon-stop")
            $('#ico' + idSound).removeClass("glyphicon-stop")
        }
        $.each($('.btn-warning input'), function(index, value) {
            if ($(value).attr('id') != 'opt' + idSound) {
                $(value).val('play')

            }
        })
    }
