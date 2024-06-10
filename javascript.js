let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let result = Math.random();

    if (result <= 0.333){
        return "Rock";
    } else if (result < 0.666 && result > 0.333){
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice(){
    let sign = prompt("Your turn!");

    return sign;
}

function playRound(humanChoice,computerChoice) {
    let human = humanChoice.toUpperCase();

    if (human === "ROCK"){
        if (computerChoice === "Rock"){
            alert ("It's a draw!");
        } else if (computerChoice === "Scissors"){
            humanScore++;
            alert ("You won!");
        } else {
            computerScore++;
            alert ("You lost!");
        }
    } else if (human === "SCISSORS"){
        if (computerChoice === "Scissors"){
            alert ("It's a draw!");
        } else if (computerChoice === "Paper"){
            humanScore++;
            alert ("You won!");
        } else {
            computerScore++;
            alert ("You lost!");
        }
    } else if (human === "PAPER"){
        if (computerChoice === "Paper"){
            alert ("It's a draw!");
        } else if (computerChoice === "Rock"){
            humanScore++;
            alert ("You won!");
        } else {
            computerScore++;
            alert ("You lost!");
        }
    }

}

function playGame(){
    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound (humanSelection, computerSelection);
    }

    alert("Your score is:" + humanScore);
    alert("Computer's score is:" + computerScore);
    if (humanScore > computerScore){
        alert("Congrats! You won the game!");
    } else if (humanScore === computerScore){
        alert("That's a draw!");
    } else {
        alert("You lost! Try again");
    }
}

playGame();