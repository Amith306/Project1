
// $(window).load(function () {
//     $("#bounce").css({'display':'none'});
// });

/*------------block infnit-----------------------------*/

/*---------start level----------------------------*/
var block = $('#img3');
var d1 = $('#block1');
var d2 = $('#block2');
var d3 = $('#block3');
var d4 = $('#block4');
var d5 = $('#block5');
$("#btnstart").click(function () {
    $("#btnstart").css({"display":"none"});
    $("#imagee").css({"display":"none"});
    $("#level1").css({"display":"block"});
    $("#gameover").css({"display":"none"});

   // setInterval(check,500);

// $(window).load(function () {
//  timetGenarate();
// });



setTimeout(ddd,15000);
function ddd() {
    alert("dfdf")
}
        var interval = setInterval(function () {
            if (collision(block,d1)) {gameOver();}
            if (collision(block,d2)) {gameOver();}
            if (collision(block,d3)) {gameOver();}
            if (collision(block,d4)) {gameOver();}
            if (collision(block,d5)) {gameOver();}

            function gameOver() {

                $("#gameover").css({'display':'inline-block'});
                $("#btnOver").css({'display':'inline-block'});
                $("#imagee").css({'display':'inline-block'});
                $("#bounce").css({'display':'none'});

                $("#bounce").stop(true);
                $("#section1").stop(true);
                $("#section2").stop(true);
                $("#section3").stop(true);
                $("#section4").stop(true);
                $("#section5").stop(true);
                clearInterval(interval);
            }
        });

    });

$('#btnOver').click(function () {
    location.reload();
})



var a= 500;
var bounce = document.querySelector('#img3');



/* space button*/

window.addEventListener('load',()=>{
    bounce.style.position= 'absolute';
bounce.style.left='300px';
bounce.style.top='600px';
});

  $(window).keypress(function (e) {
      if (e.which == 32){
          bounce.style.top=parseInt(bounce.style.top) -a + 'px';
           setTimeout(down,100);
          // check();
      }
  });



  function down() {
      bounce.style.top=parseInt(bounce.style.top) +a + 'px';
  }

function gameOver() {
    // $('#level1').css({'display':'none'});
    // $('#gameover').css({'display':'block'});
    alert("finish");
}

/*function up(e) {
    if (e.keyCode == '32') {
        $('#bounce').css('top',60);
        setTimeout(down,500);
    }
}
function down() {
    if (e.keyCode == '32') {
        $('#bounce').css('top',60);
        setTimeout(down,500);
    }
}*/


/*---------main--------------*/


function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
}

/*----------------------Timer--------------------------------------------------*/




