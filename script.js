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
    let firstOperand = Number(1);
    let secondOperand = Number(1);
    let operator = '+';

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
