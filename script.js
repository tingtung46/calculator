let firstOperand = '';
let secondOperand = '';
let currentOperator = null;
let operation = '';

const currentDisplay = document.querySelector('.current-display');
const lastDisplay = document.querySelector('.last-display');
const operatorBtn = document.querySelectorAll('.operator-btn');
const numberBtn = document.querySelectorAll('.number-btn');
const deleteBtn = document.querySelector('#delete-btn');
const clearsBtn = document.querySelector('#clear-btn');
const equalsBtn = document.querySelector('#equals-btn');


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
            operation = operation.slice(0, -1);
        };
        currentDisplay.textContent = operation;
    };

    if (task === 'clear') {
        operation = '';
        if (value === 'full') {
            firstOperand = '';
            secondOperand = '';
            currentOperator = null;
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
        case '÷':
            lastDisplay.textContent += '÷';
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

function handleOperator(operator) {
    if (firstOperand === '' && secondOperand === '' && currentOperator !== '' && operation !== '') {
        firstOperand = operation;
        currentOperator = operator;
        inputLastDisplay(firstOperand);
        inputLastDisplay(currentOperator);
        inputCurrentDisplay('clear', 0);
    };

    if (firstOperand !== '' && currentOperator !== '' && operation !== '') {
        secondOperand = operation;
        inputLastDisplay(secondOperand);
        operate(currentOperator, firstOperand, secondOperand);
        currentOperator = operator;
        inputLastDisplay(currentOperator);
        firstOperand = operation;
        inputCurrentDisplay('clear', 0);
    };

    if (firstOperand !== '' && currentOperator === '' && operation === '') {
        inputLastDisplay(firstOperand);
        currentOperator = operator;
        inputLastDisplay(currentOperator);
        secondOperand = operation;
        inputCurrentDisplay('clear', 0);
    };

    if (firstOperand !== '' && currentOperator === '' && operation !== '') {
        firstOperand = operation;
        currentOperator = operator;
        inputLastDisplay(firstOperand);
        inputLastDisplay(currentOperator);
        inputCurrentDisplay('clear', 0);
    };
};

operatorBtn.forEach((button) => {
    button.addEventListener('click', () => {
        handleOperator(button.textContent);
    });
});

equalsBtn.addEventListener('click', () => {
    if (operation !== '' && firstOperand !== '') {
        secondOperand = operation;
        inputLastDisplay(secondOperand);
        inputLastDisplay('=');
        inputCurrentDisplay('clear', 0);
        operate(currentOperator, firstOperand, secondOperand);
    };
});

deleteBtn.addEventListener('click', () => {
    inputCurrentDisplay('delete', 0);
});

clearsBtn.addEventListener('click', () => {
    inputCurrentDisplay('clear', 'full');
});

//Operate the calculator at back-end
function add(a, b) {
    const result = a + b;
    return roundAnswer(result);
};

function subtract(a, b) {
    const result = a - b;
    return roundAnswer(result);
};

function multiply(a, b) {
    const result = a * b;
    return roundAnswer(result);
};

function divide(a, b) {
    if (b === 0) return 'Oops!'
    const result = a / b;
    return roundAnswer(result);
};

function operate(operator, a, b) {
    inputCurrentDisplay('clear', 0);
    a = parseFloat(a);
    b = parseFloat(b);
    switch(operator) {
        case '+':
            inputCurrentDisplay('add', add(a, b));
            break;
        case '-':
            inputCurrentDisplay('add', subtract(a, b));
            break;
        case 'x':
            inputCurrentDisplay('add', multiply(a, b));
            break;
        case '÷':
            inputCurrentDisplay('add', divide(a, b));
            break;
        default:
            return null
    };
    firstOperand = '';
    secondOperand = '';
    currentOperator = null;
};

//Round the result when do an operation with 2 number of decimal
//E.g. 0.1 + 0.2
function roundAnswer(result) {
    return Math.round(result * 1000) / 1000;
}