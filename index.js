var scores = new Array();
var userclicked = new Array();
var scre=0;
var kflag = 1;
var gflag = 0;
var ctr=0;
$("h2").hide();
function pickrandomsound() {
  ctr=0;
  $("h1").text("Scores:" + scores.length);
  var arr = ['green', 'red', 'blue', 'yellow'];
  var elerandom = arr[parseInt(Math.random() * 4)];
  scores.push(elerandom);
  soundgen(elerandom);
}


function soundgen(chosenele) {
  addanimation(chosenele);
  var aud = new Audio("./sounds/" + chosenele + ".mp3");
  aud.play();
}

function validate() {
if(userclicked[userclicked.length-1]==scores[ctr])
{
  ctr++;
}
else {
  gflag=0;

}

}

$(".btn").click(function() {
  if (gflag) {
    addanimation(this.id);
    userclicked.push(this.id);
    var aud = new Audio("./sounds/" + this.id + ".mp3");
    aud.play();
    validate();
    if (gflag && ctr==scores.length)
    {
      scre++;
      setTimeout(function() {
      pickrandomsound();
    }, 1000);
  }
  }
  if(gflag!=1)
 {
   changebgwrong();
   $("h1").text("Score:"+scre);
   $("h2").show();
    var aud = new Audio("./sounds/" + "wrong" + ".mp3");
    aud.play();
    kflag=1;

  }
})


function changebgwrong()
{
  $("body").css("background-color","red");
  setTimeout(function() {
    $("body").css("background-color","#011F3F");
  }, 100);
}


function addanimation(id) {
  $("#" + id).addClass("pressed");
  setTimeout(function() {
    $("#" + id).removeClass("pressed");
  }, 100);
}


$(document).keypress(function(e) {
  if (kflag) {
    kflag = 0;
    gflag = 1;
    ctr=0;
    scre=0;
    scores.length=0;
    userclicked.length=0;
    $("h2").hide();
    pickrandomsound();

  }

})
