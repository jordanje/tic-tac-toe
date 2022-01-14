function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOuputElement.textContent = "";
  formElement.reset();
}

function submitPlayerName(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get("playername").trim();
  if (!enteredPlayername.length) {
    event.target.firstElementChild.classList.add("error");
    errorsOuputElement.textContent = "Please enter a valid name!";
    return;
  }

  const updatedPlayerDataElement = document.getElementById(
    `player-${editedPlayer}-data`
  );
  updatedPlayerDataElement.children[1].innerHTML = enteredPlayername;

  players[editedPlayer - 1].name = enteredPlayername;
  closePlayerConfig();
}
