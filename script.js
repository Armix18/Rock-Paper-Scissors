let humanChoice;
let computerChoice;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let random = Math.floor(Math.random()*(4-1)+1);
    //console.log(random);

    return (random == 1) ? computerChoice = 'rock' 
        : (random == 2) ? computerChoice = 'paper'
        : computerChoice = 'scissors';
}

function getHumanChoice(){
    humanChoice = prompt('Pick rock, paper or scissors');
    return humanChoice.toLocaleLowerCase()
    //console.log(choice);
}

function playRound(humanChoice, computerChoice){

    //humanChoice = humanChoice.toLowercase()
    /*
    if(computerChoice == 'rock' && humanChoice == 'paper'){
        console.log('You lose! Paper beats rock')
    }
    */
    if(computerChoice === humanChoice){
        console.log('Draw! Play again!');
    } else if(computerChoice == 'rock') {
        if(humanChoice == 'paper'){
            console.log('You win! Paper beats Rock');
            humanScore++;
        }
        else if(humanChoice == 'scissors'){
            console.log('You lose! Rock beats Scissors');
            computerScore++;
        }
    } else if(computerChoice == 'paper') {
        if(humanChoice == 'rock'){
            console.log('You lose! Paper beats Rock');
            computerScore++;
        }
        else if(humanChoice == 'scissors'){
            console.log('You win! Scissors beats Paper');
            humanScore++;
        }
    } else if(computerChoice == 'scissors') {
        if(humanChoice == 'paper'){
            console.log('You lose! Scissors beats Paper');
            computerScore++;
        }
        else if(humanChoice == 'rock'){
            console.log('You win! Rock beats Scissors');
            humanScore++;
        }
    } else {
        console.log('error!');
    }
    
}

function seeValue(){
    console.log(humanChoice)
    console.log(computerChoice)
    console.log(humanScore)
    console.log(computerScore)
}

function playGame(){

    //let humanSelection = getHumanChoice()
    //let computerSelection = getComputerChoice()

    playRound(getHumanChoice(), getComputerChoice())
    seeValue()
    playRound(getHumanChoice(), getComputerChoice())
    seeValue()
    playRound(getHumanChoice(), getComputerChoice())
    seeValue()
    playRound(getHumanChoice(), getComputerChoice())
    seeValue()
    playRound(getHumanChoice(), getComputerChoice())
    seeValue()

    a = (humanScore>computerScore) ? console.log('You win!') : console.log('You lose =(')
}

playGame()


