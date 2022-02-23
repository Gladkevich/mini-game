const board = document.querySelector('#board')
const colors = ['#f36e62', '#4b255c', '#7cc5f1', '#f39729', '#71f132', '#ff034a', '#fd0000', '#e9ef2a', '#37eaea']
const SQUARES_NUMBER = 1050

for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener("mouseover", () =>
        setColor(square))

    square.addEventListener("mouseleave", () =>
        removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
 element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}