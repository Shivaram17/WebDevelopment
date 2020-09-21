
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

// var for knowing whether the key had pressed for the first time or not
var started = false;

// initializing the level of the game
var level = 0;

// code for adding EventListener to the Keyboard key
$(document).keydown(function(event)
{
  if(started != true)
  {
    $("level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

// code for adding EventListener for mouse.
$(".btn").click(function()
{
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  // calling checkAnswer function
  checkAnswer(userClickedPattern.length-1);
});




// checking answer
function checkAnswer(currentLevel)
{
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel])
    {

      
      if (userClickedPattern.length === gamePattern.length)
      {
        // set timeout
        setTimeout(function()
        {
          nextSequence();
        },1000);
      }
    }
    else
    {
      // console.log("wrong");
      // adding game-over class to the body
      $("body").addClass("game-over");
      // removing game-over class after 200 ms
      setTimeout(function()
        {
          $("body").removeClass("game-over");
        },200);

        // change h1 tag to game over
        $("#level-title").text("Game over, Press any key to restart the game");

        playSound("wrong");

        startOver();
      }


}


// code for nextSequence
function nextSequence()
{
  // emptying the userClickedPattern array
  userClickedPattern = [];

  // increment the level
  level++;
  // updating the level in h1
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random()*4);

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  // use jQuery to access id with the help of randomChosenColour
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  var y = new Audio("sounds/" + randomChosenColour +".mp3");
  y.play();
  playSound(randomChosenColour);

}


// code for playing the userChosenColour sound.
function playSound(key)
{
  var y = new Audio("sounds/" + key +".mp3");
  y.play();
}

// function animate press
function animatePress(currentColour)
{
  $("#" + currentColour).addClass("pressed");

  // adding delay using setTimeout function
  setTimeout(function()
  {
    $("#" + currentColour).removeClass("pressed");
  },100);

}


// function for starting the game after the end of the game
function startOver()
{
  level = 0;
  gamePattern = [];
  started = false;
}
