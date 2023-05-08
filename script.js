const cells = document.querySelectorAll(".cell");
const result = document.querySelector(".result");
const reset = document.querySelector(".reset");
let currentPlayer = "X";

// Add event listeners to each cell
cells.forEach((cell) => {
	cell.addEventListener("click", () => {
		// If cell is empty
		if (!cell.textContent) {
			cell.textContent = currentPlayer;
			// Check if game is over
			if (checkWin()) {
				result.textContent = `${currentPlayer} wins!`;
				disableCells();
			} else if (checkTie()) {
				result.textContent = "Tie game!";
				disableCells();
			} else {
				switchPlayer();
			}
		}
	});
});

// Switch players
function switchPlayer() {
	currentPlayer = currentPlayer === "X" ? "O" : "X";
}

// Check if game is over
function checkWin() {
	// Winning combinations
	const winningCombinations = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
		[1, 4, 7],
		[2, 5, 8],
		[3, 6, 9],
		[1, 5, 9],
		[3, 5, 7]
	];
	// Check each winning combination
	return winningCombinations.some((combination) => {
		return combination.every((cellId) => {
			return cells[cellId - 1].textContent === currentPlayer;
		});
	});
}

// Check for tie game
function checkTie() {
	return [...cells].every((cell) => {
		return cell.textContent;
	});
}

// Disable cells after game over
function disableCells() {
	cells.forEach((cell) => {
		cell.removeEventListener("click", () => {});
	});
}

// Reset game
reset.addEventListener("click", () => {
	cells.forEach((cell) => {
		cell.textContent = "";
		cell.addEventListener("click", () => {});
	});
	currentPlayer = "X";
	result.textContent = "";
});




