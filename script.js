const cells = document.querySelectorAll('.cell');
const statusDisplay = document.getElementById('status');
const restartButton = document.getElementById('restart');

let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Função que verifica o vencedor
function checarVencedor() {
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      gameActive = false;
      statusDisplay.innerHTML = `Jogador ${currentPlayer} venceu!`;
      return;
    }
  }

  // Verifica empate
  if (!gameState.includes('')) {
    gameActive = false;
    statusDisplay.innerHTML = 'Empate!';
  }
}

// Função que trata o clique nas células
function handleCellClick(event) {
  const cellIndex = event.target.id;
  if (gameState[cellIndex] !== '' || !gameActive) {
    return;
  }

  gameState[cellIndex] = currentPlayer;
  event.target.innerText = currentPlayer;
  const cells = document.querySelectorAll('.cell');


  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Função para reiniciar o jogo
function restartGame() {
  gameActive = true;
  currentPlayer = 'X';
  gameState = ['', '', '', '', '', '', '', '', ''];
  statusDisplay.innerHTML = '';
  cells.forEach(cell => cell.innerText = '');
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartButton.addEventListener('click', restartGame);