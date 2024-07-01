let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses: 0,
    ties: 0
};
updatescoreElement();
function playGame(playerMove) {
    computerMove = PickComputerMove();
    result = '';
    if (playerMove === 'Scissor') {
        if (computerMove === 'Rock') {
            result = 'You Lose';
        } else if (computerMove === 'Scissor') {
            result = 'You Tie';
        } else if (computerMove === 'Paper') {
            result = 'You Win';
        }
    } else if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'You Tie';
        } else if (computerMove === 'Scissor') {
            result = 'You Win';
        } else if (computerMove === 'Paper') {
            result = 'You Lose'
        }
    } else if (playerMove === 'Paper') {

        if (computerMove === 'Rock') {
            result = 'You Win';
        } else if (computerMove === 'Scissor') {
            result = 'You Lose';
        } else if (computerMove === 'Paper') {
            result = 'You Tie';
        }
    }
    if (result === 'You Win') {
        score.wins += 1;
    } else if (result === 'You Lose') {
        score.loses += 1;
    } else if (result === 'You Tie') {
        score.ties += 1;
    }
    localStorage.setItem('score', JSON.stringify(score));
    updatescoreElement();
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You <img src="assets/${playerMove}-emoji.png" class="moves-img"> VS  <img src="assets/${computerMove}-emoji.png" class="moves-img"> <img style=" width: 50px" src="assets/computer.png" class="com">`;
}
function PickComputerMove() {
    randomNumber = Math.random();
    computerMove = '';
    if (randomNumber > 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    } else if (randomNumber > 2 / 3 && randomNumber < 1) {
        computerMove = 'Scissor';
    }
    return computerMove;
}
function updatescoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
}