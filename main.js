var randomNumber1 = Math.floor(Math.random() * 6) + 1; //Random Pick of number 

var randomDice = "dice" + randomNumber1 + ".png"; //get the dice image 1 to 6

var randomSource = "images/" +  randomDice; //random the dice image

var image1 = document.querySelectorAll("img")[0]; //select the first image lenth

image1.setAttribute("src", randomSource); //changing the src into random img

// Image 1
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDice1 = "dice" + randomNumber2 + ".png";
var randoSourceOne = "images/" + randomDice1;
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randoSourceOne);


// Win Draw or Lose Condintional Statement
if (randomNumber1 > randomNumber2) {
    
    document.querySelector("h1").innerHTML = "Player 1 Win!"

} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Win!"
} else {
    document.querySelector("h1").innerHTML = "Draw!"
}