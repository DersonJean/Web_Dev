var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

}

function playSound(color) {
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
  }

$(".btn").click(function () {
  var color = $(this).attr("id");
  playSound(color);
});
