// board
let boxSize = 25;
let rows = 20;
let columns = 20;
let board;
let context;

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * boxSize;
    board.width = columns * boxSize;
    context = board.getContext("2d");
    update();
}

function update() {
    context.fillStyle = 'grey';
    context.fillRect(0, 0, board.width, board.height);
}