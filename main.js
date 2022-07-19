const add = (a, b) => (parseFloat(a) + parseFloat(b)).toFixed(3);
const subtract = (a, b) => (parseFloat(a) - parseFloat(b)).toFixed(3);
const multiply = (a, b) => (parseFloat(a) * parseFloat(b)).toFixed(3);
const divide = (a, b) => (parseFloat(a) / parseFloat(b)).toFixed(3);

function operate(symbol, num1, num2) {
    if (symbol == '+') {
        return add(num1, num2)
    } else if (symbol == '-') {
        return subtract(num1, num2)
    } else if (symbol == 'x') {
        return multiply(num1, num2)
    } else if (symbol == '÷') {
        return divide(num1, num2)
    }
}

const display = document.querySelector('.display');
const nums = document.getElementsByClassName('number');
const ops = document.getElementsByClassName('symbol');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal');
const del = document.querySelector('.delete');
    

let inputs = [];
display.textContent = 0;

for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener('click', function(e) {
        if (inputs.length < 1) {
            display.textContent = e.target.textContent;
            inputs.push(e.target.textContent);
        } else if (inputs.length == 2) {
            inputs.push(e.target.textContent)
            display.textContent = e.target.textContent;
        } else if (typeof parseInt(inputs[inputs.length-1]) == 'number') {
            let newValue = inputs[inputs.length-1] + e.target.textContent;
            inputs.splice(inputs.length-1, 1, newValue);
            display.textContent = inputs[inputs.length-1].toString();
        }
    })
}

for (let i = 0; i < ops.length; i++) {
    ops[i].addEventListener('click', function(e) {
        if (inputs.length == 3) {
           let newResult =  operate(inputs[1], inputs[0], inputs[2]);
           inputs = [newResult];
           inputs.push(e.target.textContent);
           display.textContent = newResult.toString();
        } else if (inputs.length < 2 && 
            typeof parseInt(inputs[inputs.length-1]) == 'number') {
            inputs.push(e.target.textContent);
        }
    })  
}

clear.addEventListener('click', function() {
    inputs = [];
    display.textContent = '0';
})

equal.addEventListener('click', function() {
    if (inputs.length == 3) {
        let newResult =  operate(inputs[1], inputs[0], inputs[2]);
        inputs = [newResult];
        display.textContent = newResult.toString();
    }
})

del.addEventListener('click', function() {
    if (/[0-9]/.test(display.textContent) == true) {
        let newNum = display.textContent.slice(0, -1);
        display.textContent = newNum;
        inputs[inputs.length-1] = newNum;
    }
})