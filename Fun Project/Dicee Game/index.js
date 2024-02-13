// Dise 1 

var randomNumber1 = Math.floor((Math.random() * 6) + 1);
console.log(randomNumber1);
// document.querySelector("img").setAttribute("src", "./images/dice" + randomNumber1 + ".png")
document.querySelectorAll("img")[0].setAttribute("src", "./images/dice" + randomNumber1 + ".png")

// Dise 2

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
console.log(randomNumber2);
document.querySelectorAll("img")[1].setAttribute("src", "./images/dice" + randomNumber2 + ".png")

// Heading
if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "Player 2 Wins!🚩";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "Player 1 Wins!🚩";
} else {
    document.querySelector("h1").innerText = "Draw!";
}
