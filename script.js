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

let result;
let playerScore = 0;
let computerScore = 0;
let ties = 0;
const score = document.getElementById("score");

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
    result = playRound(button.id, computerPlay());

    if (result.includes("Win")) {
        playerScore++;
    } else if (result.includes("Lose")) {
        computerScore++;
    } else {ties++;}

    score.textContent = `Player: ${playerScore} Computer: ${computerScore} Ties: ${ties}`;
    console.log(`Player: ${playerScore} Computer: ${computerScore}`);

    if (playerScore === 3 || computerScore === 3) {
        const verdict = document.createElement("p");
        const game = document.querySelector("#game");
        verdict.classList.add("verdict");
        if (playerScore > computerScore) {
            verdict.textContent = "Congratulations! You beat the computer in this best of 5!";
            game.appendChild(verdict);
            
            buttons.forEach((button) => {
                button.disabled = true;
            })

        } else if (playerScore < computerScore) {
            verdict.textContent = "Too bad, you lost to the computer in this best of 5!"; 
            game.appendChild(verdict);

            buttons.forEach((button) => {
                button.disabled = true;
            })

        } else {
            verdict.textContent = "This best of 5 is a tie!";
            game.appendChild(verdict);

            buttons.forEach((button) => {
                button.disabled = true;
            })
            
        }
    }
    });
});

function game() {
    let playerSelection;
    let computerSelection;
    let result;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        playerSelection = window.prompt("Choose your weapon. Rock, Paper or Scissors.");

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