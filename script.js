const gameBoard = document.querySelector('.game__board');
const messageTurn = document.querySelector('.game__turn');
const endGame = document.querySelector('.endgame');
const endGameResult = document.querySelector('.endgame__result');
const buttonReset = document.querySelector('.endgame__button');

let isTurnX = true;
let turn = 0;
let maxTurn = 9;
let players = {
    x: 'cross',
    o: 'circle'
}

messageTurn.textContent = isTurnX ? 'X' : 'O';
createBoard();

function createBoard(){
    const cells = 9;

    while(gameBoard.firstElementChild){
        gameBoard.firstElementChild.remove();
    }

    for(let i = 0; i < cells; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('click', handleGame, {once:true});

        gameBoard.append(div);
    }
}

function handleGame(e){
    const currentCell = e.currentTarget;
    const currentTurn = isTurnX ? players.x : players.o;
    
    turn++;
    drawShape(currentCell, currentTurn)

    changeTurn();
}

function drawShape(element, newClass){
    element.classList.add(newClass);
}

function changeTurn(){
    isTurnX = !isTurnX;
    messageTurn.textContent = isTurnX ? 'X' : 'O';
}