const gameBoard = (() => {
    const board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    let playerList = []
    const max = 2;
    let playerTurn = Math.floor(Math.random() * max + 1);
    // use non-arrow function to deliniate between public and private function
    function winnerLogic() {

        // Check if playerOne won

        if ((grabElement(0) == "X") && (grabElement(1) == "X") && (grabElement(2) == "X")) {
            playerOne.hasWon = true;
            return ["top-left", "top-middle", "top-right"];
        } else if ((grabElement(3) == "X") && (grabElement(4) == "X") && (grabElement(5) == "X")) {
            playerOne.hasWon = true;
            return ["middle-left", "middle-middle", "middle-right"];
        } else if ((grabElement(6) == "X") && (grabElement(7) == "X") && (grabElement(8) == "X")) {
            playerOne.hasWon = true;
            return ["bottom-left", "bottom-bottom", "bottom-right"];
        } else if ((grabElement(0) == "X") && (grabElement(3) == "X") && (grabElement(6) == "X")) {
            playerOne.hasWon = true;
            return ["top-left", "middle-left", "bottom-left"];
        } else if ((grabElement(1) == "X") && (grabElement(4) == "X") && (grabElement(7) == "X")) {
            playerOne.hasWon = true;
            return ["top-middle", "middle-middle", "bottom-right"];
        } else if ((grabElement(2) == "X") && (grabElement(5) == "X") && (grabElement(8) == "X")) {
            playerOne.hasWon = true;
            return ["top-right", "middle-right", "bottom-right"];
        } else if ((grabElement(0) == "X") && (grabElement(4) == "X") && (grabElement(8) == "X")) {
            playerOne.hasWon = true;
            return ["top-left", "middle-middle", "bottom-right"];
        } else if ((grabElement(2) == "X") && (grabElement(4) == "X") && (grabElement(6) == "X")) {
            playerOne.hasWon = true;
            return ["top-right", "middle-middle", "bottom-left"];
        }
        // Check if playerTwo won

        if ((grabElement(0) == "O") && (grabElement(1) == "O") && (grabElement(2) == "O")) {
            playerTwo.hasWon = true;
            return ["top-left", "top-middle", "top-right"];
        } else if ((grabElement(3) == "O") && (grabElement(4) == "O") && (grabElement(5) == "O")) {
            playerTwo.hasWon = true;
            return ["middle-left", "middle-middle", "middle-right"];
        } else if ((grabElement(6) == "O") && (grabElement(7) == "O") && (grabElement(8) == "O")) {
            playerTwo.hasWon = true;
            return ["bottom-left", "bottom-bottom", "bottom-right"];
        } else if ((grabElement(0) == "O") && (grabElement(3) == "O") && (grabElement(6) == "O")) {
            playerTwo.hasWon = true;
            return ["top-left", "middle-left", "bottom-left"];
        } else if ((grabElement(1) == "O") && (grabElement(4) == "O") && (grabElement(7) == "O")) {
            playerTwo.hasWon = true;
            return ["top-middle", "middle-middle", "bottom-right"];
        } else if ((grabElement(2) == "O") && (grabElement(5) == "O") && (grabElement(8) == "O")) {
            playerTwo.hasWon = true;
            return ["top-right", "middle-right", "bottom-right"];
        } else if ((grabElement(0) == "O") && (grabElement(4) == "O") && (grabElement(8) == "O")) {
            playerTwo.hasWon = true;
            return ["top-left", "middle-middle", "bottom-right"];
        } else if ((grabElement(2) == "O") && (grabElement(4) == "O") && (grabElement(6) == "O")) {
            playerTwo.hasWon = true;
            return ["top-right", "middle-middle", "bottom-left"];
        }
    }

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

    const addPlayer = (player, playerPosition) => {
        if (playerPosition == 0) {
            playerList[0] = player;
        } else if (playerPosition == 1) {
            playerList[1] = player;
        }
        
    }

    const checkForWinner = () => {
        if (winnerLogic() !== undefined) {
            winningPositions = winnerLogic();
            displayController.displayWinner(winningPositions[0], winningPositions[1], winningPositions[2]);
        }
    }

    const resetPlayers = () => {
        playerList = [];
    }

    const resetGame = () => {

        // clear and reset board elements
        for (const [index, element] of grabBoard().entries()) {
            setElement(index, " ")
        }
    }


    return {
        grabBoard,
        grabElement,
        setElement,
        getPlayerTurn,
        setPlayerTurn,
        getPlayerList,
        addPlayer,
        checkForWinner,
        resetPlayers,
        resetGame,

    };
})();

const displayController = (() => {
    const displayBoard = () => {
        const boardArray = document.querySelectorAll('#tictactoe-container > div');

        for (const [index, play] of gameBoard.grabBoard().entries()) {
            const content = document.createElement('pre');
            content.textCoantent = `${play}`;
            content.classList.add(`index${index}`);
            boardArray[index].appendChild(content);
        }
    }
    const resetDisplayBoard = () => {
        const playerTurnDisplay = document.getElementById('player-turn-display');
        const boardPreTags = document.querySelectorAll('#tictactoe-container > div > pre');

        for (pre of boardPreTags) {
            if (pre.parentNode.classList.contains('player-one-winning-tile')) {
                pre.parentNode.classList.remove('player-one-winning-tile');
            } else if (pre.parentNode.classList.contains('player-two-winning-tile')) {
                pre.parentNode.classList.remove('player-two-winning-tile');
            }
            
            pre.remove();
            //boardArray[index].remove();
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

    const displayWinner = (winningPosition1, winningPosition2, winningPosition3) => {
        const playerTurnDisplay = document.getElementById('player-turn-display');

        const placeholder = document.querySelector(`#player-turn-display-content`);
        const content = document.createElement('h2');

        const firstPosition = document.getElementById(`${winningPosition1}`)
        const secondPosition = document.getElementById(`${winningPosition2}`)
        const thirdPosition = document.getElementById(`${winningPosition3}`)

        // remove original placeholder if hasn't been removed already
        if (placeholder !== null) {
            placeholder.remove();
        }

        // remove previous player turn display if exists
        if (playerTurnDisplay.lastElementChild !== null) {
            playerTurnDisplay.lastElementChild.remove();
        }

        // Confirm who won
        if (gameBoard.getPlayerList()[0].hasWon) {
            content.textContent = `${playerOne.name} Wins!`

            content.classList.remove('player-one');
            content.classList.remove('player-two');

            content.classList.add('player-one');

            firstPosition.classList.add('player-one-winning-tile')
            secondPosition.classList.add('player-one-winning-tile')
            thirdPosition.classList.add('player-one-winning-tile')

            playerTurnDisplay.appendChild(content);

            const ticTacToeGrid = document.getElementById('tictactoe-container');

            ticTacToeGrid.classList.add('cover');
            ticTacToeGrid.classList.add('phase-out');

            displayPlayAgain();
            displayResetPlayers();


        } else if (gameBoard.getPlayerList()[1].hasWon) {
            content.textContent = `${playerTwo.name} Wins!`

            content.classList.remove('player-one');
            content.classList.remove('player-two');

            content.classList.add('player-two')

            firstPosition.classList.add('player-two-winning-tile')
            secondPosition.classList.add('player-two-winning-tile')
            thirdPosition.classList.add('player-two-winning-tile')


            playerTurnDisplay.appendChild(content);

            const ticTacToeGrid = document.getElementById('tictactoe-container');

            ticTacToeGrid.classList.add('cover');
            ticTacToeGrid.classList.add('phase-out');

            displayPlayAgain();
            displayResetPlayers();

        }
    }

    const displayPlayAgain = () => {

        const playAgainButton = document.getElementById('play-again-button');
        const resetPlayersButton = document.getElementById('reset-players-button');
        const ticTacToeGrid = document.getElementById('tictactoe-container');
        playAgainButton.classList.remove('hide');
        playAgainButton.addEventListener('click', () => {
            gameBoard.resetGame();
            displayController.resetDisplayBoard();
            displayController.displayBoard();
            displayController.displayPlayerTurn();
            
            ticTacToeGrid.classList.remove('phase-out');
            ticTacToeGrid.classList.remove('cover');
            
            playAgainButton.classList.add('hide');
            resetPlayersButton.classList.add('hide');
            
        })
    }

    const displayResetPlayers = () => {
        const resetPlayersButton = document.getElementById('reset-players-button');
        const playAgainButton = document.getElementById('play-again-button');
        const playerOneNameDisplay = document.getElementById('player-one-name-display')
        const playerOneMarker = document.getElementById('player-one-marker')
        const playerTwoNameDisplay = document.getElementById('player-two-name-display')
        const playerTwoMarker = document.getElementById('player-two-marker')
        const playerTurnDisplay = document.getElementById('player-turn-display');
        resetPlayersButton.classList.toggle('hide');
        resetPlayersButton.addEventListener('click', () => {
            // reset board interactivity
            ticTacToeGrid.classList.add('cover');
            ticTacToeGrid.classList.add('phase-out');
    
            // reset players
    
                playerOneHeader.classList.remove('hide');
                playerOneInput.classList.remove('hide');
                playerOneSubmit.classList.remove('hide');
                playerOneMarker.classList.remove('hide');
    
                playerTwoHeader.classList.remove('hide');
                playerTwoInput.classList.remove('hide');
                playerTwoSubmit.classList.remove('hide');
                playerTwoMarker.classList.remove('hide');
            
                gameBoard.resetPlayers();

                playerOneNameDisplay.lastElementChild.textContent = "";
                playerTwoNameDisplay.lastElementChild.textContent = "";
                

                gameBoard.resetGame();
                displayController.resetDisplayBoard();
                displayController.displayBoard();
                playerTurnDisplay.lastElementChild.textContent = "";

                playAgainButton.classList.add('hide');
                resetPlayersButton.classList.add('hide');
        });
        
    }
    const playerOneHeader = document.getElementById('player-one-header');
    const playerOneInput = document.getElementById('player-one-name');
    const playerOneSubmit = document.getElementById('submit-player-one-name');
    const playerOneForm = document.getElementById('player-one-form'); 
    const playerOneNameDisplay = document.getElementById('player-one-name-display')
    const playerOneMarker = document.getElementById('player-one-marker')
    
    const playerTwoHeader = document.getElementById('player-two-header');
    const playerTwoInput = document.getElementById('player-two-name');
    const playerTwoSubmit = document.getElementById('submit-player-two-name');
    const playerTwoForm = document.getElementById('player-two-form'); 
    const playerTwoNameDisplay = document.getElementById('player-two-name-display')
    const playerTwoMarker = document.getElementById('player-two-marker')
    
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
        const name = document.createElement('strong');
        const formContent = document.getElementById('player-one-name').value;
        
        // unsubmittable until content exists
        if (formContent == "") {

        } else {
            playerOneHeader.classList.add('hide');
            playerOneInput.classList.add('hide');
            playerOneSubmit.classList.add('hide');
            
            name.textContent = `${formContent}`
            playerOneNameDisplay.appendChild(name);
            playerOneNameDisplay.classList.remove('hide');
            playerOneMarker.classList.remove('hide')
            const playerTwoNameDisplayContent = playerTwoNameDisplay.innerText;
            console.log(`playerTwoNameDisplayContent: ${playerTwoNameDisplayContent}`);
    
            playerOne = playerFactory(`${formContent}`)
            console.log(`Player One: ${playerOne.name}, Has Won: ${playerOne.hasWon}`) 
            gameBoard.addPlayer(playerOne, 0);

            if (playerTwoNameDisplayContent !== "") { 
                ticTacToeGrid.classList.remove('cover');
                ticTacToeGrid.classList.remove('phase-out'); 
                displayController.displayPlayerTurn();
            }

        }
        
    });

    playerTwoSubmit.addEventListener('click', () => {
        const name = document.createElement('strong');
        const formContent = document.getElementById('player-two-name').value;

        // unsubmittable until content exists
        if (formContent == "") {
            
        } else {
            playerTwoHeader.classList.add('hide');
            playerTwoInput.classList.add('hide');
            playerTwoSubmit.classList.add('hide');
            
            name.textContent = `${formContent}`
            playerTwoNameDisplay.appendChild(name);
            playerTwoNameDisplay.classList.remove('hide');
            playerTwoMarker.classList.remove('hide');
            const playerOneNameDisplayContent = document.getElementById('player-one-name-display').innerText;
            console.log(`PlayerOneNameDisplay.value: ${playerOneNameDisplayContent}`);


            playerTwo = playerFactory(`${formContent}`);
            console.log(`Player Two: ${playerTwo.name}`);
            gameBoard.addPlayer(playerTwo, 1);

            if (playerOneNameDisplayContent !== "") { 
                ticTacToeGrid.classList.remove('cover');
                ticTacToeGrid.classList.remove('phase-out');
                displayController.displayPlayerTurn();
            }
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
            gameBoard.checkForWinner();
            
        }
        
    });

    topMiddle.addEventListener('click', () => {
        if (gameBoard.grabElement(1) == " ") {
            gameBoard.setElement(1, gameBoard.getPlayerTurn());
            const originalMarker = document.querySelector(`.index1`);
            console.log(originalMarker);
            originalMarker.remove();
            const marker = document.createElement('pre');
            marker.textContent = `${gameBoard.grabElement(1)}`;
            topMiddle.appendChild(marker);

            // switch player
            if (gameBoard.getPlayerTurn() == "X") {
                gameBoard.setPlayerTurn(2);
            } else if (gameBoard.getPlayerTurn() == "O") {
                gameBoard.setPlayerTurn(1);
            }

            displayController.displayPlayerTurn();
            gameBoard.checkForWinner();
        }
    });

    topRight.addEventListener('click', () => {
        if (gameBoard.grabElement(2) == " ") {
            gameBoard.setElement(2, gameBoard.getPlayerTurn());
            const originalMarker = document.querySelector(`.index2`);
            console.log(originalMarker);
            originalMarker.remove();
            const marker = document.createElement('pre');
            marker.textContent = `${gameBoard.grabElement(2)}`;
            topRight.appendChild(marker);

            // switch player
            if (gameBoard.getPlayerTurn() == "X") {
                gameBoard.setPlayerTurn(2);
            } else if (gameBoard.getPlayerTurn() == "O") {
                gameBoard.setPlayerTurn(1);
            }

            displayController.displayPlayerTurn();
            gameBoard.checkForWinner();
            
        }
        
    });

    middleLeft.addEventListener('click', () => {
        if (gameBoard.grabElement(3) == " ") {
            gameBoard.setElement(3, gameBoard.getPlayerTurn());
            const originalMarker = document.querySelector(`.index3`);
            console.log(originalMarker);
            originalMarker.remove();
            const marker = document.createElement('pre');
            marker.textContent = `${gameBoard.grabElement(3)}`;
            middleLeft.appendChild(marker);

            // switch player
            if (gameBoard.getPlayerTurn() == "X") {
                gameBoard.setPlayerTurn(2);
            } else if (gameBoard.getPlayerTurn() == "O") {
                gameBoard.setPlayerTurn(1);
            }

            displayController.displayPlayerTurn();
            gameBoard.checkForWinner();
            
        }
    });

    middleMiddle.addEventListener('click', () => {
        if (gameBoard.grabElement(4) == " ") {
            gameBoard.setElement(4, gameBoard.getPlayerTurn());
            const originalMarker = document.querySelector(`.index4`);
            console.log(originalMarker);
            originalMarker.remove();
            const marker = document.createElement('pre');
            marker.textContent = `${gameBoard.grabElement(4)}`;
            middleMiddle.appendChild(marker);

            // switch player
            if (gameBoard.getPlayerTurn() == "X") {
                gameBoard.setPlayerTurn(2);
            } else if (gameBoard.getPlayerTurn() == "O") {
                gameBoard.setPlayerTurn(1);
            }

            displayController.displayPlayerTurn();
            gameBoard.checkForWinner();
            
        }
    });

    middleRight.addEventListener('click', () => {
        if (gameBoard.grabElement(5) == " ") {
            gameBoard.setElement(5, gameBoard.getPlayerTurn());
            const originalMarker = document.querySelector(`.index5`);
            console.log(originalMarker);
            originalMarker.remove();
            const marker = document.createElement('pre');
            marker.textContent = `${gameBoard.grabElement(5)}`;
            middleRight.appendChild(marker);

            // switch player
            if (gameBoard.getPlayerTurn() == "X") {
                gameBoard.setPlayerTurn(2);
            } else if (gameBoard.getPlayerTurn() == "O") {
                gameBoard.setPlayerTurn(1);
            }

            displayController.displayPlayerTurn();
            gameBoard.checkForWinner();
            
        }
    });

    bottomLeft.addEventListener('click', () => {
        if (gameBoard.grabElement(6) == " ") {
            gameBoard.setElement(6, gameBoard.getPlayerTurn());
            const originalMarker = document.querySelector(`.index6`);
            console.log(originalMarker);
            originalMarker.remove();
            const marker = document.createElement('pre');
            marker.textContent = `${gameBoard.grabElement(6)}`;
            bottomLeft.appendChild(marker);

            // switch player
            if (gameBoard.getPlayerTurn() == "X") {
                gameBoard.setPlayerTurn(2);
            } else if (gameBoard.getPlayerTurn() == "O") {
                gameBoard.setPlayerTurn(1);
            }

            displayController.displayPlayerTurn();
            gameBoard.checkForWinner();
            
        }
    });

    bottomBottom.addEventListener('click', () => {
        if (gameBoard.grabElement(7) == " ") {
            gameBoard.setElement(7, gameBoard.getPlayerTurn());
            const originalMarker = document.querySelector(`.index7`);
            console.log(originalMarker);
            originalMarker.remove();
            const marker = document.createElement('pre');
            marker.textContent = `${gameBoard.grabElement(7)}`;
            bottomBottom.appendChild(marker);

            // switch player
            if (gameBoard.getPlayerTurn() == "X") {
                gameBoard.setPlayerTurn(2);
            } else if (gameBoard.getPlayerTurn() == "O") {
                gameBoard.setPlayerTurn(1);
            }

            displayController.displayPlayerTurn();
            gameBoard.checkForWinner();
            
        }
    });

    bottomRight.addEventListener('click', () => {
        if (gameBoard.grabElement(8) == " ") {
            gameBoard.setElement(8, gameBoard.getPlayerTurn());
            const originalMarker = document.querySelector(`.index8`);
            console.log(originalMarker);
            originalMarker.remove();
            const marker = document.createElement('pre');
            marker.textContent = `${gameBoard.grabElement(8)}`;
            bottomRight.appendChild(marker);

            // switch player
            if (gameBoard.getPlayerTurn() == "X") {
                gameBoard.setPlayerTurn(2);
            } else if (gameBoard.getPlayerTurn() == "O") {
                gameBoard.setPlayerTurn(1);
            }

            displayController.displayPlayerTurn();
            gameBoard.checkForWinner();
            
        }
    });

    return {
        displayBoard,
        resetDisplayBoard,
        displayPlayerTurn,
        displayWinner,
        displayPlayAgain,
    };

})();

const playerFactory = (name) => {
    const hasWon = false;
    return { name, hasWon };
};

console.log(displayController.displayBoard());








