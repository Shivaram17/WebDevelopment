
var nofbuttons = document.querySelectorAll(".drum").length;
for(var i=0; i<nofbuttons;i++)
{ // adding event listener to each button
  document.querySelectorAll("button")[i].addEventListener("click",function()
  {
    var buttonInner = this.innerHTML;
    // adding green color and removing it


    makeSound(buttonInner);
    buttonAnimation(buttonInner);
  });
}

// adding event listener for keyboard
document.addEventListener("keydown", function(event)
{
  makeSound(event.key);
  buttonAnimation(event.key);
});

// function for making sound
function makeSound(key)
{
  switch (key)
  {
    case "a":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
    case "s":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
    case "d":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
    case "f":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
    case "j":
        var snare  = new Audio("sounds/snare.mp3");
        snare.play();
        break;
    case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
    case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

    default: console.log(key);

  }


}

function buttonAnimation(key)
{
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    // set timer for delay it has three properties function, time,
    setTimeout(function()
    {
        activeButton.classList.remove("pressed");
    }, 100);

    var g = document.querySelector("."+ key);
    g.classList.add("green");
    setTimeout(function()
    {
        g.classList.remove("green");
    }, 100);

}
// function for creating n number of objects
// function HouseKeeper(name, age, workPermit,langauge)
// {
//   this.name = name;
//   this.age = age;
//   this.workPermit = workPermit;
//   this.language = language;
//   this.clean = function(){
//  this.clean = alert("cleaning in progress");
//     }
// }
// var houseKeeper1 = new HouseKeeper(timmy,18,True,[English],operator);
// var houseKeeper2 = new HouseKeeper(nina, 23, True,English);
