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

const display = document.querySelector('.display');
let btns = document.getElementsByClassName('number');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function(e) {
        display.textContent = e.target.textContent;
    })
}