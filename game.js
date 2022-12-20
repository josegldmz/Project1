let btnSelect = document.querySelectorAll("square");
let btnRestart = document.querySelectorAll('reset-button');
let winOption = [
    // horizontal wins
        [0,1,2],
        [3,4,5],
        [6,7,8],
    // diagnal wins
        [0,4,8],
        [2,4,6],
    // vertical wins
        [0,3,6],
        [1,4,7],
        [2,5,8],
    ];
    let playerX = true;
    let turnCount = 0;
