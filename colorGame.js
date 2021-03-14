var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButons = document.querySelectorAll(".mode");

init();

function init() {
    // mode buttons event listeners
    setupModeButtons();
    setupSquares();
    reset();
};

function setupModeButtons() {
    for (var i = 0; i < modeButons.length; i++) {
        modeButons[i].addEventListener("click", function () {
            modeButons[0].classList.remove("selected");
            modeButons[1].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy") numSquares = 3;
            else numSquares = 6;
            reset();
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        // add click listener to squares
        squares[i].addEventListener("click", function () {
            // grab color of picked square
            var clickedColor = this.style.backgroundColor;
            // compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = pickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}


function reset() {
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    // change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function () {
    reset();
});


function changeColors(color) {
    // loop through all squares
    for (var i = 0; i < squares.length; i++) {
        //     // change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make an array
    var arr = [];
    // repeat num times
    for (var i = 0; i < num; i++) {
        // get random color and push into arr
        arr.push(randomColor());
    }
    // return array
    return arr;
}

function randomColor() {
    // pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function addColors() {
    for (var i = 0; i < squares.length; i++) {
        // add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
    }
};


// OLD CODE (parts):

// easyButton.addEventListener("click", function () {
//     resetButton.textContent = "New Colors";
//     hardButton.classList.remove("selected");
//     easyButton.classList.add("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
//     h1.style.backgroundColor = "steelblue";
// });

// hardButton.addEventListener("click", function () {
//     resetButton.textContent = "New Colors";
//     easyButton.classList.remove("selected");
//     hardButton.classList.add("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
//     h1.style.backgroundColor = "steelblue";

// }
// );

// resetButton.addEventListener("click", function () {
//     // generate all new colors
//     colors = generateRandomColors(numSquares);
//     // pick a new random color from array
//     pickedColor = pickColor();
//     // change colorDisplay to match picked Color
//     colorDisplay.textContent = pickedColor;
//     this.textContent = "New Colors";
//     // change colors of squares
//     // for (var i = 0; i < squares.length; i++) {
//     //     squares[i].style.backgroundColor = colors[i];
//     // }
//     addColors();
//     h1.style.backgroundColor = "steelblue";
//     messageDisplay.textContent = "";
// });

