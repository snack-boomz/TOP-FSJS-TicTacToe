
const calculatorContainer = document.getElementById('calculator-container');

const calculatorDisplay = document.getElementById('calculator-display');

const calculatorDisplayContent = document.createElement('p');
calculatorDisplayContent.classList.add('calculator-display-content');

/* SOLUTION NUMBERS */
let firstNumber = null;
let secondNumber = null;
let operator = null;

/* KEEP EQUALS PHASED OUT UNTIL EXPRESSION IS AVAILABLE */

/* CALCULATOR BUTTONS */
const btnSeven = document.getElementById('button-seven');
const btnEight = document.getElementById('button-eight');
const btnNine = document.getElementById('button-nine');
const btnDivide = document.getElementById('button-divide');
const btnFour = document.getElementById('button-four');
const btnFive = document.getElementById('button-five');
const btnSix = document.getElementById('button-six');
const btnMultiply = document.getElementById('button-multiply');
const btnOne = document.getElementById('button-one');
const btnTwo = document.getElementById('button-two');
const btnThree = document.getElementById('button-three');
const btnSubtract = document.getElementById('button-subtract');
const btnZero = document.getElementById('button-zero');
const btnDecimal = document.getElementById('button-decimal');
const btnEqual = document.getElementById('button-equal');
const btnAdd = document.getElementById('button-add');
const btnBackspace = document.getElementById('button-backspace');
const btnClear = document.getElementById('button-clear');

/* SET EXPRESSIONS TO BE INITIALLY PHASED OUT */
phaseOutAllExpressions();
phaseOut(btnEqual);

/* CLICKABLE BUTTON EVENT LISTENERS */ 
btnSeven.addEventListener('click', () => {
    calculatorDisplayContent.textContent += '7';
    calculatorDisplay.appendChild(calculatorDisplayContent);
    checkIfEvaluationIsSolvable();
    phaseInAllExpressions();
    checkForOverflow();

});

btnEight.addEventListener('click', () => {
    calculatorDisplayContent.textContent += '8';
    calculatorDisplay.appendChild(calculatorDisplayContent);
    checkIfEvaluationIsSolvable();
    phaseInAllExpressions();
    checkForOverflow();
});

btnNine.addEventListener('click', () => {
    calculatorDisplayContent.textContent += '9';
    calculatorDisplay.appendChild(calculatorDisplayContent);
    checkIfEvaluationIsSolvable();
    phaseInAllExpressions();
    checkForOverflow();
    
});

btnDivide.addEventListener('click', () => {
    phaseInAllNumbers();
    console.log(`
    First Number: ${firstNumber}
    Second Number: ${secondNumber}
    Operator: ${operator}`)
    firstNumber = parseFloat(calculatorDisplayContent.textContent);
    // if operator button is pressed again when an operator has already been added, then evaluate first and second numbers
    if (operator) {
            // if an operator has already been entered, don't allow two operators to be entered consecutively checking length
            console.log("Operator has already been entered, evaluating")
            
            
            secondNumber = grabSecondNumberFromDisplay();
            solution = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
            calculatorDisplayContent.textContent = '';
            calculatorDisplayContent.textContent = `${solution}`;

            firstNumber = null;
            secondNumber = null;
            // the current solution inside the calculator display will now be the first Number
            firstNumber = solution;
            phaseOutAllExpressions();
            console.log("Please enter a second number: ");
    }
  
    operator = "÷"
    calculatorDisplayContent.textContent += '÷';
    calculatorDisplay.appendChild(calculatorDisplayContent);
    phaseOutAllExpressions();
    phaseIn(btnDecimal);
    checkForOverflow();
});

btnFour.addEventListener('click', () => {
    calculatorDisplayContent.textContent += '4';
    calculatorDisplay.appendChild(calculatorDisplayContent);
    checkIfEvaluationIsSolvable();
    phaseInAllExpressions();
    checkForOverflow();

});

btnFive.addEventListener('click', () => {
    calculatorDisplayContent.textContent += '5';
    calculatorDisplay.appendChild(calculatorDisplayContent);
    checkIfEvaluationIsSolvable();
    phaseInAllExpressions();
    checkForOverflow();

});

btnSix.addEventListener('click', () => {
    calculatorDisplayContent.textContent += '6';
    calculatorDisplay.appendChild(calculatorDisplayContent);
    checkIfEvaluationIsSolvable();
    phaseInAllExpressions();
    checkForOverflow();

});

btnMultiply.addEventListener('click', () => {
    phaseInAllNumbers();
    console.log(`
    First Number: ${firstNumber}
    Second Number: ${secondNumber}
    Operator: ${operator}`)
    firstNumber = parseFloat(calculatorDisplayContent.textContent);
    // if operator button is pressed again when an operator has already been added, then evaluate first and second numbers
    if (operator) {
            // if an operator has already been entered, don't allow two operators to be entered consecutively checking length
            console.log("Operator has already been entered, evaluating")
            
            
            secondNumber = grabSecondNumberFromDisplay();
            solution = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
            calculatorDisplayContent.textContent = '';
            calculatorDisplayContent.textContent = `${solution}`;

            firstNumber = null;
            secondNumber = null;
            // the current solution inside the calculator display will now be the first Number
            firstNumber = solution;
            phaseOutAllExpressions();
            console.log("Please enter a second number: ");
    }
  
    operator = "×"
    calculatorDisplayContent.textContent += '×';
    calculatorDisplay.appendChild(calculatorDisplayContent);
    phaseOutAllExpressions();
    phaseIn(btnDecimal);
    checkForOverflow();
});

btnOne.addEventListener('click', () => {
    calculatorDisplayContent.textContent += '1';
    calculatorDisplay.appendChild(calculatorDisplayContent);
    checkIfEvaluationIsSolvable();
    phaseInAllExpressions();
    checkForOverflow();

});

btnTwo.addEventListener('click', () => {
    calculatorDisplayContent.textContent += '2';
    calculatorDisplay.appendChild(calculatorDisplayContent);
    checkIfEvaluationIsSolvable();
    phaseInAllExpressions();
    checkForOverflow();

});

btnThree.addEventListener('click', () => {
    calculatorDisplayContent.textContent += '3';
    calculatorDisplay.appendChild(calculatorDisplayContent);
    checkIfEvaluationIsSolvable();
    phaseInAllExpressions();
    checkForOverflow();

});

btnSubtract.addEventListener('click', () => {
    phaseInAllNumbers();
    console.log(`
    First Number: ${firstNumber}
    Second Number: ${secondNumber}
    Operator: ${operator}`)
    firstNumber = parseFloat(calculatorDisplayContent.textContent);
    // if operator button is pressed again when an operator has already been added, then evaluate first and second numbers
    if (operator) {
            // if an operator has already been entered, don't allow two operators to be entered consecutively checking length
            console.log("Operator has already been entered, evaluating")
            
            
            secondNumber = grabSecondNumberFromDisplay();
            solution = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
            calculatorDisplayContent.textContent = '';
            calculatorDisplayContent.textContent = `${solution}`;

            firstNumber = null;
            secondNumber = null;
            // the current solution inside the calculator display will now be the first Number
            firstNumber = solution;
            phaseOutAllExpressions();
            console.log("Please enter a second number: ");
    }
  
    operator = "-"
    calculatorDisplayContent.textContent += '-';
    calculatorDisplay.appendChild(calculatorDisplayContent);
    phaseOutAllExpressions();
    phaseIn(btnDecimal);
    checkForOverflow();
});

btnZero.addEventListener('click', () => {
    calculatorDisplayContent.textContent += '0';
    calculatorDisplay.appendChild(calculatorDisplayContent);
    checkIfEvaluationIsSolvable();
    phaseInAllExpressions();
    checkForOverflow();

});

btnDecimal.addEventListener('click', () => {
    calculatorDisplayContent.textContent += '.';
    calculatorDisplay.appendChild(calculatorDisplayContent);
    phaseInAllNumbers();
    checkForOverflow();
    if (calculatorDisplayContent.textContent.includes(".")) {
        phaseOut(btnDecimal);
    }

});

btnEqual.addEventListener('click', () => {
    checkForSpace();
    phaseOutAllNumbers();
    // convert string to array, identify operator, and pull secondNumber from slicedArray, like so: tempArray.slice(indexOfOperator + 1)
    secondNumber = grabSecondNumberFromDisplay();
    solution = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
    calculatorDisplayContent.textContent = '';
    calculatorDisplayContent.textContent = `${solution}`;

    // reset the first and second numbers to blank
    firstNumber = null;
    secondNumber = null;

    // reset the operator to blank
    operator = null;

    // the current solution inside the calculator display will now be the first Number
    firstNumber = solution;

    // phase out Equals key
    phaseOut(btnEqual);
});

btnAdd.addEventListener('click', () => {
    phaseInAllNumbers();
    console.log(`
    First Number: ${firstNumber}
    Second Number: ${secondNumber}
    Operator: ${operator}`)
    firstNumber = parseFloat(calculatorDisplayContent.textContent);
    // if operator button is pressed again when an operator has already been added, then evaluate first and second numbers
    if (operator) {

            console.log("Operator has already been entered, evaluating")
            // if an operator has already been entered, don't allow two operators to be entered consecutively checking length
            secondNumber = grabSecondNumberFromDisplay();
            console.log(secondNumber);
            solution = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
            calculatorDisplayContent.textContent = '';
            calculatorDisplayContent.textContent = `${solution}`;

            firstNumber = null;
            secondNumber = null;
            // the current solution inside the calculator display will now be the first Number
            firstNumber = solution;
            phaseOutAllExpressions();
            console.log("Please enter a second number: ");
    }
  
    operator = "+"
    calculatorDisplayContent.textContent += '+'
    calculatorDisplay.appendChild(calculatorDisplayContent);
    phaseOutAllExpressions();
    phaseIn(btnDecimal);
    checkForOverflow();
});

btnBackspace.addEventListener('click', () => {
    //calculatorDisplayContent.textContent = calculatorDisplayContent.textContent.substring(0, -1);
    tempArray = Array.from(calculatorDisplayContent.textContent);
    erased = tempArray.pop();
    calculatorDisplayContent.textContent = tempArray.join('');
    checkForBlank();
    checkIfEvaluationIsSolvable();
    checkForOverflow();
    checkForSpace();

    checkForZeroThroughNine = /[0-9]/i;


    if (erased == '+' || erased == '-' || erased == '×' || erased == '÷') {
        phaseInAllExpressions();
        operator = null;
        phaseOut(btnEqual)
    } else if (erased == '.') {
        phaseIn(btnDecimal);
    } else if (erased == checkForZeroThroughNine && !operator) {
        phaseOut(btnEqual);
        phaseInAllNumbers();
    } else if (erased == checkForZeroThroughNine) {
        phaseInAllNumbers();
    }
});

btnClear.addEventListener('click', () => {
    firstNumber = null;
    secondNumber = null;
    solution = null;
    operator = null;
    console.log(`CLEAR VARIABLES:
                First Number: ${firstNumber}
                Second Number: ${secondNumber}
                Solution: ${solution}
                Operator: ${operator}`)
    calculatorDisplayContent.textContent = '';
    phaseOutAllExpressions();
    phaseInAllNumbers();
    phaseIn(btnDecimal);
    phaseOut(btnEqual);
});

/* KEYBOARD SUPPORT BUTTON EVENT LISTENERS */

/*
 * Based on https://javascript.plainenglish.io/how-to-detect-a-sequence-of-keystrokes-in-javascript-83ec6ffd8e93 's walkthrough
 *
 */

document.addEventListener('keydown', event => {
    const key = event.key.toLowerCase();

    console.log(key);
    if (calculatorDisplayContent.textContent.length <= 22) {

        switch(key) {

            case '7':
                if (btnSeven.classList.contains('phase-out')) {
                    console.log("cannot evaluate!");
                    break;
                } else {
                    calculatorDisplayContent.textContent += '7';
                    calculatorDisplay.appendChild(calculatorDisplayContent);
                    checkIfEvaluationIsSolvable();
                    phaseInAllExpressions();
                    checkForOverflow();
                break;
                }
                
            case '8':
                if (btnEight.classList.contains('phase-out')) {
                    console.log("cannot evaluate!");
                    break;
                } else {
                    calculatorDisplayContent.textContent += '8';
                    calculatorDisplay.appendChild(calculatorDisplayContent);
                    checkIfEvaluationIsSolvable();
                    phaseInAllExpressions();
                    checkForOverflow();
                break;
                }
            case '9':
                if (btnNine.classList.contains('phase-out')) {
                    console.log("cannot evaluate!");
                    break;
                } else {
                    calculatorDisplayContent.textContent += '9';
                    calculatorDisplay.appendChild(calculatorDisplayContent);
                    checkIfEvaluationIsSolvable();
                    phaseInAllExpressions();
                    checkForOverflow();
                break;
                }
            case '/':
                if (btnDivide.classList.contains('phase-out')) {
                    console.log("cannot evaluate!");
                    break;
                } else {
                    phaseInAllNumbers();
                    console.log(`
                    First Number: ${firstNumber}
                    Second Number: ${secondNumber}
                    Operator: ${operator}`)
                    firstNumber = parseFloat(calculatorDisplayContent.textContent);
                    // if operator button is pressed again when an operator has already been added, then evaluate first and second numbers
                    if (operator) {
                            // if an operator has already been entered, don't allow two operators to be entered consecutively checking length
                            console.log("Operator has already been entered, evaluating")
                            
                            
                            secondNumber = grabSecondNumberFromDisplay();
                            solution = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
                            calculatorDisplayContent.textContent = '';
                            calculatorDisplayContent.textContent = `${solution}`;
                
                            firstNumber = null;
                            secondNumber = null;
                            // the current solution inside the calculator display will now be the first Number
                            firstNumber = solution;
                            phaseOutAllExpressions();
                            console.log("Please enter a second number: ");
                    }
                
                    operator = "÷"
                    calculatorDisplayContent.textContent += '÷';
                    calculatorDisplay.appendChild(calculatorDisplayContent);
                    phaseOutAllExpressions();
                    phaseIn(btnDecimal);
                    checkForOverflow();
                    break;
                }
                
            case '4':
                if (btnFour.classList.contains('phase-out')) {
                    console.log("cannot evaluate!");
                    break;
                } else {
                    calculatorDisplayContent.textContent += '4';
                    calculatorDisplay.appendChild(calculatorDisplayContent);
                    checkIfEvaluationIsSolvable();
                    phaseInAllExpressions();
                    checkForOverflow();
                break;
                }
            case '5':
                if (btnFive.classList.contains('phase-out')) {
                    console.log("cannot evaluate!");
                    break;
                } else {
                    calculatorDisplayContent.textContent += '5';
                    calculatorDisplay.appendChild(calculatorDisplayContent);
                    checkIfEvaluationIsSolvable();
                    phaseInAllExpressions();
                    checkForOverflow();
                break;
                }
            case '6':
                if (btnSix.classList.contains('phase-out')) {
                    console.log("cannot evaluate!");
                    break;
                } else {
                    calculatorDisplayContent.textContent += '6';
                    calculatorDisplay.appendChild(calculatorDisplayContent);
                    checkIfEvaluationIsSolvable();
                    phaseInAllExpressions();
                    checkForOverflow();
                break;
                }
            case '*':
                if (btnMultiply.classList.contains('phase-out')) {
                    console.log("cannot evaluate!");
                    break;
                } else {
                    phaseInAllNumbers();
                console.log(`
                First Number: ${firstNumber}
                Second Number: ${secondNumber}
                Operator: ${operator}`)
                firstNumber = parseFloat(calculatorDisplayContent.textContent);
                // if operator button is pressed again when an operator has already been added, then evaluate first and second numbers
                if (operator) {
                        // if an operator has already been entered, don't allow two operators to be entered consecutively checking length
                        console.log("Operator has already been entered, evaluating")
                        
                        
                        secondNumber = grabSecondNumberFromDisplay();
                        solution = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
                        calculatorDisplayContent.textContent = '';
                        calculatorDisplayContent.textContent = `${solution}`;
            
                        firstNumber = null;
                        secondNumber = null;
                        // the current solution inside the calculator display will now be the first Number
                        firstNumber = solution;
                        phaseOutAllExpressions();
                        console.log("Please enter a second number: ");
                }
              
                operator = "×"
                calculatorDisplayContent.textContent += '×';
                calculatorDisplay.appendChild(calculatorDisplayContent);
                phaseOutAllExpressions();
                phaseIn(btnDecimal);
                checkForOverflow();
                break;
                }
            case '1':
                if (btnOne.classList.contains('phase-out')) {
                    console.log("cannot evaluate!");
                    break;
                } else {
                    calculatorDisplayContent.textContent += '1';
                    calculatorDisplay.appendChild(calculatorDisplayContent);
                    checkIfEvaluationIsSolvable();
                    phaseInAllExpressions();
                    checkForOverflow();
                break;
                }
            case '2':
                if (btnTwo.classList.contains('phase-out')) {
                    console.log("cannot evaluate!");
                    break;
                } else {
                    calculatorDisplayContent.textContent += '2';
                    calculatorDisplay.appendChild(calculatorDisplayContent);
                    checkIfEvaluationIsSolvable();
                    phaseInAllExpressions();
                    checkForOverflow();
                break;
                }
                break;
            case '3':
                if (btnThree.classList.contains('phase-out')) {
                    console.log("cannot evaluate!");
                    break;
                } else {
                    calculatorDisplayContent.textContent += '3';
                    calculatorDisplay.appendChild(calculatorDisplayContent);
                    checkIfEvaluationIsSolvable();
                    phaseInAllExpressions();
                    checkForOverflow();
                break;
                }
            case '-':
                if (btnSubtract.classList.contains('phase-out')) {
                    console.log("cannot evaluate!");
                    break;
                } else {
                    phaseInAllNumbers();
                    console.log(`
                    First Number: ${firstNumber}
                    Second Number: ${secondNumber}
                    Operator: ${operator}`)
                    firstNumber = parseFloat(calculatorDisplayContent.textContent);
                    // if operator button is pressed again when an operator has already been added, then evaluate first and second numbers
                    if (operator) {
                            // if an operator has already been entered, don't allow two operators to be entered consecutively checking length
                            console.log("Operator has already been entered, evaluating")
                            
                            
                            secondNumber = grabSecondNumberFromDisplay();
                            solution = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
                            calculatorDisplayContent.textContent = '';
                            calculatorDisplayContent.textContent = `${solution}`;
                
                            firstNumber = null;
                            secondNumber = null;
                            // the current solution inside the calculator display will now be the first Number
                            firstNumber = solution;
                            phaseOutAllExpressions();
                            console.log("Please enter a second number: ");
                    }
                  
                    operator = "-"
                    calculatorDisplayContent.textContent += '-';
                    calculatorDisplay.appendChild(calculatorDisplayContent);
                    phaseOutAllExpressions();
                    phaseIn(btnDecimal);
                    checkForOverflow();
                    break;
                }

            case '0':
                if (btnZero.classList.contains('phase-out')) {
                    console.log("cannot evaluate!");
                    break;
                } else {
                    calculatorDisplayContent.textContent += '0';
                    calculatorDisplay.appendChild(calculatorDisplayContent);
                    checkIfEvaluationIsSolvable();
                    phaseInAllExpressions();
                    checkForOverflow();
                break;
                }
            case '.':
                if (btnDecimal.classList.contains('phase-out')) {
                    console.log("cannot evaluate!");
                    break;
                } else {
                    calculatorDisplayContent.textContent += '.';
                    calculatorDisplay.appendChild(calculatorDisplayContent);
                    phaseInAllNumbers();
                    checkForOverflow();
                    if (calculatorDisplayContent.textContent.includes(".")) {
                        phaseOut(btnDecimal);
                    }
                    break;
                }

            case '=':
                if (btnEqual.classList.contains('phase-out')) {
                    console.log("cannot evaluate!");
                    break;
                } else {
                    checkForSpace();
                    phaseOutAllNumbers();
                    // convert string to array, identify operator, and pull secondNumber from slicedArray, like so: tempArray.slice(indexOfOperator + 1)
                    secondNumber = grabSecondNumberFromDisplay();
                    solution = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
                    calculatorDisplayContent.textContent = '';
                    calculatorDisplayContent.textContent = `${solution}`;
                
                    // reset the first and second numbers to blank
                    firstNumber = null;
                    secondNumber = null;
                
                    // reset the operator to blank
                    operator = null;
                
                    // the current solution inside the calculator display will now be the first Number
                    firstNumber = solution;
                
                    // phase out Equals key
                    phaseOut(btnEqual);
                    break;
                }
            case 'enter':
                if (btnEqual.classList.contains('phase-out')) {
                    console.log("cannot evaluate!");
                    break;
                } else {
                    checkForSpace();
                    phaseOutAllNumbers();
                    // convert string to array, identify operator, and pull secondNumber from slicedArray, like so: tempArray.slice(indexOfOperator + 1)
                    secondNumber = grabSecondNumberFromDisplay();
                    solution = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
                    calculatorDisplayContent.textContent = '';
                    calculatorDisplayContent.textContent = `${solution}`;
                
                    // reset the first and second numbers to blank
                    firstNumber = null;
                    secondNumber = null;
                
                    // reset the operator to blank
                    operator = null;
                
                    // the current solution inside the calculator display will now be the first Number
                    firstNumber = solution;
                
                    // phase out Equals key
                    phaseOut(btnEqual);
                    break;
                }
            case '+':
                if (btnAdd.classList.contains('phase-out')) {
                    console.log("cannot evaluate!");
                    break;
                } else {    
                    phaseInAllNumbers();
                    console.log(`
                    First Number: ${firstNumber}
                    Second Number: ${secondNumber}
                    Operator: ${operator}`)
                    firstNumber = parseFloat(calculatorDisplayContent.textContent);
                    // if operator button is pressed again when an operator has already been added, then evaluate first and second numbers
                    if (operator) {
        
                        console.log("Operator has already been entered, evaluating")
                        // if an operator has already been entered, don't allow two operators to be entered consecutively checking length
                        secondNumber = grabSecondNumberFromDisplay();
                        console.log(secondNumber);
                        solution = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
                        calculatorDisplayContent.textContent = '';
                        calculatorDisplayContent.textContent = `${solution}`;
        
                        firstNumber = null;
                        secondNumber = null;
                        // the current solution inside the calculator display will now be the first Number
                        firstNumber = solution;
                        phaseOutAllExpressions();
                        console.log("Please enter a second number: ");
                    
                    }
        
                    operator = "+"
                    calculatorDisplayContent.textContent += '+'
                    calculatorDisplay.appendChild(calculatorDisplayContent);
                    phaseOutAllExpressions();
                    phaseIn(btnDecimal);
                    checkForOverflow();
                    break;
                }
            case 'backspace':
                //calculatorDisplayContent.textContent = calculatorDisplayContent.textContent.substring(0, -1);
                tempArray = Array.from(calculatorDisplayContent.textContent);
                erased = tempArray.pop();
                calculatorDisplayContent.textContent = tempArray.join('');
                checkForBlank();
                checkIfEvaluationIsSolvable();
                checkForOverflow();
                checkForSpace();
    
                checkForZeroThroughNine = /[0-9]/i;
    
                if (erased == '+' || erased == '-' || erased == '×' || erased == '÷') {
                    phaseInAllExpressions();
                    operator = null;
                    phaseOut(btnEqual)
                } else if (erased == '.') {
                    phaseIn(btnDecimal);
                } else if (erased == checkForZeroThroughNine && !operator) {
                    phaseOut(btnEqual);
                    phaseInAllNumbers();
                } else if (erased == checkForZeroThroughNine) {
                    phaseInAllNumbers();
                }
            default:
                console.log("invalid key.");
                break;
        }
    } else {

        switch(key) {
            case 'backspace':
                //calculatorDisplayContent.textContent = calculatorDisplayContent.textContent.substring(0, -1);
                tempArray = Array.from(calculatorDisplayContent.textContent);
                erased = tempArray.pop();
                calculatorDisplayContent.textContent = tempArray.join('');
                checkForBlank();
                checkIfEvaluationIsSolvable();
                checkForOverflow();
                checkForSpace();
    
                checkForZeroThroughNine = /[0-9]/i;
    
                if (erased == '+' || erased == '-' || erased == '×' || erased == '÷') {
                    phaseInAllExpressions();
                    operator = null;
                    phaseOut(btnEqual)
                } else if (erased == '.') {
                    phaseIn(btnDecimal);
                } else if (erased == checkForZeroThroughNine && !operator) {
                    phaseOut(btnEqual);
                    phaseInAllNumbers();
                } else if (erased == checkForZeroThroughNine) {
                    phaseInAllNumbers();
                }
                break;
            case '=':
                if (btnEqual.classList.contains('phase-out')) {
                    console.log("cannot evaluate!");
                    break;
                } else {
                    checkForSpace();
                    phaseOutAllNumbers();
                    // convert string to array, identify operator, and pull secondNumber from slicedArray, like so: tempArray.slice(indexOfOperator + 1)
                    secondNumber = grabSecondNumberFromDisplay();
                    solution = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
                    calculatorDisplayContent.textContent = '';
                    calculatorDisplayContent.textContent = `${solution}`;
                
                    // reset the first and second numbers to blank
                    firstNumber = null;
                    secondNumber = null;
                
                    // reset the operator to blank
                    operator = null;
                
                    // the current solution inside the calculator display will now be the first Number
                    firstNumber = solution;
                
                    // phase out Equals key
                    phaseOut(btnEqual);
                    break;
                }
            case 'enter':
                if (btnEqual.classList.contains('phase-out')) {
                    console.log("cannot evaluate!");
                    break;
                } else {
                    checkForSpace();
                    phaseOutAllNumbers();
                    // convert string to array, identify operator, and pull secondNumber from slicedArray, like so: tempArray.slice(indexOfOperator + 1)
                    secondNumber = grabSecondNumberFromDisplay();
                    solution = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
                    calculatorDisplayContent.textContent = '';
                    calculatorDisplayContent.textContent = `${solution}`;
                
                    // reset the first and second numbers to blank
                    firstNumber = null;
                    secondNumber = null;
                
                    // reset the operator to blank
                    operator = null;
                
                    // the current solution inside the calculator display will now be the first Number
                    firstNumber = solution;
                
                    // phase out Equals key
                    phaseOut(btnEqual);
                    break;
                }
            default:
                console.log("invalid key.");
                break;
        }
    }
    
});

/* MATH FUNCTIONS */
function add(num1, num2) {
    return num1 + num2;

}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
        return num1 / num2;
}

function operate(operator, num1, num2) {
    if (operator == "+") {
        console.log(`Adding ${num1} + ${num2}`)
        return Number(add(num1, num2)).toFixed(3);
    } else if (operator == "-") {
        console.log(`Subtracting ${num1} - ${num2}`)
        return Number(subtract(num1, num2)).toFixed(3);
    } else if (operator == "×") {
        console.log(`Multiplying ${num1} × ${num2}`)
        return multiply(num1, num2);
    } else if (operator == "÷") {
        if (num1 == 0 || num2 == 0) {
            phaseOutAllNumbers();
            phaseOutAllExpressions();
            phaseOut(btnEqual);
            phaseOut(btnDecimal);
            return "Nice try. You divide by 0, you ruin the fun. Try again.";
        } else {
            console.log(`Dividing ${num1} ÷ ${num2}`)
            return divide(num1, num2);
        }
    }
}

function grabSecondNumberFromDisplay() {

    /*
     * convert string to array, identify operator, and pull secondNumber 
     * from slicedArray, like so: tempArray.slice(indexOfOperator + 1)
     *
     * make sure to reference the original operator value with ${operator}, 
     * not what this specific button's operator is (7 + 7 - 3 should equal 11, not 17)
    */
    tempArray = Array.from(calculatorDisplayContent.textContent);
    console.log(tempArray);
    
    indexOfOperator = tempArray.lastIndexOf(`${operator}`);
    console.log(indexOfOperator);
    return secondNumber = parseFloat(tempArray.slice(indexOfOperator + 1).join(''))
    
}

function checkIfEvaluationIsSolvable() {
    if (operator) {
        console.log("Operator exists");
        
        if (grabSecondNumberFromDisplay()) { 
            console.log(`Second Number is ${grabSecondNumberFromDisplay()}`)
            phaseIn(btnEqual);
        } else if (grabSecondNumberFromDisplay() == 0) {
            console.log(`Second Number is ${grabSecondNumberFromDisplay()}`)
            phaseIn(btnEqual);
        }
    }
}

function checkForOverflow() {
    if (calculatorDisplayContent.textContent.length > 22) {
        phaseOutAllNumbers();
        phaseOutAllExpressions();
        phaseOut(btnDecimal);
    }
}

function checkForBlank() {
    if (calculatorDisplayContent.textContent == '') {
        firstNumber = null;
        secondNumber = null;
        solution = null;
        operator = null;
        console.log(`CLEAR VARIABLES:
                    First Number: ${firstNumber}
                    Second Number: ${secondNumber}
                    Solution: ${solution}
                    Operator: ${operator}`)
        calculatorDisplayContent.textContent = '';
        phaseOutAllExpressions();
        phaseInAllNumbers();
        phaseIn(btnDecimal);
        phaseOut(btnEqual);
    }
}

function checkForSpace() {
    console.log("checking for space");
    if (calculatorDisplayContent.textContent.length <= 22) {
        phaseInAllExpressions();
        phaseInAllNumbers();
        
    }
}

function phaseOut(btn) {
    btn.classList.add('cover');
    btn.classList.add('phase-out');
}

function phaseIn(btn) {
    btn.classList.remove('cover');
    btn.classList.remove('phase-out');
}

function phaseOutAllNumbers() {
    btns = document.querySelectorAll('.calculator-button-number');
    for (btn of btns) {
        btn.classList.add('cover');
        btn.classList.add('phase-out');
    }
}

function phaseInAllNumbers() {
    btns = document.querySelectorAll('.calculator-button-number');
    for (btn of btns) {
        btn.classList.remove('cover');
        btn.classList.remove('phase-out');
    }
}

function phaseOutAllExpressions() {
    btns = document.querySelectorAll('.calculator-button-expression');
    for (btn of btns) {
        btn.classList.add('cover');
        btn.classList.add('phase-out');
    }
}

function phaseInAllExpressions() {
    btns = document.querySelectorAll('.calculator-button-expression');
    for (btn of btns) {
        btn.classList.remove('cover');
        btn.classList.remove('phase-out');
    }
}

