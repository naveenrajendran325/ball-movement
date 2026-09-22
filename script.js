var velocity = 2;
var xMin = 0;
var cMax = 1300;

// Ball 1
var positionX = 0;
var reverse = false;
var ball = document.getElementById("ball");

// Ball 2
var positionX2 = 1300;
var reverse2 = true;
var ball2 = document.getElementById("ball2");

function moveball() {
    // Move Ball 1
    if (reverse) {
        positionX = positionX - velocity;
    } else {
        positionX = positionX + velocity;
    }
    ball.style.left = positionX + "px";

    if (positionX >= cMax) {
        reverse = true;
    }
    if (positionX <= xMin) {
        reverse = false;
    }

    // Move Ball 2
    if (reverse2) {
        positionX2 = positionX2 - velocity;
    } else {
        positionX2 = positionX2 + velocity;
    }
    ball2.style.left = positionX2 + "px";

    if (positionX2 >= cMax) {
        reverse2 = true;
    }
    if (positionX2 <= xMin) {
        reverse2 = false;
    }
}

setInterval(moveball, 10);

















































