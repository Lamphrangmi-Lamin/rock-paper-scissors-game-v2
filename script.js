// function generating random value rock/paper/scissor
function computerPlay() {
    let choice = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * choice.length);
    return choice[random];
}

// initializing score values
let usrScore = parseInt(0);
let computerScore = parseInt(0);

const weapons = document.querySelectorAll("button");
for (let i = 0; i < weapons.length; i++) {
    weapons[i].addEventListener('click', () => {
        computerPlay();
        
        if (computerPlay() === weapons[i].value) {
            result.textContent = "It's a tie."
        } else if (weapons[i].value === 'Rock') {
            if (computerPlay() === 'Paper') {
                result.textContent = "You Lose!! Paper Beats Rock";
                computerScore += 1;
            } else {
                result.textContent = "Rock beats Scissors. You Won!!";
                usrScore += 1;
            }
        } else if (weapons[i].value === 'Paper') {
            if (computerPlay() === 'Rock') {
                result.textContent = "Paper beats rock. You Won!!";
                usrScore += 1;
            } else {
                result.textContent = "Scissors beats paper. You Lose!!";
                computerScore += 1;
            }
        } else if (weapons[i].value === 'Scissors') {
            if (computerPlay() === 'Paper') {
                result.textContent = "Scissors beats paper. You Won!!";
                usrScore += 1;
            } else {
                result.textContent = "Rock beats scissors. You Lose!!";
                computerScore += 1;
            }
        }
        else {
            result.textContent = "Wrong Input!";
        }
            
    });
}

// function that will run the game
// function game() {
//     for (let i = 0; i < 5; i++) {
//         playRound(userPlay(), computerPlay());
//         if (i == 4) {
//             if (usrScore > computerScore) {
//                 winner.textContent = `You won the game with a score of ${usrScore}`;
//             } else if (usrScore == computerScore) {
//                 winner.textContent = "NOBODY WINS. Everybody has an equal number of scores.";
//             } else if (usrScore < computerScore) {
//                 winner.textContent = `Computer is the final winner with a score of ${computerScore}`;
//             }
//             userpoints.textContent(usrScore);
//             computerpoints.textContent(computerScore);
//         } else {
//             playRound(userPlay(), computerPlay());
//         }
//     }
// }

// functionn to reset the game
function reset() {
    usrScore = 0;
    computerScore = 0;
}

const body = document.querySelector("body");
body.style.background = "grey";


const result = document.getElementById('result');
const winner = document.getElementById('winner');
const userpoints = document.getElementById('userpoints');
const computerpoints = document.getElementById('computerpoints');
