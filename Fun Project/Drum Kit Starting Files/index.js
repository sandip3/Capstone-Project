// document.querySelectorAll(".drum").addEventListener("click",drum_click);

var drumcount = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumcount; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", drum_click);
}

// On CLick Funtion
function drum_click() {

    // this.style.color = "White";

    var drumText = this.innerText;
    // console.log(drumText);
    drumSound(drumText);
    btnAnimation(drumText);
}

// On Key Funtion
document.addEventListener("keydown", function (event) {
    // console.log(event.key);
    drumSound(event.key);
    btnAnimation(event.key);
})

// On Sound Funtion
function drumSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "k":
            var kickBass = new Audio("./sounds/kick-bass.mp3");
            kickBass.play();
            break;

        case "l":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        default:
            console.log(drumText + " Error !!");
            break;
    }
}

// var audio = new Audio("./sounds/tom-1.mp3")
// audio.play();
function btnAnimation(currentKey) {
    var activeBtn = document.querySelector("." + currentKey);
    activeBtn.classList.add("pressed");
    setTimeout(function () {
        activeBtn.classList.remove("pressed");
    }, 200);
}
