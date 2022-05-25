function computerPlay () {
    let randomNumber = Math.random()

if (randomNumber <= 0.3) {
    return "rock";
} else if (randomNumber <= 0.6) {
    return "paper";
} else {
    return "scissors";
}
}

function playRound(playerSelection, computerSelection) {

if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock!";
} else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats Scissors!";
} else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose! Scissors beats Paper!";
} else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats Rock!";
} else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose! Rock beats Scissors!";
} else if (playerSelection === "scissors" && computerSelection === "Paper") {
    return "You Win! Scissors beats Rock!";
} else {
    return "It's a tie!"
}
}

function game() {
    let playerSelection;
    let computerSelection;
    let result;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        playerSelection = window.prompt("Choose your weapon. Rock, Paper or Scissors.")
        computerSelection = computerPlay();
        result = playRound(playerSelection.toLowerCase(), computerSelection);

        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }

        console.log(result);
        console.log(`Player: ${playerScore} Computer: ${computerScore}`);

        if (playerScore === 3 || computerScore === 3) {
            break;
        }
    }

    if (playerScore > computerScore) {
        console.log("Congratulations! You beat the computer in this best of 5!");
    } else if (playerScore < computerScore) {
        console.log("Too bad, you lost to the computer in this best of 5!"); 
    } else {
        console.log("This best of 5 is a tie!");
    }
}

game();
