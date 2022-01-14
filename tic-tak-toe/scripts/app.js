let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 0;

const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const players = [
  { name: "", symbol: "X" },
  { name: "", symbol: "O" },
];

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOuputElement = document.getElementById("config-errors");

const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const cancelBtn = document.getElementById("cancel-btn");
const startNewGameBtn = document.getElementById("start-game");

const inputPlayerNameElement = document.getElementById("playername");

const playerName1 = document.getElementById("player-name-1");
const playerName2 = document.getElementById("player-name-2");

const gameBoard = document.querySelector("#active-game");
const gameFieldElements = document.querySelectorAll("#game-board li");
const gameOver = document.getElementById("game-over");

editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);
cancelBtn.addEventListener("click", closePlayerConfig);
startNewGameBtn.addEventListener("click", startNewGame);

backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", submitPlayerName);

for (const gameFieldElement of gameFieldElements) {
  gameFieldElement.addEventListener("click", selectGameField);
}
