const gameBoard = document.querySelector("#game-board");
const infoDisplay = document.querySelector("#info");


let go = 'circle';  // Circle always goes first
let aiEnabled = true;  // Flag to enable AI
infoDisplay.textContent = "Circle goes first";

const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function createBoard() {
    for (let i = 0; i < 9; i++) {
        const cellElement = document.createElement("div");
        cellElement.classList.add("square");
        cellElement.setAttribute('data-index', i);
        cellElement.addEventListener("click", playerMove, { once: true });
        gameBoard.append(cellElement);
    }
}

function playerMove(e) {
    const cell = e.target;
    const goDisplay = document.createElement("div");
    goDisplay.classList.add(go);
    cell.append(goDisplay);

    go = go === "circle" ? "cross" : "circle";
    infoDisplay.textContent = `It is now ${go}'s turn`;

    checkScore();

    if (aiEnabled && go === 'cross') {
        setTimeout(aiMove, 500);  // Add a slight delay before AI moves
    }
}

function aiMove() {
    const availableCells = Array.from(document.querySelectorAll(".square"))
        .filter(cell => !cell.firstChild);  // Get empty cells

    if (availableCells.length > 0) {
        const randomCell = availableCells[Math.floor(Math.random() * availableCells.length)];
        const aiGoDisplay = document.createElement("div");
        aiGoDisplay.classList.add("cross");
        randomCell.append(aiGoDisplay);

        randomCell.removeEventListener("click", playerMove);  // Disable click for AI move
        go = "circle";  // AI played, switch back to player
        infoDisplay.textContent = `It is now Circle's turn`;

        checkScore();
    }
}

function checkScore() {
    const allSquares = document.querySelectorAll(".square");

    if (checkWin(allSquares, 'circle')) {
        infoDisplay.textContent = 'Circle Wins!';
        disableBoard();
        setTimeout(resetGame, 3000);
    } else if (checkWin(allSquares, 'cross')) {
        infoDisplay.textContent = 'Cross Wins!';
        disableBoard();
        setTimeout(resetGame, 3000);
    } else if (Array.from(allSquares).every(square => square.firstChild)) {
        infoDisplay.textContent = 'It\'s a Draw!';
        disableBoard();
        setTimeout(resetGame, 3000);
    }
}

function checkWin(squares, player) {
    return winningCombos.some(combo => {
        return combo.every(index => {
            return squares[index].firstChild?.classList.contains(player);
        });
    });
}

function disableBoard() {
    const allSquares = document.querySelectorAll(".square");
    allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));  // Remove event listeners
}

function resetGame() {
    gameBoard.innerHTML = '';  // Clear all squares
    go = 'circle';  // Reset to circle's turn
    infoDisplay.textContent = "Circle goes first";  // Reset message
    createBoard();  // Rebuild the board
}

// Initialize the game board
createBoard();
