let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses: 0,
    ties: 0
};
updatescoreElement();

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

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
            result = 'You Lose';
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
    document.querySelector('.js-moves').innerHTML = `You <img src="assets/${playerMove}-emoji.png" class="moves-img"> VS <img src="assets/${computerMove}-emoji.png" class="moves-img"> <img style="width: 50px;" src="assets/computer.png" class="com">`;
}

function pickComputerMove() {
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
        return 'Rock';
    } else if (randomNumber < 2 / 3) {
        return 'Paper';
    } else {
        return 'Scissor';
    }
}

function updatescoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
}

function resetScore() {
    score.wins = 0;
    score.loses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updatescoreElement();
    document.querySelector('.js-result').innerHTML = '';
    document.querySelector('.js-moves').innerHTML = '';
}

