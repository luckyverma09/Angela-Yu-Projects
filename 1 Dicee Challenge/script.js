var player1 = Math.floor(Math.random() * 6)+ 1;
var player2 = Math.floor(Math.random() * 6) + 1;

var imgSrc1 = "images/dice" + player1 + ".png";
var imgSrc2 = "images/dice" + player2 + ".png";


var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];

var winner = document.querySelector("h1");

if(player1 > player2){
    winner.innerHTML = "🍾Player 1 WIN!!"
}else if(player1 < player2){
    winner.innerHTML = "Player 2 WIN!!🍾"
}else{
    winner.innerHTML = "It's a DRAW!!"
}

img1.setAttribute("src", imgSrc1);
img2.setAttribute("src", imgSrc2);


