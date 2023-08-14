let board = document.getElementById('board')
let xAxis = 0
let random = `${Math.floor(Math.random() * 12)},${Math.floor(Math.random() * 12)}`
let snakeBody = []
let left = false
let up = false
let right = false
let down = false
let snake;
let snakeX = 1
let snakeY = 1
let food;
let score = 0
let scoreText = document.querySelector('.score')


board.style.width = '300px'
board.style.height = '300px'

function drawGrid() {
    for (let i = 0; i < 12; i++) {
        for (let y = 0; y < 12; y++) {
            let div = document.createElement('div')
            div.setAttribute('id',`plot ${xAxis},${y}`)
            div.style.backgroundColor = 'white'
            div.style.width = '25px'
            div.style.height = '25px'
            board.appendChild(div)
        }
    xAxis += 1
    }
}

drawGrid()

document.addEventListener("keydown", event => {
    if (event.keyCode === 37 && right != true) {
        left = true;
        up = false
        right = false
        down = false
    }
    if (event.keyCode === 38 && down != true) {
        left = false;
        up = true
        right = false
        down = false
    }
    if (event.keyCode === 39 && left != true) {
        left = false;
        up = false
        right = true
        down = false
    }
    if (event.keyCode === 40 && up != true) {
        left = false;
        up = false
        right = false
        down = true
    }
})

setInterval(function update() {
    let snakeHead = `plot ${snakeX},${snakeY}`
    let snake = document.getElementById(snakeHead)
    document.querySelectorAll('div').forEach(item => {
        if (item != food) {
            item.style.backgroundColor = 'white'
        }
    })
    if (left === false && up === false && right === false && down === false) {
        console.log('all false')
    } else if (left === true) {
        snakeY -= 1
        snake.style.backgroundColor = 'green'
    } else if (right === true) {
        snakeY += 1
        snake.style.backgroundColor = 'green'
    } else if (up === true) {
        snakeX -= 1
        snake.style.backgroundColor = 'green'
    } else if (down === true) {
        snakeX += 1
        snake.style.backgroundColor = 'green'
    }
    if (snake === food) {
        snakeBody.push(snakeHead)
        placeFood()
        score += 1
        scoreText.textContent = `Score: ${score}`
    }
    endOfBoard()
    console.log(snakeBody)
    // extendBody()
    let trail = document.getElementById(snakeBody[0])
    trail.style.backgroundColor = 'blue'
}, 100)

function placeFood() {
    let random = `${Math.floor(Math.random() * 12)},${Math.floor(Math.random() * 12)}`
    let plots = document.getElementById(`plot ${random}`)
    plots.style.backgroundColor = 'red'
    food = plots
}

placeFood()

function endOfBoard() {
    if (snakeX > 11) {
        snakeX = 0
    } else if (snakeX < 0) {
        snakeX = 11
    }
    if (snakeY > 11) {
        snakeY = 0
    } else if (snakeY < 0) {
        snakeY = 11
    }
}

// function extendBody() {
//     console.log(snakeHead)
//     snakeBody.push(snake)
//     snakeBody.pop(snakeBody)
//     console.log(snakeBody)
// }

