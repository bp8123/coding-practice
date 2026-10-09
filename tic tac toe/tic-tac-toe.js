const x = "X";
const o = "O";

const message = document.getElementById("message");

// The 9 tiles in board order (positions 0-8)
const tileClasses = [
    "left_top", "middle_top", "right_top",
    "left_middle", "middle", "right_middle",
    "left_bottom", "middle_bottom", "right_bottom"
];

const tiles = tileClasses.map(function (name) {
    return document.querySelector("." + name);
});

const paragraphs = tileClasses.map(function (name) {
    return document.getElementById(name + "_p");
});

// All 8 winning lines
const winningLines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
];

let gameOver = false;

function isFilled(index) {
    const text = paragraphs[index].textContent;
    return text === x || text === o;
}

function boardIsFull() {
    for (let i = 0; i < paragraphs.length; i++) {
        if (!isFilled(i)) {
            return false;
        }
    }
    return true;
}

// Returns the winning line (e.g. [0, 1, 2]) if someone has won, otherwise null
function getWinningLine() {
    for (let i = 0; i < winningLines.length; i++) {
        const a = winningLines[i][0];
        const b = winningLines[i][1];
        const c = winningLines[i][2];

        if (
            isFilled(a) &&
            paragraphs[a].textContent === paragraphs[b].textContent &&
            paragraphs[a].textContent === paragraphs[c].textContent
        ) {
            return winningLines[i];
        }
    }
    return null;
}

// X always starts, then the turns alternate: X, O, X, O, ...
let currentPlayer = x;
message.textContent = currentPlayer + "'s turn";

function placeMark(index) {
    if (gameOver) {
        return;
    }

    // A filled tile can only be changed when there are no empty tiles left
    if (isFilled(index) && !boardIsFull()) {
        return;
    }

    paragraphs[index].textContent = currentPlayer;

    const winningLine = getWinningLine();
    if (winningLine !== null) {
        message.textContent = currentPlayer + " wins!";
        gameOver = true;

        // Highlight the three winning tiles in green
        winningLine.forEach(function (i) {
            tiles[i].classList.add("winner");
        });
        return;
    }

    // Switch to the other player
    currentPlayer = (currentPlayer === x) ? o : x;

    if (boardIsFull()) {
        message.textContent = "Board is full, no winner yet. " + currentPlayer + "'s turn to change a tile.";
    } else {
        message.textContent = currentPlayer + "'s turn";
    }
}

// Only left click is used now
tiles.forEach(function (tile, index) {
    tile.addEventListener("click", function () {
        placeMark(index);
    });
});