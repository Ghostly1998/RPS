//get button element from html page
const container = document.querySelector('.container');
const button = document.querySelectorAll('#btn'); 
// console.log(button);


//Function to get computer choice
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    if(computerChoice == 0){
        return 'Rock';
    }

    else if(computerChoice == 1){
        return 'Paper';
    }
    else return 'Scissors';
}

//event listener for player choice and playing a round
button.forEach((btn) => {
    btn.addEventListener('click', e => {
        let playerChoice = e.target.value;
        let computerChoice = getComputerChoice();
        let gameResult = playRound(computerChoice, playerChoice);
        // console.log(gameResult);
        result(gameResult);
    });
});

function result(gameResult){
    const divResult = document.createElement('div');
    divResult.textContent = gameResult;
    container.appendChild(divResult);
}




//Function to play a single round
function playRound(computerSelection, playerSelection){
    
    // console.log(computerSelection);
    // console.log(playerSelection);
    if(computerSelection === playerSelection){
        return `Computer's ${computerSelection} ties Player's ${playerSelection}!`;
    }
    else if(computerSelection === 'Rock'){
        if(playerSelection === 'Paper'){
            return `Player's ${playerSelection} beats Computer's ${computerSelection}!`;
        }
        else{
            return `Computer's ${computerSelection} beats Player's ${playerSelection}!`;  
        } 
        
    }
    else if(computerSelection === 'Paper'){
        if(playerSelection === 'Scissors'){
            return `Player's ${playerSelection} beats Computer's ${computerSelection}!`;
        }
        else{
            return `Computer's ${computerSelection} beats Player's ${playerSelection}!`;
        }
        
    }  
    else if(computerSelection === 'Scissors'){
        if(playerSelection === 'Rock'){
            return `Player's ${playerSelection} beats Computer's ${computerSelection}!`;
        }
        else{
            return `Computer's ${computerSelection} beats Player's ${playerSelection}!`;
        }
        
    } 
}

//Function to play 5 rounds of game and display each round result and winner at the end.
// function game(){
//     let playerWins = 0;
//     let computerWins = 0;
//     for( let i = 0; i < 5; i++){
//         let result = playRound();
//         console.log(result);
//         if(result == 'Computer Wins!'){
//             computerWins++;
//         }
//         if(result == 'Player Wins!'){
//             playerWins++;
//         }
//     }
//     if(playerWins < computerWins){
//         return 'Computer Wins!'
//     }
//     else if(playerWins > computerWins){
//         return 'Player Wins!'
//     }
//     else{
//         return "It's a Tie!"
//     }
// }

// console.log(game());

