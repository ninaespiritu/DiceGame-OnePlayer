const body = document.getElementById("game");
const imageContainer = document.querySelector(".image-container");
const scoreContainer = document.querySelector(".score-container");

const scorePlayer1 = document.getElementById("scorePlayer1");
const imagePlayer1 = document.getElementById("imagePlayer1");
const rollText1 = document.getElementById("rollText1");
const rollPlayer1 = document.getElementById("rollPlayer1");
const playAgain = document.getElementById("playAgain");

let player1Total = 0;

rollPlayer1.addEventListener("click", () => {
	let currentRoll = Math.ceil(Math.random() * 6);

	rollText1.style.display = "none";
	imageContainer.style.display = "block";
	imagePlayer1.src = `images/${currentRoll}.png`;

	player1Total += currentRoll;
	scorePlayer1.textContent = player1Total;

	if (player1Total >= 20) {
		scorePlayer1.textContent = `${player1Total} - Winner!`;
		scorePlayer1.style.fontWeight = "bold";
		imageContainer.style.backgroundColor = "#00af7a";
		scoreContainer.style.backgroundColor = "#00af7a";
		body.style.backgroundColor = "#00C288";

		player1Total = 0;

		rollPlayer1.style.display = "none";
		playAgain.style.display = "block";
		playAgain.style.backgroundColor = "#00885f";
		
	} else {
		if (currentRoll == 1) {
			scorePlayer1.textContent = `${player1Total} - You lost!`;
			scorePlayer1.style.fontWeight = "bold";
			imageContainer.style.backgroundColor = "#990033";
			scoreContainer.style.backgroundColor = "#990033";
			body.style.backgroundColor = "#AA0039";

			player1Total = 0;
			
			rollPlayer1.style.display = "none";
			playAgain.style.display = "block";
			playAgain.style.backgroundColor = "#770028";
		}
	}
});

playAgain.addEventListener("click", () => {
	window.location.reload();
});
