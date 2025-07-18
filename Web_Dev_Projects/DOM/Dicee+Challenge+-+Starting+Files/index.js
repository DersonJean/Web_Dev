var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Generate random number between 1 - 6
var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
var diceImageSource = "images/" + randomDiceImage; // The whole path of the image

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", diceImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber2 + ".png";
var diceImageSource = "images/" + randomDiceImage;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", diceImageSource);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player1 Wins";
}
else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Same result, Refresh again";
}
else {
    document.querySelector("h1").innerHTML = "Player2 Wins";
}