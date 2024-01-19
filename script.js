let userScore = 0;
let computerScore = 0;

function makeChoice(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const result = determineWinner(playerChoice, computerChoice);

    updateScore(result);
    displayResult(result, playerChoice, computerChoice);
}

function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

function updateScore(result) {
    const userScoreElement = document.getElementById('user-score');
    const computerScoreElement = document.getElementById('computer-score');

    if (result === 'You win!') {
        userScore++;
    } else if (result === 'Computer wins!') {
        computerScore++;
    }

    userScoreElement.textContent = userScore;
    computerScoreElement.textContent = computerScore;
}

function displayResult(result, playerChoice, computerChoice) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <p>Your Choice: ${playerChoice}</p>
        <p>Computer's Choice: ${computerChoice}</p>
        <p>${result}</p>
    `;
}

function resetGame() {
    userScore = 0;
    computerScore = 0;

    const userScoreElement = document.getElementById('user-score');
    const computerScoreElement = document.getElementById('computer-score');

    userScoreElement.textContent = userScore;
    computerScoreElement.textContent = computerScore;

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = '';
}
