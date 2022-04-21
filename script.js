// function generating random value rock/paper/scissor 
function computerPlay() {
    let choice = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * choice.length);
    return choice[random];
}

//function for one round execution
function playRound(playerSelection, computerSelection) {
    playerSelection;
    computerSelection;

    if (computerSelection === playerSelection) {
        console.log("It's a tie.")
    } else if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            console.log("You Lose!! Paper Beats Rock");
            computerScore+= 1;
        } else {
            console.log("Rock beats Scissors. You Won!!");
            usrScore+= 1;
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            console.log("Paper beats rock. You Won!!");
            usrScore+= 1;
        } else {
            console.log("Scissors beats paper. You Lose!!");
            computerScore+= 1;
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Paper') {
            console.log("Scissors beats paper. You Won!!");
            usrScore+= 1;
        } else {
            console.log("Rock beats scissors. You Lose!!");
            computerScore+= 1;
        }
    } else {
        console.log("Wrong Input!");
    }
}

// function for prompting the user for an input
function userPlay() {
    return prompt("Rock/paper/scissors??");
}

//initializing score values
let usrScore = 0;
let computerScore = 0;

// function that will run the game
function game() {
    for (let i = 0; i < 5; i++) {
        playRound(userPlay(), computerPlay());
        if (i == 4) {
            if (usrScore > computerScore) {
                console.log(`You won the game with a score of ${usrScore}`);
            } else if (usrScore == computerScore) {
                console.log("NOBODY WINS. Everybody has an equal number of scores.");
            } else if (usrScore < computerScore) {
                console.log(`Computer is the final winner with a score of ${computerScore}`);
            }
            console.log(usrScore);
            console.log(computerScore);
        } else {
            playRound(userPlay(), computerPlay());
        }
    }
}

// functionn to reset the game
function reset() {
    usrScore = 0;
    computerScore = 0;
}

// calling the game() to run
game();