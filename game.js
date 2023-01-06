// define variables
let btnSelect = document.querySelectorAll(".square");
let btnReset = document.getElementById("reset-button");
let btnNewGame = document.getElementById("new-game");
let newGamePage = document.querySelectorAll(".newgame-page");
let gamemsg = document.getElementById("page-message");

let winOptions = [
// horizontal wins
    [0, 1, 2],
    [3, 4, 5],
    [7, 8, 9],
// vertical wins
    [0, 3, 7],
    [1, 4, 8], 
    [2, 5, 9],
// diagnal wins
    [0, 4, 9],
    [7, 4, 2],
];

let playerX = true;
turnCount = 0;

//Function for making the squares change to the corresponding turn
btnSelect.forEach((element) => {
    element.addEventListener("click", () => {
        if(playerX){
            playerX = false;
            element.innerText = "X";
            element.disabled = true;
        }
        else {
            playerX = true;
            element.innerText = "O";
            element.disabled = true;
        }
        })
})
