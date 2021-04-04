// var username = prompt('what is your username')
window.requestAnimationFrame(draw);

document.body.addEventListener('keydown', handleCharacterMove)

const numGrids = 30
const windowWidth = window.innerWidth
const windowHeight = window.innerHeight
const canvasWidth = windowWidth - (windowWidth % numGrids) // gets the next lowest number that is evenly divisible by numGrids
const gridWidth = Math.floor(canvasWidth / numGrids)
const halfGridWidth = gridWidth / 2
const numVertGrids = Math.floor(windowHeight / gridWidth)
const canvasHeight = windowHeight - (windowHeight % numVertGrids)
// debugger
const playerStartY = numVertGrids * halfGridWidth + halfGridWidth;

const wall1pos = {
    x: gridWidth * (numGrids / 2),
    y: 0,
    h: gridWidth * 6,
}


// debugger
let charPosition = {
    x: halfGridWidth,
    y: playerStartY,
}

function handleCharacterMove(event) {
    // debugger
    // event.preventDefault();
    const { code } = event;

    switch(code) {
        case "ArrowLeft":
            if (canMove(code, charPosition)) {
                moveLeft(charPosition);
            }
            break;
        case "ArrowRight":
            if (canMove(code, charPosition)) {
                moveRight(charPosition);
            }
            break;
        case "ArrowUp":
            moveUp(charPosition);
            break;
        case "ArrowDown":
            moveDown(charPosition);
            break;
    }
}

function moveLeft(currentPos) {
    charPosition.x = currentPos.x - gridWidth;
}
function moveRight(currentPos) {
    charPosition.x = currentPos.x + gridWidth;
}
function moveUp(currentPos) {
    charPosition.y = currentPos.y - gridWidth;
}
function moveDown(currentPos) {
    charPosition.y = currentPos.y + gridWidth;
}

function canMove(code, currentPos) {
    let canMove = true;
    switch(code) {
        case "ArrowLeft":
            // debugger
            if (currentPos.x <= gridWidth / 2) {
                canMove = false;
            }

            if (currentPos.x === wall1pos.x + (gridWidth + halfGridWidth) && (currentPos.y > wall1pos.y && currentPos.y < (wall1pos.y + wall1pos.h))) {
                canMove = false
            }
            return canMove
        case "ArrowRight":
            canMove = true;
            if (currentPos.x >= canvasWidth - gridWidth) {
                canMove = false;
            }
            if (currentPos.x === wall1pos.x - halfGridWidth && (currentPos.y > wall1pos.y && currentPos.y < (wall1pos.y + wall1pos.h))) {
                canMove = false
            }
            return canMove;
        case "ArrowUp":
            // moveUp(charPosition);
            break;
        case "ArrowDown":
            // moveDown(charPosition);
            break;
    }
}


function draw() {


    const canvas = document.querySelector('canvas')

    canvas.width = canvasWidth
    canvas.height = canvasHeight

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

    wall(wall1pos.x, wall1pos.y, wall1pos.h)
    wall(gridWidth * (numGrids / 3), gridWidth * 4, gridWidth * 10)
    wall(gridWidth * (numGrids - 8), gridWidth * 2, gridWidth * 8)




    player({ centerX: charPosition.x, centerY: charPosition.y })


    window.requestAnimationFrame(draw);
}
