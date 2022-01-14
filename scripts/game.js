let nextPlayerName = document.getElementById("active-player-name");

function resetGameStatus() {
  activePlayer = 0;
  currentRound = 0;
  gameOver.children[0].innerHTML =
    "You won <span id='winner-player-name'>Player NAME</span>!";
  gameOver.style.display = "none";

  let gameBoardIndex = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
    }
  }

  for (const fieldElement of gameFieldElements) {
    fieldElement.textContent = "";
    fieldElement.classList.remove("disabled");
    gameBoardIndex++;
  }
}

function startNewGame() {
  if (!players[0].name || !players[1].name) {
    alert("Please set custom players for both players!");
    return;
  }

  resetGameStatus();

  gameBoard.style.display = "block";
  nextPlayerName.textContent = players[activePlayer].name;
}

function swtichPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else if (activePlayer === 1) {
    activePlayer = 0;
  }
  nextPlayerName.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  const selectedField = event.target;
  const selectedColum = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedColum] > 0) {
    alert("Please select an empty field!");
    return;
  }

  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");
  gameData[selectedRow][selectedColum] = activePlayer + 1;
  currentRound++;
  swtichPlayer();

  const winnerId = checkForGameOver();
  if (winnerId !== 0) {
    endGame(winnerId);
  }
}

function checkForGameOver() {
  //check rows
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }
  //check columns
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }
  //check diagonals
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[0][0];
  }

  if (currentRound === 9) {
    return -1;
  }

  return 0;
}

//game over alert displayed
function endGame(winnerId) {
  gameOver.style.display = "block";
  if (winnerId > 0) {
    let winnerName = players[winnerId - 1].name;
    document.getElementById("winner-player-name").textContent = winnerName;
  } else {
    gameOver.children[0].textContent = "It's a draw!";
    console.log(document.querySelector("article").children[0]);
  }
}
