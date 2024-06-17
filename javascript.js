let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissors");
const resultDiv = document.querySelector("#result");
const scoreDiv = document.querySelector("#score");


function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}


function playRound(humanChoice) {
    const human = humanChoice.toUpperCase();
    const computer = getComputerChoice().toUpperCase();
    let result = '';

    const winningComb = { ROCK: "SCISSORS", PAPER: "ROCK", SCISSORS: "PAPER"};

    if (human === computer) {
        result = "It's a draw!";
    } else if (winningComb[human] === computer) {
        humanScore++;
        result = "You won!";
    } else {
        computerScore++;
        result = "You lost!";
    }
    
    resultDiv.textContent = result;
    scoreDiv.textContent = `Score: You - ${humanScore}, Computer - ${computerScore}`;

    if (humanScore === 5 || computerScore === 5){
        if (humanScore > computerScore){
            resultDiv.textContent = "You won the game! Reload to play the game again.";
        } else {
            resultDiv.textContent = "You Lost. Reload to try again!";
        }
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorButton.disabled = true;
    }
}

rockButton.addEventListener("click", () =>{
    playRound("Rock");
});

paperButton.addEventListener("click", () =>{
    playRound("Paper");
});

scissorButton.addEventListener("click", () =>{
    playRound("Scissors");
});