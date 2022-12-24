
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


//Function to play a single round
function playRound(computerSelection, playerSelection){
    computerSelection = getComputerChoice();
    playerSelection = 'Rock'; //hard inputting player choice
    // console.log(computerSelection);
    // console.log(playerSelection);
    if(computerSelection === playerSelection){
        return "It's a tie!";
    }
    else if(computerSelection === 'Rock'){
        if(playerSelection === 'Paper'){
            return 'Player Wins!';
        }
        else{
            return 'Computer Wins!';  
        } 
        
    }
    else if(computerSelection === 'Paper'){
        if(playerSelection === 'Scissors'){
            return 'Player Wins!';
        }
        else{
            return 'Computer Wins!';
        }
        
    }  
    else if(computerSelection === 'Scissors'){
        if(playerSelection === 'Rock'){
            return 'Player Wins!';
        }
        else{
            return 'Computer Wins!';
        }
        
    } 
}

//Function to play 5 rounds of game and display each round result and winner at the end.
function game(){
    let playerWins = 0;
    let computerWins = 0;
    for( let i = 0; i < 5; i++){
        let result = playRound();
        console.log(result);
        if(result == 'Computer Wins!'){
            computerWins++;
        }
        if(result == 'Player Wins!'){
            playerWins++;
        }
    }
    if(playerWins < computerWins){
        return 'Computer Wins!'
    }
    else if(playerWins > computerWins){
        return 'Player Wins!'
    }
    else{
        return "It's a Tie!"
    }
}

console.log(game());

