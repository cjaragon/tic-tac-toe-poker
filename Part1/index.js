let board = []

const play = (clickedId) => {
    let playerSpan = document.getElementById('player')
    let clickedElement = document.getElementById(clickedId)

    if (board[clickedId] === undefined) {
        if (playerSpan.innerText === 'X') {
            playerSpan.innerText = 'O'
            clickedElement.innerText = 'X'
            board[clickedId] = 'X'
        } else {
            playerSpan.innerText = 'X'
            clickedElement.innerText = 'O'
            board[clickedId] = 'O'
        }
    }

    const topLeft = board[0]
    const topCenter = board[1]
    const topRight = board[2]
    const middleLeft = board[3]
    const middleCenter = board[4]
    const middleRight = board[5]
    const bottomLeft = board[6]
    const bottomCenter = board[7]
    const bottomRight = board[8]

    if (topLeft !== undefined && topLeft === topCenter &&
        topLeft === topRight) {
        alert(`${topLeft} is the winner!`)
        resetBoard()
    }
    if (middleLeft !== undefined && middleLeft === middleCenter
        && middleLeft === middleRight) {
        alert(`${middleLeft} is the winner!`)
    }
    if (bottomLeft !== undefined && bottomLeft === bottomCenter
        && bottomLeft === bottomRight) {
        alert(`${bottomLeft} is the winner!`)
        resetBoard()
    }
    if (topLeft !== undefined && topLeft === middleLeft &&
        topLeft === bottomLeft) {
        alert(`${topLeft} is the winner!`)
        resetBoard()
    }
    if (topCenter !== undefined && topCenter === middleCenter
        && topCenter === bottomCenter) {
        alert(`${topCenter} is the winner!`)
        resetBoard()
    }
    if (topRight !== undefined && topRight === middleRight &&
        topRight === bottomRight) {
        alert(`${topRight} is the winner!`)
        resetBoard()
    }
    if (bottomLeft !== undefined && bottomLeft === middleCenter
        && bottomLeft === topRight) {
        alert(`${bottomLeft} is the winner!`)
        resetBoard()
    }
    if (topLeft !== undefined && topLeft === middleCenter &&
        topLeft === bottomRight) {
        alert(`${topLeft} is the winner!`)
        resetBoard()
    }

    let boardFull = true;
    for (let i = 0; i <= 8; i++) {
        if (board[i] === undefined) {
            boardFull = false;
        }
    }
    if (boardFull === true) {
        alert("Cat's game, there is no winner!");
        resetBoard()
    }

}

const resetBoard = () =>{
    let squares = document.getElementsByTagName('td')
    for (i = 0; i < squares.length; i++){
        squares[i].innerText = ''
    }
    board = []
}


