var playerX = 1;
var box = document.querySelectorAll(".pos"); //creates a list with all the boxes
var winCountX = 0;
var winCountO = 0;
var playCount = 0;
var winner = document.querySelector('.winner');
var gameEnd = false;
var tracker = ['', '', '', '', '', '', '', '', '', ];
var Xscore = document.querySelector('#Xscore');
var i = 0;

function bind_Listeners() {
    playGame();

    var newGame = document.querySelector('#reset');
    newGame.addEventListener('click', reset)
}


function reset() {
    for (i = 0; i < tracker.length; i++) {
        box[i].innerHTML = '';
        tracker[i] = '';
    }    
    playCount = 0;
    winner.innerHTML = '';
    gameEnd = false;
}

function declareWinner() {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        ];

    for (i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (tracker[a] && tracker[a] === tracker[b] && tracker[a] === tracker[c]) {
            winner.innerHTML = `Player ${tracker[a]} Wins!!!`;
            var horn = document.querySelector('#horn');
            horn.play();
            gameEnd = true;        
            if (tracker[a] == "X"){
                winCountX += 1;
                } else if (tracker[a] == "O") {
                winCountO += 1;
                }
        } else if (playCount === 9 && !!tracker[a] !== !!tracker[b]) {
            console.log("else if fired");
            winner.innerHTML = 'CAT!'; //Need to figure out the CAT
            gameEnd = true;
        }
    }  
    
    Xscore.innerHTML = `Player X: ${winCountX}`;
    Oscore.innerHTML = `Player O: ${winCountO}`;
}

function playGame() {
    box[0].addEventListener("click", () => {  
        if (gameEnd || tracker[0]) {
            return;
        }
        if (playerX == 1) {
        box[0].innerHTML = "X";
        tracker[0] = "X";
        playerX = 0;
        } else {
            box[0].innerHTML = "O";
            tracker[0] = "O";
            playerX = 1;
        } 
            playCount += 1;
            declareWinner();
    });
    
    box[1].addEventListener("click", () => {  
        if (gameEnd || tracker[1]) {
            return;
        }
        if (playerX == 1) {
            box[1].innerHTML = "X";
            tracker[1] = "X";
            playerX = 0;
        } else {
            box[1].innerHTML = "O";
            tracker[1] = "O";
            playerX = 1;
        } 
            playCount += 1;
            declareWinner();
    });
    
    

    box[2].addEventListener("click", () => {  
        if (gameEnd || tracker[2]) {
            return;
        }
        if (playerX == 1) {
            box[2].innerHTML = "X";
            tracker[2] = "X";
            playerX = 0;
        } else {
            box[2].innerHTML = "O";
            tracker[2] = "O";
            playerX = 1;
        } 
            playCount += 1;
            declareWinner();
        });
    
    
    
    box[3].addEventListener("click", () => {  
        if (gameEnd || tracker[3]) {
            return;
        }
        if (playerX == 1) {
            box[3].innerHTML = "X";
            tracker[3] = "X";
            playerX = 0;
        } else {
            box[3].innerHTML = "O";
            tracker[3] = "O";
            playerX = 1;
        } 
            playCount += 1;
            declareWinner();
        });
    
    box[4].addEventListener("click", () => {  
        if (gameEnd || tracker[4]) {
            return;
        }
        if (playerX == 1) {
            box[4].innerHTML = "X";
            tracker[4] = "X";
            playerX = 0;
        } else {
            box[4].innerHTML = "O";
            tracker[4] = "O";
            playerX = 1;
        } 
            playCount += 1;
            declareWinner();
        });
    
    box[5].addEventListener("click", () => {  
        if (gameEnd || tracker[5]) {
            return;
        }
        if (playerX == 1) {
            box[5].innerHTML = "X";
            tracker[5] = "X";
            playerX = 0;
        } else {
            box[5].innerHTML = "O";
            tracker[5] = "O";
            playerX = 1;
        } 
            playCount += 1;
            declareWinner();
        });
    
    box[6].addEventListener("click", () => {  
        if (gameEnd || tracker[6]) {
            return;
        }
        if (playerX == 1) {
            box[6].innerHTML = "X";
            tracker[6] = "X";
            playerX = 0;
        } else {
            box[6].innerHTML = "O";
            tracker[6] = "O";
            playerX = 1;
        } 
            playCount += 1;
            declareWinner();
        });
    
    box[7].addEventListener("click", () => {  
        if (gameEnd || tracker[7]) {
            return;
        }
        if (playerX == 1) {
            box[7].innerHTML = "X";
            tracker[7] = "X";
            playerX = 0;
        } else {
            box[7].innerHTML = "O";
            tracker[7] = "O";
            playerX = 1;
        } 
            playCount += 1;
            declareWinner();
        });

    box[8].addEventListener("click", () => {  
        if (gameEnd || tracker[8]) {
            return;
        }
        if (playerX == 1) {
            box[8].innerHTML = "X";
            tracker[8] = "X";
            playerX = 0;
        } else {
            box[8].innerHTML = "O";
            tracker[8] = "O";
            playerX = 1;
        } 
            playCount += 1;
            declareWinner();
        });
}

document.addEventListener("DOMContentLoaded", (event) => {
    bind_Listeners();
})