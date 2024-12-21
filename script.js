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
}

const buttons = document.querySelectorAll(".button");
const container = document.querySelector(".container");
const div = document.createElement("div");

div.textContent = "Choose an option!";
div.setAttribute("style",
    "white-space: pre-wrap;\
    text-align: center;"
);
container.appendChild(div);


let computerChoice = "";
buttons.forEach(button => {
    button.addEventListener("click", () => computerChoice  = getComputerChoice())
    button.addEventListener("click", (e) => playRound(e.target.id, computerChoice))
    button.addEventListener("click", (e) => div.textContent = `You chose ${e.target.id}!
Computer chose ${computerChoice}!

Your Score: ${humanScore}
Computer Score: ${computerScore}`)
});