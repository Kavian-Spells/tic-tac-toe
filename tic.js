var playerX = 1;
var playerO = 0;
var box = document.querySelectorAll(".pos"); //creates a list with all the boxes
var winCountX = 0;
var winCountO = 0;


function declareWinner() {
    if (winCountX == 3) {
        alert("Player X Wins!");
    } else if (winCountO == 3) {
        alert("Player O Wins!");
    } else {return}
}

function playGame() {
    box[0].addEventListener("click", () => {  
        if (playerX == 1) {
        box[0].innerHTML = "X";
        playerX = 0;
        winCountX += 1;
    } else {
        box[0].innerHTML = "O";
        playerX = 1;
        winCountO += 1;
    } declareWinner();
    });
    
    

    box[1].addEventListener("click", () => {  
        if (playerX == 1) {
            box[1].innerHTML = "X";
            playerX = 0;
            winCountX += 1;
        } else {
            box[1].innerHTML = "O";
            playerX = 1;
            winCountO += 1;
        } declareWinner();
        });
    
    

    box[2].addEventListener("click", () => {  
        if (playerX == 1) {
            box[2].innerHTML = "X";
            playerX = 0;
            winCountX += 1;
        } else {
            box[2].innerHTML = "O";
            playerX = 1;
            winCountO += 1;
        } declareWinner();
        });
    
    
    
    box[3].addEventListener("click", () => {  
        if (playerX == 1) {
            box[3].innerHTML = "X";
            playerX = 0;
            winCountX += 1;
        } else {
            box[3].innerHTML = "O";
            playerX = 1;
            winCountO += 1;
        } declareWinner();
        });
    
    box[4].addEventListener("click", () => {  
        if (playerX == 1) {
            box[4].innerHTML = "X";
            playerX = 0;
            winCountX += 1;
        } else {
            box[4].innerHTML = "O";
            playerX = 1;
            winCountO += 1;
        } declareWinner();
        });
    
    box[5].addEventListener("click", () => {  
        if (playerX == 1) {
            box[5].innerHTML = "X";
            playerX = 0;
            winCountX += 1;
        } else {
            box[5].innerHTML = "O";
            playerX = 1;
            winCountO += 1;
        } declareWinner();
        });
    
    box[6].addEventListener("click", () => {  
        if (playerX == 1) {
            box[6].innerHTML = "X";
            playerX = 0;
            winCountX += 1;
        } else {
            box[6].innerHTML = "O";
            playerX = 1;
            winCountO += 1;
        } declareWinner();
        });
    
    box[7].addEventListener("click", () => {  
        if (playerX == 1) {
            box[7].innerHTML = "X";
            playerX = 0;
            winCountX += 1;
        } else {
            box[7].innerHTML = "O";
            playerX = 1;
            winCountO += 1;
        } declareWinner();
        });

    box[8].addEventListener("click", () => {  
        if (playerX == 1) {
            box[8].innerHTML = "X";
            playerX = 0;
            winCountX += 1;
        } else {
            box[8].innerHTML = "O";
            playerX = 1;
            winCountO += 1;
        } declareWinner();
        });
}

document.addEventListener("DOMContentLoaded", (event) => {
    playGame();
})