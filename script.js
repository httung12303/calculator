const operationDisplay = document.querySelector('#operation-display  span');
const inputDisplay = document.querySelector('#input-display span');
const digitButtons = document.querySelectorAll('.digit');
const clearButton = document.getElementById('clear-button');
const deleteButton = document.getElementById('delete-button');
const dotButton = document.querySelector('.dot');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');

let ans = 0;
let currentOperator = '';
let digitInputFlag = true;

clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', deleteInput);
digitButtons.forEach(button => button.addEventListener('click', displayInput));
operatorButtons.forEach(button => button.addEventListener('click',updateOperation));
equalButton.addEventListener('click', equalOperation);
dotButton.addEventListener('click', () => {
    if(!digitInputFlag || inputDisplay.textContent.includes('.')) {
        return;
    } 
    inputDisplay.textContent += dotButton.value;
});

function deleteInput() {
    const temp = inputDisplay.textContent.slice(0, -1);
    inputDisplay.textContent = temp === '' ? '0' : temp;
}
function displayOperation() {
    operationDisplay.textContent += this.value; 
}
function displayInput() {
    if(!digitInputFlag || inputDisplay.textContent === '0') {
        inputDisplay.textContent = '';
    }
    digitInputFlag = true;
    inputDisplay.textContent += this.value; 
}
function clear() {
    operationDisplay.textContent = '';
    inputDisplay.textContent = '0'; 
    ans = 0;
    currentOperator = '';
}
function updateOperation() {
    if(digitInputFlag) {
        let temp = operate();
        if(typeof temp === 'string') {
            alert(temp);
            return;
        }  
        ans = temp;
    }
    currentOperator = this.value;
    operationDisplay.textContent = `${ans} ${currentOperator}`;
    digitInputFlag = false;
}
function equalOperation() {
    if(!digitInputFlag || currentOperator === '') {
        return;
    }
    let temp = operate();
    if(typeof temp === 'string') {
        alert(temp);
        return;
    }
    operationDisplay.textContent = `${ans} ${currentOperator} ${inputDisplay.textContent} =`;
    ans = temp;
    inputDisplay.textContent = ans.toString();
}
function operate() {
    let a = parseFloat(ans);
    let b = parseFloat(inputDisplay.textContent);
    switch (currentOperator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case 'x':
            return multiply(a, b);
            break;
        case '/':
            if(b === 0) {
                return "Divided by zero";
            }
            return divide(a, b);
            break;
        default:
            return b;  
    }
}
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if(b === 0) return "Divided by zero";
    return a / b;
}