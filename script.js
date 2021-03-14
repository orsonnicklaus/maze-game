const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext('2d')
const numGrids = 30
const gridWidth = Math.floor(window.innerWidth / numGrids)
const halfGridWidth = gridWidth / 2

function player({ centerX, centerY }) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, halfGridWidth, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'purple';
    ctx.fill();
}

function wall(x, y, height) {
    ctx.beginPath()
    ctx.strokeStyle = 'black'
    ctx.fillStyle = 'white'
    ctx.rect(x, y, gridWidth, height)
    ctx.fill()
    ctx.stroke()
}

wall(gridWidth * (numGrids / 2), gridWidth, gridWidth * 5)

player({ centerX: halfGridWidth, centerY: window.innerHeight / 2 })