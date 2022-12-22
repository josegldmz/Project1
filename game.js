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

// increase the number of turnCount so you can keep track of the number of turns
for (let i = 0; i < turnCount; i++) {
    turnCount.append(i);
}

// if the number of turnCount is 0 or even, playerX will be true and will make an X
// if the number of turnCouunt is odd, playerX will be false and will make an O





// const playerTurn = () => {
//      let (i = 0, i < turnCount, i++) {
//         turnCount = 
//      }
// }
