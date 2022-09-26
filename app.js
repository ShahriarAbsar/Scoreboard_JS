import ScoreboardView from "./ScoreboardView.js";

let playerOneScore = 0;
let playerTwoScore = 0;
const root = document.querySelector("#app");
const view = new ScoreboardView(root, "PLAYER ONE", "PLAYER TWO", (player, direction,reset) => {
	
	let count= direction === "minus" ? -1 : 1;
	
	if (player === "one") {
		playerOneScore = Math.max(playerOneScore + count, 0);
	} else {
		playerTwoScore = Math.max(playerTwoScore + count, 0);
	} 

	view.update(playerOneScore, playerTwoScore);
});