const add = (a, b) => parseFloat(a) + parseFloat(b);
const subtract = (a, b) => parseFloat(a) - parseFloat(b);
const multiply = (a, b) => parseFloat(a) * parseFloat(b);
const divide = (a, b) => parseFloat(a) / parseFloat(b);

function operate(symbol, num1, num2) {
    if (symbol == '+') {
        return add(num1, num2)
    } else if (symbol == '-') {
        return subtract(num1, num2)
    } else if (symbol == '*') {
        return multiply(num1, num2)
    } else if (symbol == '÷') {
        return divide(num1, num2)
    }
}

const display = document.querySelector('.display');
let nums = document.getElementsByClassName('number');
let ops = document.getElementsByClassName('symbol');

let inputs = [];

for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener('click', function(e) {
        if (inputs.length < 1) {
            display.textContent = e.target.textContent;
            inputs.push(e.target.textContent);
        } else if (inputs.length == 2) {
            inputs.push(e.target.textContent)
        } else if (inputs.length > 0 && 
            typeof parseInt(inputs[inputs.length-1]) == 'number') {
            let newValue = inputs[inputs.length-1] + e.target.textContent;
            inputs.splice(inputs.length-1, 1, newValue);
            display.textContent = inputs[inputs.length-1];
            console.log(inputs)
        }
    })
}

for (let i = 0; i < ops.length; i++) {
    ops[i].addEventListener('click', function(e) {
        if (inputs.length == 3) {
           let newResult =  operate(inputs[1], inputs[0], inputs[2]);
           inputs.splice(0, 3, newResult);
           inputs.push(e.target.textContent);
           display.textContent = newResult;
        } else if (inputs.length < 3 && 
            typeof parseInt(inputs[inputs.length-1]) == 'number') {
            inputs.push(e.target.textContent);
            console.log(inputs)
        }
    })
}