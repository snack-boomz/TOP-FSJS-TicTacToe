const gameBoard = (() => {
    const board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    const playerList = []
    const max = 1;
    let playerTurn = 1;

    const grabBoard = () => {
        return board;
    }
    const grabElement = (element) => {
        return board[element];
    }

    const setElement = (index, element) => {
        console.log("Index is " + index + ", element is" + element)
        board[index] = element; 
    }

    const getPlayerTurn = () => {
        if (playerTurn == 1) {
            return "X";
        } else if (playerTurn == 2) {
            return "O";
        }
    }

    const setPlayerTurn = (player) => {
        if (player == 1) {
            playerTurn = 1;
        } else if (player == 2) {
            playerTurn = 2;
        }
    }

    const getPlayerList = () => {
        return playerList;
    }

    const addPlayer = (player) => {
        playerList.push(player);
    }

    return {
        grabBoard,
        grabElement,
        setElement,
        getPlayerTurn,
        setPlayerTurn,
        getPlayerList,
        addPlayer,
    };
})();

const displayController = (() => {
    const displayBoard = () => {
        const boardArray = document.querySelectorAll('#tictactoe-container > div');

        for (const [index, play] of gameBoard.grabBoard().entries()) {
            const content = document.createElement('pre');
            content.textContent = `${play}`;
            content.classList.add(`index${index}`);
            boardArray[index].appendChild(content);
        }
    }

    const topLeft = document.getElementById('top-left');
    const topMiddle = document.getElementById('top-middle');
    const topRight = document.getElementById('top-right');
    const middleLeft = document.getElementById('middle-left');
    const middleMiddle = document.getElementById('middle-middle');
    const middleRight = document.getElementById('middle-right');
    const bottomLeft = document.getElementById('bottom-left');
    const bottomBottom = document.getElementById('bottom-bottom');
    const bottomRight = document.getElementById('bottom-right');
    topLeft.addEventListener('click', () => {
        if (gameBoard.grabElement(0) == " ") {
            gameBoard.setElement(0, gameBoard.getPlayerTurn());
            const originalMarker = document.querySelector(`.index0`);
            console.log(originalMarker);
            originalMarker.remove();
            const marker = document.createElement('pre');
            marker.textContent = `${gameBoard.grabElement(0)}`;
            topLeft.appendChild(marker);

            // switch player
            if (gameBoard.getPlayerTurn() == "X") {
                gameBoard.setPlayerTurn(2);
            } else if (gameBoard.getPlayerTurn() == "O") {
                gameBoard.setPlayerTurn(1);
            }
            
        }
        
    });

    topMiddle.addEventListener('click', () => {
        if (gameBoard.grabElement(1) == " ") {
            gameBoard.setElement(1, gameBoard.getPlayerTurn());
            const originalMarker = document.querySelector(`.index1`);
            console.log(originalMarker);
            originalMarker.remove();
            const marker = document.createElement('p');
            marker.textContent = `${gameBoard.grabElement(1)}`;
            topMiddle.appendChild(marker);

            // switch player
            if (gameBoard.getPlayerTurn() == "X") {
                gameBoard.setPlayerTurn(2);
            } else if (gameBoard.getPlayerTurn() == "O") {
                gameBoard.setPlayerTurn(1);
            }
            
        }
    });

    topRight.addEventListener('click', () => {});

    middleLeft.addEventListener('click', () => {});

    middleMiddle.addEventListener('click', () => {});

    middleRight.addEventListener('click', () => {});

    bottomLeft.addEventListener('click', () => {});

    bottomBottom.addEventListener('click', () => {});

    bottomRight.addEventListener('click', () => {});

    return {
        displayBoard,
    };
})();

const playerFactory = (name) => {
    return { name };
};

playerOne = playerFactory('Trey');
gameBoard.addPlayer(playerOne);
playerTwo = playerFactory('Trey-2');
gameBoard.addPlayer(playerTwo);



console.log(playerOne.name);

console.log(displayController.displayBoard());










