// var username = prompt('what is your username')
window.requestAnimationFrame(draw);

document.body.addEventListener('keydown', handleCharacterMove)

const numGrids = 30
const gridWidth = Math.floor(window.innerWidth / numGrids)
const halfGridWidth = gridWidth / 2
let charPosition = {
    x: halfGridWidth,
    y: window.innerHeight / 2,
}

function handleCharacterMove(event) {
    // debugger
    // event.preventDefault();

    const { code } = event;

    switch(code) {
        case "ArrowLeft":
            moveLeft(charPosition);
            break;
        case "ArrowRight":

            moveRight(charPosition);
            break;
        case "ArrowUp":
            moveUp(charPosition);
            break;
        case "ArrowDown":
            moveDown(charPosition);
            break;
    }
}

function moveLeft(previousPos) {
    charPosition.x = previousPos.x - gridWidth;
}
function moveRight(previousPos) {
    charPosition.x = previousPos.x + gridWidth;
}
function moveUp(previousPos) {
    charPosition.y = previousPos.y - gridWidth;
}
function moveDown(previousPos) {
    charPosition.y = previousPos.y + gridWidth;
}


function draw() {


    const canvas = document.querySelector('canvas')

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const ctx = canvas.getContext('2d')

    function player({ centerX, centerY }) {
        ctx.beginPath()
        ctx.arc(centerX, centerY, halfGridWidth, 0, 2 * Math.PI, false)
        ctx.fillStyle = 'purple'
        ctx.fill()
    }

    function wall(x, y, height) {
        ctx.beginPath()
        ctx.strokeStyle = 'black'
        ctx.fillStyle = 'white'
        ctx.rect(x, y, gridWidth, height)
        ctx.fill()
        ctx.stroke()
    }

    wall(gridWidth * (numGrids / 2), 0, gridWidth * 6)
    wall(gridWidth * (numGrids / 3), gridWidth * 4, gridWidth * 10)
    wall(gridWidth * (numGrids - 8), gridWidth * 2, gridWidth * 8)

    player({ centerX: charPosition.x, centerY: charPosition.y })


    window.requestAnimationFrame(draw);
}
