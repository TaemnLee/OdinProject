let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getHumanChoice(){
    let sign = prompt("Your turn!");

    return sign;
}

function playRound(humanChoice,computerChoice) {
    let human = humanChoice.toUpperCase();
    let computer = computerChoice.toUpperCase();

    const winningComb = { ROCK: "SCISSORS", PAPER: "ROCK", SCISSORS: "PAPER"};

    if (human === computer) {
        alert("It's a draw!");
    } else if (winningComb[human] === computer) {
        alert("You won!");
    } else {
        alert ("You lost!");
    }

}

playRound(getHumanChoice(), getComputerChoice());