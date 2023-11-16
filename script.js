let firstOperand = '';
let secondOperand = '';

const currentDisplay = document.querySelector('.current-display');
const lastDisplay = document.querySelector('.last-display');
const operatorBtn = document.querySelectorAll('.operator-btn');
const numberBtn = document.querySelectorAll('.number-btn');
const deleteBtn = document.querySelector('.delete-btn');
const clearsBtn = document.querySelector('.clear-btn');
const equalsBtn = document.querySelector('.equals-btn');

numberBtn.forEach((button) => 
    button.addEventListener('click', () => appendNumber(button.textContent))
);

function appendNumber(number) {
    if (currentDisplay.textContent === '0' && number === '0') return;
    if (currentDisplay.textContent.includes('.') && number === '.') return;
    currentDisplay.textContent += number;
};

function add(firstOperand, secondOperand) {
    return a + b;
};

function subtract(firstOperand, secondOperand) {
    return a - b;
};

function multiply(firstOperand, secondOperand) {
    return a * b;
};

function divide(firstOperand, secondOperand) {
    return a / b;
};

function operate() {
    let firstOperand = Number();
    let secondOperand = Number();

    switch(operator) {
        case '+':
            console.log(add(firstOperand, secondOperand));
            break;
        case '-':
            console.log(subtract(firstOperand, secondOperand));
            break;
        case 'x':
            console.log(multiply(firstOperand, secondOperand));
            break;
        case ':':
            console.log(divide(firstOperand, secondOperand));
            break;
    };
};
