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
for (let i = 0; i <= turnCount; i++) {
    turnCount.append(i);
}
if(turnCount === 9){
    console.log("Draw Game");
}


// make the function for the winning arrays
const winCheck = () => {
    for (let i of winOption) {
        let [element1, element2, element3] = [
            btnSelect[i[0]].innerText,
            btnSelect[i[1]].innerText,
            btnSelect[i[3]].innerText,
        ];
        if (element1 != ""&& (element2 != "") & (element3 != "")) {
            if (element1 == element2 && element2 == element3) {
                winnerFunc(element1);
            }
        }
    }
};

// the button selector display of X and O
btnSelect.forEach((element) => {
    element.addEventListener("click", () => {
        if (playerX) {
            playerX = false;
            element.innerText = "X";
            element.disabled = true;
        }
        else {
            playerX = true;
            element.innerText = "O"
            element.disabled = true;
        }
        turnCount +=1;
        if (count == 9) {
// create a draw function -- and how will you display draw?
        }
        winCheck();
    })
})

// add the function to hide the following page of win/draw to start a new game
// research possible functions to hide/unhide a function(element)