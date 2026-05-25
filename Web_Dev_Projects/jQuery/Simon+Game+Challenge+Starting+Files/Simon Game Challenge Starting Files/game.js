var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {

    userClickedPattern = [];
    level++;
    $("h1").text("Level " + level);

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
  userClickedPattern.push(color);
  playSound(color);
   $("#" + color).addClass("pressed");

   setTimeout(function () {
    $("#" + color).removeClass("pressed");
  }, 100);

   checkAnswer(userClickedPattern.length - 1);
});

$(document).keydown(function () {
  if (!started) {
    nextSequence();
    started = true;
  }
});

function checkAnswer(currentLevel) {

  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

    if (userClickedPattern.length === gamePattern.length) {

      setTimeout(function () {
        nextSequence();
      }, 1000);

    }

  } else {

    playSound("wrong");
    $("body").addClass("game-over");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}


function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}