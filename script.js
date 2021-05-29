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

    const displayPlayerTurn = () => {
        const playerTurnDisplay = document.getElementById('player-turn-display');
        
        if (gameBoard.getPlayerTurn() == 'X') {
            const placeholder = document.querySelector(`#player-turn-display-content`);
            const content = document.createElement('h2');
            content.textContent = `Player Turn: ${playerOne.name}`

            // reset class
            content.classList.remove('player-one');
            content.classList.remove('player-two');

            content.classList.add('player-one')
            console.log(content);

            // remove original placeholder if hasn't been removed already
            if (placeholder !== null) {
                placeholder.remove();
            }
            // remove previous player turn display if exists
            if (playerTurnDisplay.lastElementChild !== null) {
                playerTurnDisplay.lastElementChild.remove();
            }
            
            playerTurnDisplay.appendChild(content);
        } else if (gameBoard.getPlayerTurn() == 'O') {
            const placeholder = document.querySelector(`#player-turn-display-content`);
            const content = document.createElement('h2');
            content.textContent = `Player Turn: ${playerTwo.name}`

            // reset class
            content.classList.remove('player-one');
            content.classList.remove('player-two');

            content.classList.add('player-two')

            // remove original placeholder if hasn't been removed already
            if (placeholder !== null) {
                placeholder.remove();
            }

            // remove previous player turn display if exists
            if (playerTurnDisplay.lastElementChild !== null) {
                playerTurnDisplay.lastElementChild.remove();
            }

            console.log(content);
            playerTurnDisplay.appendChild(content);
        }
        
    }
    const playerOneHeader = document.getElementById('player-one-header');
    const playerOneInput = document.getElementById('player-one-name');
    const playerOneSubmit = document.getElementById('submit-player-one-name');
    const playerOneForm = document.getElementById('player-one-form'); 
    const playerOneNameDisplay = document.getElementById('player-one-name-display')
    
    const playerTwoHeader = document.getElementById('player-two-header');
    const playerTwoInput = document.getElementById('player-two-name');
    const playerTwoSubmit = document.getElementById('submit-player-two-name');
    const playerTwoForm = document.getElementById('player-two-form'); 
    const playerTwoNameDisplay = document.getElementById('player-two-name-display')
    
    const ticTacToeGrid = document.getElementById('tictactoe-container');

    const topLeft = document.getElementById('top-left');
    const topMiddle = document.getElementById('top-middle');
    const topRight = document.getElementById('top-right');
    const middleLeft = document.getElementById('middle-left');
    const middleMiddle = document.getElementById('middle-middle');
    const middleRight = document.getElementById('middle-right');
    const bottomLeft = document.getElementById('bottom-left');
    const bottomBottom = document.getElementById('bottom-bottom');
    const bottomRight = document.getElementById('bottom-right');

    playerOneSubmit.addEventListener('click', () => {
        playerOneHeader.classList.toggle('hide');
        playerOneInput.classList.toggle('hide');
        playerOneSubmit.classList.toggle('hide');
        const name = document.createElement('strong');
        const formContent = document.getElementById('player-one-name').value;
        name.textContent = `${formContent}`
        playerOneNameDisplay.appendChild(name);
        playerOneNameDisplay.classList.toggle('hide');
        const playerTwoNameDisplayContent = playerTwoNameDisplay.innerText;
        console.log(`playerTwoNameDisplayContent: ${playerTwoNameDisplayContent}`);
 
        playerOne = playerFactory(`${formContent}`)
        console.log(`Player One: ${playerOne.name}`) 
        gameBoard.addPlayer(playerOne);

        if (playerTwoNameDisplayContent !== "") { 
            ticTacToeGrid.classList.remove('cover');
            ticTacToeGrid.classList.remove('phase-out'); 
            displayController.displayPlayerTurn();
        }


    });

    playerTwoSubmit.addEventListener('click', () => {
        playerTwoHeader.classList.toggle('hide');
        playerTwoInput.classList.toggle('hide');
        playerTwoSubmit.classList.toggle('hide');
        const name = document.createElement('strong');
        const formContent = document.getElementById('player-two-name').value;
        name.textContent = `${formContent}`
        playerTwoNameDisplay.appendChild(name);
        playerTwoNameDisplay.classList.toggle('hide');
        const playerOneNameDisplayContent = document.getElementById('player-one-name-display').innerText;
        console.log(`PlayerOneNameDisplay.value: ${playerOneNameDisplayContent}`);


        playerTwo = playerFactory(`${formContent}`);
        console.log(`Player Two: ${playerTwo.name}`);
        gameBoard.addPlayer(playerTwo);

        if (playerOneNameDisplayContent !== "") { 
            ticTacToeGrid.classList.remove('cover');
            ticTacToeGrid.classList.remove('phase-out');
            displayController.displayPlayerTurn();
        }
    });

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

            displayController.displayPlayerTurn();
            
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

            displayController.displayPlayerTurn();
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
        displayPlayerTurn,
    };

})();

const playerFactory = (name) => {
    return { name };
};

console.log(displayController.displayBoard());








