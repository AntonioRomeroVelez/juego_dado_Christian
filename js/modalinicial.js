var myVideo = document.getElementById("video1");
var audio1 = document.getElementById("audio1");
var audio2 = document.getElementById("audio2");

function makeSmall() {
    myVideo.width = 320;
}

function makeNormal() {
    myVideo.width = 420;
}

$('#video1').on('loadstart', function(event) {
    $(this).addClass('bkg');
    $(this).attr("poster", "img/gifcarga.gif");
});
$('#video1').on('canplay', function(event) {
    $(this).removeClass('bkg');
    $(this).removeAttr("poster");
});

function getFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

document.getElementById("PantallaFullScreen").addEventListener("click", function(e) {
    getFullscreen(document.getElementById("video1"));
}, false);

$(".close").click(function() {
    $("#video1")[0].pause();
    return true;
});



function pauseaudiomodal() {
    audio1.pause();
    audio2.pause();
}

//Pausar un audio cuando se repoduce otra
document.addEventListener(
    "play",
    function(e) {
        var audios = document.getElementsByTagName("audio");
        for (var i = 0, len = audios.length; i < len; i++) {
            if (audios[i] != e.target) {
                audios[i].pause();
            }
        }
    },
    true
);

// Close Bootstrap Modal.


/*
$('.close, .save, .cancel').on('click', function(e){
    e.preventDefault();
    var $this = $(this);
    // get identifier modal window.
    var modal = $this.data('custom');

   $('#'+modal).modal('hide');
  // check tag html5 for video and audio.
   if (($('#id-'+modal).prop("tagName") == 'AUDIO') 
   || ($('#id-'+modal).prop("tagName") == 'VIDEO')) {
       if (!$('#el-'+modal).get(0).paused) {
              $('#el-'+modal)[0].pause();
       }
   }
});

*/


