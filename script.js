const display = document.getElementById('display');
const mathButtons = document.querySelectorAll('.math-button');
const clearButton = document.getElementById('clear-button');
const deleteButton = document.getElementById('delete-button');
let ans = 0;

clearButton.addEventListener('click', () => display.textContent = '');
deleteButton.addEventListener('click', () => display.textContent = display.textContent.slice(0, -1));
mathButtons.forEach(button => {
    if(!button.classList.contains('equal-button')){
        button.addEventListener('click', displayMathButton);
    }
});

function displayMathButton() {
    display.textContent += this.value; 
}
function operate(a, b, operator) {
    switch (operator) {
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
            return divide(a, b);
            break;
        default:
            return "Invalid operator: " + operator;    
    }
}
function add(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if(b === 0) return "Divided by zero";
    return a / b;
}