const playerScoreSpan = document.querySelector('#player-score');
const computerScoreSpan = document.querySelector('#computer-score');
const allOptionButtons = document.querySelectorAll('div[class="btn-container"] > button');
const resultMessage = document.querySelector('#results-msg');
const winnerMsg = document.querySelector('#winner-msg');
const resetButton = document.querySelector('#reset-game-btn');

const choises = ["Rock","Paper","Scissors"];

let playerScore = 0;
let computerScore = 0;

allOptionButtons.forEach(button => button.addEventListener('click',showResult));
resetButton.addEventListener('click',resetGame);


function showResult(e){
    const playerChoice = e.target.textContent;  
    const computerChoice = generateComputerChoice();

    const isPlayerWon = hasPlayerWin(playerChoice,computerChoice);

    if(isPlayerWon){
        playerScore++;
        playerScoreSpan.textContent = playerScore;
        resultMessage.textContent = `You picked ${playerChoice}.Computer pick ${computerChoice}.${playerChoice} beat ${computerChoice}!`;    
    }else{
        computerScore++;
        computerScoreSpan.textContent = computerScore;
        resultMessage.textContent = `You picked ${playerChoice}.Computer pick ${computerChoice}.${computerChoice} beat ${playerChoice}!`;    
    }
    
    if(playerScore === 3){
        winnerMsg.textContent = 'Congratilutions you won!'
    }else if(computerScore === 3){
        winnerMsg.textContent = 'Sorry you lose!';
        resetButton.style.display = 'block';  
    }

    
       
    
}




function generateComputerChoice(){
    const randomIndex = Math.floor(Math.random() * 3);
    return choises[randomIndex];
}



function hasPlayerWin(playerChoice,computerChoice){
    if(playerChoice === 'Rock' && computerChoice === "Paper" 
    || playerChoice === "Paper" && computerChoice === "Rock"
    || playerChoice === "Scissors" && computerChoice === "Paper"    
    ){
        return true;
    }else if(computerChoice === "Rock" && playerChoice === "Paper" 
        || computerChoice ==="Paper" && playerChoice === "Rock" 
        || computerChoice === "Scissors" && playerChoice === "Paper"
    ){
        return false;
    }else {
        return false;
    }
}


function resetGame(){
    resetButton.style.display = 'none';
    winnerMsg.textContent = '';
    resultMessage.textContent = '';
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
}