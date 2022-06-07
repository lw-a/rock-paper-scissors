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

function gameOver () {
    buttons.forEach((button) => {
        button.disabled = true;
    })
newGame();
}

function newGame () {
    const newGame = document.createElement("button");
    newGame.textContent = "New Game";
    newGame.style.margin = "10px";
 
     newGame.addEventListener("click", () => {
         playerScore = 0;
         computerScore = 0;
         ties = 0;
         games = 0;
         score.textContent = `Player: ${playerScore} Computer: ${computerScore} Ties: ${ties}`;
 
         buttons.forEach((button) => {
             button.disabled = false;
         })
         game.removeChild(verdict);
         game.removeChild(newGame);
     })
    game.appendChild(newGame);
}

let result;
let playerScore = 0;
let computerScore = 0;
let ties = 0;
let games = 0;

const score = document.getElementById("score");
const game = document.querySelector("#game");
const verdict = document.createElement("div");
verdict.classList.add("verdict");
verdict.style.padding = "10px";

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
    result = playRound(button.id, computerPlay());

    if (result.includes("Win")) {
        playerScore++;
        games++;
    } else if (result.includes("Lose")) {
        computerScore++;
        games++;
    } else {
        ties++;
        games++;
    }

    score.textContent = `Player: ${playerScore} Computer: ${computerScore} Ties: ${ties}`;

    if (playerScore === 3 || computerScore === 3 || games === 5) {

        if (playerScore === 3) {
            verdict.textContent = "Congratulations! You beat the computer in this best of 5!";
            game.appendChild(verdict);
            gameOver();

        } else if (computerScore === 3) {
            verdict.textContent = "Too bad, you lost to the computer in this best of 5!"; 
            game.appendChild(verdict);
            gameOver();

        } else {
            verdict.textContent = "This best of 5 is a tie!";
            game.appendChild(verdict);
            gameOver();
        }
    }
    });
});

/* function game() {
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
} */