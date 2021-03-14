// var username = prompt('what is your username')
window.requestAnimationFrame(draw);

function draw() {
    console.log(document.body)
    document.body.addEventListener('keydown', handleCharacterMove)

    function handleCharacterMove(event) {
        // debugger
        event.preventDefault();

        const { code } = event;

        switch(code) {
            case "ArrowLeft":
                console.log('called arrow left');
                moveRight();
                break;
            case "ArrowRight":
                console.log('called arrow right');
                break;
            case "ArrowUp":
                console.log('called arrow up');
                break;
            case "ArrowDown":
                console.log('called arrow down');
                break;
        }
    }

    const canvas = document.querySelector('canvas')

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const ctx = canvas.getContext('2d')
    const numGrids = 30
    const gridWidth = Math.floor(window.innerWidth / numGrids)
    const halfGridWidth = gridWidth / 2

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

    player({ centerX: halfGridWidth, centerY: window.innerHeight / 2 })
    function moveRight() {
        player()
    }

    window.requestAnimationFrame(draw);
}
