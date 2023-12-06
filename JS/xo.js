const board = document.getElementById('board');
const message = document.getElementById('message');
const restartButton = document.getElementById('restartButton');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function checkWinner(){
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return gameBoard[a];
        }
    }

    return null;
}

function handleCellClick(index){
    if(!gameActive || gameBoard[index] !== ''){
        return;
    }

    gameBoard[index] = currentPlayer;

    document.getElementById(`cell${index}`).innerText = currentPlayer;

    const winner = checkWinner();
    if (winner) {
        message.style.display = 'block';
        message.innerText = `Player ${winner} wins! 🎉✨`;
        gameActive = false;
        return;
    }

    if (!gameBoard.includes('')) {
        message.style.display = 'block';
        message.innerText = 'It\'s a tie! 😥';
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function initializeBoard(){
    for(let i = 0; i < 9; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = `cell${i}`;
        cell.addEventListener('click', () => handleCellClick(i));
        board.appendChild(cell);
    }
}

function restartGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    document.querySelectorAll('.cell').forEach(cell => {
        cell.innerText = '';
    });
    message.style.display = 'none';
}

initializeBoard();