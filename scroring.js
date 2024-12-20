const player1ScoreElement = document.getElementById("player1Score");
const player2ScoreElement = document.getElementById("player2Score");
const maxScoreInput = document.getElementById("maxScore");
const player1Button = document.getElementById("player1Button");
const player2Button = document.getElementById("player2Button");
const reset = document.getElementById("resetButton");

let player1Score = 0;
let player2Score = 0;
let maxScore = parseInt(maxScoreInput.value);
let GameOver = false;

maxScoreInput.addEventListener("change", () => {
  maxScore = parseInt(maxScoreInput.value);
  resetGame();
});

player1Button.addEventListener("click", () => {
  if (!GameOver) {
    player1Score++;
    updateScores();
    checkWinners();
  }
});
player2Button.addEventListener("click", () => {
  if (!GameOver) {
    player2Score++;
    updateScores();
    checkWinners();
  }
});

resetButton.addEventListener("click", resetGame);

function updateScores() {
  player1ScoreElement.textContent = player1Score;
  player2ScoreElement.textContent = player2Score;
}

function checkWinners() {
  if (player1Score >= maxScore) {
    GameOver = true;
    player1ScoreElement.classList.add("winner");
    alert("Le player 1 a gagner");
  } else if (player2Score >= maxScore) {
    GameOver = true;
    player2ScoreElement.classList.add("winner");
    alert("Le player 2 a gagner");
  }
}

function resetGame() {
  player1Score = 0;
  player2Score = 0;
  gameOver = false;
  player1ScoreElement.textContent = player1Score;
  player2ScoreElement.textContent = player2Score;
  player1ScoreElement.classList.remove("winner");
  player2ScoreElement.classList.remove("winner");
}
