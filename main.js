const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

function operate(symbol, num1, num2) {
    symbol == '+' ? add(num1, num2) :
    symbol == '-' ? subtract(num1, num2) :
    symbol == '*' ? multiply(num1, num2) :
    symbol == '÷' ? divide(num1, num2) :
    alert('Check equation');
}

