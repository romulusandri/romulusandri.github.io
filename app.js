let p1 = {
    score: 0,
    button: document.querySelector('#aButton'),
    display: document.querySelector('#aDisplay')
}
let p2 = {
    score: 0,
    button: document.querySelector('#bButton'),
    display: document.querySelector('#bDisplay')
}

let resetButton = document.querySelector('#reset');
let scoreSelect = document.querySelector('#playto');
let indicatorScore = 3;
let berhenti = false;

function updateScores(player, musuh) {
    if (!berhenti) {
        player.score += 1;
        if (player.score === indicatorScore) {
            berhenti = true;
            player.display.classList.add('playerA');
            musuh.display.classList.add('playerB');
            player.button.disabled = true;
            musuh.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}


p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})


scoreSelect.addEventListener('change', function () {
    indicatorScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    berhenti = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('playerA', 'playerB');
        p.button.disabled = false;
    }
}
