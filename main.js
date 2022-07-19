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
let nums = document.getElementsByClassName('number');

let inputs = [];

for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener('click', function(e) {
        if (inputs.length < 1) {
            display.textContent = e.target.textContent;
            inputs.push(e.target.textContent);
        } else {
            let newValue = inputs[0] + e.target.textContent;
            inputs.splice(0, 1, newValue);
            display.textContent = inputs[0];
        }
    })
}