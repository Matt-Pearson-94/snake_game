let board = document.getElementById('board')
let xAxis = 0
// let yAxis = xAxis

board.style.width = '300px'
board.style.height = '300px'
// board.style.backgroundColor = 'white'

function drawGrid() {
    for (let i = 0; i < 12; i++) {
        for (let y = 0; y < 12; y++) {
            let div = document.createElement('div')
            div.setAttribute('id',`${xAxis},${y}`)
            div.style.backgroundColor = 'white'
            div.style.width = '25px'
            div.style.height = '25px'
            board.appendChild(div)
        }
    xAxis += 1
    }
}

drawGrid()

window.onload = (placeFood())

function placeFood() {
    let random = `${Math.floor(Math.random() * 12)},${Math.floor(Math.random() * 12)}`
    let plots = document.getElementById(random)
    plots.style.backgroundColor = 'red'

}

