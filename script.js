let computerChoice = 'Waiting for your selection';
let humanScore = 0;
let computerScore = 0;
let playerSelection = 'Not Selected';

const getHumanChoice = () => {
    return playerSelection.toLocaleLowerCase();
}

const getComputerChoice = () => {
    let random = Math.floor(Math.random()*(4-1)+1);

    return (random == 1) ? computerChoice = 'rock' 
        : (random == 2) ? computerChoice = 'paper'
        : computerChoice = 'scissors';
}

const playRound = (playerSelection, computerChoice) => {

    if(computerChoice === playerSelection){
        console.log('Draw! Play again!');
    } else if(computerChoice == 'rock') {
        if(playerSelection == 'paper'){
            console.log('You win! Paper beats Rock');
            humanScore++;
        }
        else computerScore++;
    } else if(computerChoice == 'paper') {
        if(playerSelection == 'rock'){
            console.log('You lose! Paper beats Rock');
            computerScore++;
        }
        else humanScore++;
    } else if(computerChoice == 'scissors') {
        if(playerSelection == 'paper'){
            console.log('You lose! Scissors beats Paper');
            computerScore++;
        }
        else humanScore++;
    } else { console.log('error!'); }
}

const seeValue = () => {
    results.textContent = '\nMy selection: '+ playerSelection+
    "\nBot selected: "+computerChoice+'\nMy Score: '+
    humanScore+ '\nBot Score: '+computerScore;
}

const seeWinner = () => {
    content.appendChild(winner);
    setInterval(seeValue, 0);
    if(humanScore == 5){
        winner.textContent = 'You win :D!';
    } else if(computerScore == 5){
        winner.textContent = 'You lose :(';
    }
}

let rock = document.querySelector('#rock');
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

let selectionList = [rock, paper, scissors]

selectionList.forEach((e) => {
    e.addEventListener('click',() => {
        playerSelection = e.textContent.toLocaleLowerCase();
        playRound(getHumanChoice(), getComputerChoice());
        seeWinner();
    })
});

let content = document.querySelector('div');
let results = document.createElement('div');
let winner = document.createElement('p');

setInterval(seeValue, 1000);

content.appendChild(results);

results.setAttribute('style', 'white-space: pre; font-size: 18px');