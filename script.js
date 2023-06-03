function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {

    const playerChoice = playerSelection.toLowerCase();

    const winningConditions = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper',
    }

    if (playerChoice === computerSelection.toLowerCase()) {
        return "It's a tie!"
    }

    if (winningConditions[playerChoice] === computerSelection.toLowerCase()) {
        return `You win! ${playerChoice} beats ${computerSelection}`;
    }

    return `You Lose! ${computerSelection} beats ${playerChoice}`;
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();

// console.log(playRound(playerSelection, computerSelection));

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 0; round < 5; round++) {
        const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
    }
}
console.log(game());