var colors = [];
var numSquares = 6;
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset")
var modeButtons = document.querySelectorAll(".mode");

init();
function init(){
    //Difficulty buttons and eventListeners
setUpModeButtons();
    for (var i=0; i < squares.length; i++){
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
        //saving clicked color in a variable
        var clickedColor = this.style.backgroundColor
        //comparing color with pickedColor
        if (clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play again?";
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again!"
        }
    });
    }
    reset();
}


resetButton.addEventListener("click", function(){
    reset();
})

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

function reset(){
    colors = generateRandomColors(numSquares);
    //pick a new color to win the game
    pickedColor = pickColor();
    //change colorDisplay to match the new color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New colors";
    //restart the h1 color so it match the original background color
    messageDisplay.textContent = " ";
    // change colors of squares
for (var i=0; i < squares.length; i++){
        if(colors[i]){
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}


function changeColors(color){
    //loop through all squares
    for (var i = 0; i < squares.length; i++){
    //change each color to match the winner color
    squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = []
    //add random num to array
    for (var i=0; i < num; i++){
        //get random color and push to arr
        arr.push(randomColor())
    }
    //return that array
    return arr;
}

function randomColor(){
    // pic red from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick green  from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick blue from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function setUpModeButtons(){
    for(var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");	
            this.textContent === "Easy" ?	numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}