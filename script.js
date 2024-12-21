function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3)

    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()

    if (humanChoice == "rock") {
        switch (computerChoice) {
            case "rock":
                break;
            case "paper":
                computerScore++
                break;
            case "scissors":
                humanScore++
                break;
        }
    } else if (humanChoice == "paper") {
        switch (computerChoice) {
            case "rock":
                humanScore++
                break;
            case "paper":
                break;
            case "scissors":
                computerScore++
                break;
        }
    } else if (humanChoice == "scissors") {
        switch (computerChoice) {
            case "rock":
                computerScore++
                break;
            case "paper":
                humanScore++
                break;
            case "scissors":
                break;
        }
    }

    console.log(`You chose ${humanChoice}!\n
Computer chose ${computerChoice}!`);
    console.log(`You got ${humanScore} points!\n
Computer got ${computerScore} points!`);
}

const buttons = document.querySelectorAll(".button")

buttons.forEach(
    (button) => {
        button.addEventListener("click",
            () => {
                alert(button.id)
            }
        )
    }
)