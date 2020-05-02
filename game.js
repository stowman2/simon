// Global Vars

var gamePattern = []; //Good
var buttonColours = ["red", "blue", "green", "yellow"]; //Good
var userClickedPattern = []; //good
var started = false; //good
var level = 0; //good

$(document).keypress(function() { //good
  if (!started) { //good
    $("#level-title").text("Level " + level); //good
    nextSequence(); //good
    started = true; //good
  } // good
}); //good

$(".btn").click(function() { //good

  var userChosenColour = $(this).attr("id"); //good
  userClickedPattern.push(userChosenColour); //good

  playSound(userChosenColour); //good
  animatePress(userChosenColour); // good

  checkAnswer(userClickedPattern.length - 1); //good
});

// Functions

function checkAnswer(currentLevel) { //good


  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) { //good

    console.log("success"); //good

    if (userClickedPattern.length === gamePattern.length) { //good

      setTimeout(function() { //good
        nextSequence(); //good
      }, 1000); //good

    } //good

  } else { //good
    console.log("wrong");
    gameOverSound();

    $("body").addClass("game-over");
    setTimeout(function() {

      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").html("Game Over!<br>Your Reached " + "Level " + level + "<br>Press any Key to reload.");
    $(document).keypress(function() {
      location.reload(true);
    });
    //good
  } //good
} //good

function startOver() {

}

function nextSequence() { //good

  userClickedPattern = []; //good

  level++; //good

  $("#level-title").text("Level " + level); //good


  var randomNumber = Math.floor(Math.random() * 4); //good

  var randomChosenColour = buttonColours[randomNumber]; //good

  gamePattern.push(randomChosenColour); //Good

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100); //good
  playSound(randomChosenColour); //good
}

// Everything Below here works!
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function gameOverSound() {
  var audio = new Audio("sounds/wrong.mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  // setTimeout is a Jquery function, first you define what you want to run | after , you define the delay before it is run.
  setTimeout(function() {

    $("#" + currentColour).removeClass("pressed");
  }, 100);
}
