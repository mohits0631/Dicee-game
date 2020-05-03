var randomNumber1= (Math.floor(Math.random()*6))+1;
var randomNumber2= (Math.floor(Math.random()*6))+1;
var randomImage1="images/dice"+randomNumber1+".png";
var randomImage2="images/dice"+randomNumber2+".png";
//declaration of winner
if(randomNumber1>randomNumber2)
{
document.querySelector("h1").innerHTML="🏆 Player 1 Wins!";
}
else if(randomNumber1===randomNumber2)
{
  document.querySelector("h1").innerHTML="Tie!!";
}
else{
  document.querySelector("h1").innerHTML="Player 2 Wins! 🏆";
}

//For dice 1
document.querySelector(".img1").setAttribute("src", randomImage1);
//For dice 2
document.querySelector(".img2").setAttribute("src", randomImage2);
