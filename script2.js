function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissor"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return (choices[randomIndex]);
}
console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {

    const playerChoice = playerSelection.toLowerCase();

    const winningConditions = {
        Rock: 'Scissor',
        Paper: 'Rock',
        Scissor: 'Paper',
    }

    if (playerChoice === computerSelection.toLowerCase()) {
        return "It's a tie!"
    }

    if (winningConditions[playerChoice] === computerSelection.toLowerCase()) {
        return `Yay! You win! ${playerChoice} beats ${computerSelection}.`
    }

    return `oh no! You lose! ${computerSelection} beats ${playerChoice}.`
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 0; round < 5; round++) {
        const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissor):")
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
    }
}
console.log(game());