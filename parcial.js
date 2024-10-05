function filterGames(category) {
    let games = document.querySelectorAll('.game');
    games.forEach(game => {
        if (category === 'all' || game.classList.contains(category)) {
            game.style.display = 'block';
        } else {
            game.style.display = 'none';
        }
    });
}
function showGameDetail(gameId) {
    let gameDetailSection = document.getElementById('game-detail');
    gameDetailSection.classList.add('active');
    document.getElementById('game-description').innerText = "Descripción detallada del juego " + gameId;
}

function closeGameDetail() {
    let gameDetailSection = document.getElementById('game-detail');
    gameDetailSection.classList.remove('active');
}
function toggleFavorite(star) {
    if (star.textContent === '☆') {
        star.textContent = '★'; 
    } else {
        star.textContent = '☆'; 
    }
}

function startGame() {
    document.addEventListener('keydown', function(event) {
        let character = document.getElementById('character');
        let positionLeft = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
        let positionTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));

        if (event.key === 'ArrowRight') {
            character.style.left = positionLeft + 10 + 'px';
        } else if (event.key === 'ArrowLeft') {
            character.style.left = positionLeft - 10 + 'px';
        } else if (event.key === 'ArrowUp') {
            character.style.top = positionTop - 10 + 'px';
        } else if (event.key === 'ArrowDown') {
            character.style.top = positionTop + 10 + 'px';
        }
    });
}
