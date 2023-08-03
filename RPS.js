/*
rock = 0
paper = 1
scissors = 2
player win = 0
player lose = 1
tie = 2
*/

let computerChoice;
let playerChoice = 1;
let roundResult;
let resultString = ['You win!', 'You lose!', 'It\'s a tie']

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);
    return computerChoice
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        roundResult = 2
    } else if (playerChoice === 1 && computerChoice === 0 || playerChoice === 2 && computerChoice === 1 || playerChoice === 0 && computerChoice === 2) {
        roundResult = 0
    } else {
        roundResult = 1
    }
    return roundResult
}

function game() {
    let computerScore = 0;
    let playerScore = 0;
    while (playerScore < 3 && computerScore < 3) {
        getComputerChoice()
        playRound(playerChoice, computerChoice);
        if (roundResult === 0) {
            playerScore += 1
        } else if (roundResult === 1) {
            computerScore += 1
        }
        console.log(`${resultString[roundResult]} The score is ${playerScore} to ${computerScore}`)
    }
    if (playerScore > computerScore) {
        console.log('You win best of five!')
    } else {
        console.log('You lost best of five!')
    }
}

game()