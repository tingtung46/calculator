let firstOperand = '';
let secondOperand = '';
let currentOperator = null;
let operation = '';

const currentDisplay = document.querySelector('.current-display');
const lastDisplay = document.querySelector('.last-display');
const operatorBtn = document.querySelectorAll('.operator-btn');
const numberBtn = document.querySelectorAll('.number-btn');
const deleteBtn = document.querySelector('.delete-btn');
const clearsBtn = document.querySelector('.clear-btn');
const equalsBtn = document.querySelector('.equals-btn');


//Append number and operator to display
function inputCurrentDisplay(task, value) {
    if (task === 'add') {
        if (value === 'Infinity') {
            operation = '';
        };
        if (value !== 0 || operation !== 0) {
            operation += value;
            currentDisplay.textContent = operation;
        };
    };

    if (task === 'delete') {
        if (operation === 'Infinity') {
            operation = '';
        } else {
            return operation.slice(0, -1);
        };
        currentDisplay.textContent = operation;
    };

    if (task === 'clear') {
        operation = '';
        if (value === 'full') {
            firstOperand = '';
            secondOperand = '';
            currentOperator = '';
            lastDisplay.textContent = '';
            currentDisplay.textContent = operation;
        }
    };
};

function inputLastDisplay(toLastDisplay) {
    switch (toLastDisplay) {
        case '+':
            lastDisplay.textContent += '+';
            break;
        case '-':
            lastDisplay.textContent += '-';
            break;
        case 'x':
            lastDisplay.textContent += 'x';
            break;
        case ':':
            lastDisplay.textContent += ':';
            break;
        default:
            lastDisplay.textContent += `${toLastDisplay}`
    }
};

numberBtn.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.textContent === '.' && operation.includes('.')) return;
        inputCurrentDisplay('add', button.textContent);
    });
});

//Operate the calculator at back-end
function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch(operator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case 'x':
            return multiply(a, b);
            break;
        case ':':
            return divide(a, b);
            break;
        default:
            return null
    };
};
