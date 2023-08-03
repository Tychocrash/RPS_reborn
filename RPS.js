/*
rock = 0
paper = 1
scissors = 2
*/

let computerChoice
let roundResult

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);
    return computerChoice
}

getComputerChoice()

console.log(computerChoice)


function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        roundResult = 'It\'s a tie'
    } else if {
        (playerChoice === 1 && computerChoice === 0 || playerChoice === 2 && computerChoice === 1 || playerChoice === 0 && computerChoice === 2)
        roundResult = 'You Win!'
    } else {
        roundResult = 'You Lose!'
    }
    return roundResult
}