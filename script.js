let fields = [];
let gameOver = false;
let currentShape = 'circle';

function fillShape(id) {
    if (!fields[id] && !gameOver) {
        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player-2').classList.remove('player-inactive');
            document.getElementById('player-1').classList.add('player-inactive');
        } else {
            currentShape = 'cross';
            document.getElementById('player-2').classList.add('player-inactive');
            document.getElementById('player-1').classList.remove('player-inactive');
        }

        fields[id] = currentShape;
        console.log(fields);
        draw();
        checkForWin();
    }
}



function restart() {
    gameOver = false;
    fields = [];
    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('restart-btn').classList.add('d-none');

    for (let i = 0; i < 9; i++) {
        document.getElementById('circle-' + i).classList.add('d-none');
        document.getElementById('cross-' + i).classList.add('d-none');
    }

    hideLines();
}

function hideLines() {
    for (let i = 1; i < 4; i++) {
        document.getElementById('line-' + i).classList.remove('show-h-lines');
    }
    for (let i = 4; i < 8; i++) {
        document.getElementById('line-' + i).classList.remove('show-v-lines');
    }
    document.getElementById('line-7').classList.remove('show-l7-line');
    document.getElementById('line-8').classList.remove('show-l8-line');
}


function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }

        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}


function checkForWin() {
    let winner;

    // First row
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-1').classList.add('show-h-lines');
    }
    // Second row
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[4];
        document.getElementById('line-2').classList.add('show-h-lines');
    }
    // Third row
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[7];
        document.getElementById('line-3').classList.add('show-h-lines');
    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-4').classList.add('show-v-lines');
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-5').classList.add('show-v-lines');
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-6').classList.add('show-v-lines');
    }

    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-7').classList.add('show-l7-line');

    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-8').classList.add('show-l8-line');
    }

    if (winner) {
        console.log('GEWONNEN:', winner);
        gameOver = true;
        setTimeout(function () {
            document.getElementById('game-over').classList.remove('d-none');
            document.getElementById('restart-btn').classList.remove('d-none');
        }, 1000);
    }
}