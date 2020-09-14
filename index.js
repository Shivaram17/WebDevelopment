var r1 = Math.floor(Math.random()*6)+1;

var rdiceImage1 = "images/dice" + r1  + ".png";

document.querySelectorAll("img")[0].setAttribute("src", rdiceImage1);

var  r2  = Math.floor(Math.random()*6)+1;

var rdiceImage2 = "images/dice" + r2  + ".png";

document.querySelectorAll("img")[1].setAttribute("src", rdiceImage2);

if (r1 > r2)
{
  document.querySelector("h1").innerHTML = "Player1 wins!";
}
else if(r1 < r2){
  document.querySelector("h1").innerHTML = "Player2 wins!";

}
else{
  document.querySelector("h1").innerHTML = "DRAW!";
}
