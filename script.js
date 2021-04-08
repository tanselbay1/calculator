function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(operator, num1, num2){
    return operator(parseInt(num1), parseInt(num2));
}

// Variables 

let displayValue = "";
let secondValue = "";
let operation;
let firstNumEntered = false;

let numbers = document.querySelectorAll(".number");
let screen = document.getElementById("screen");

let plusButton = document.getElementById("plus");
let minusButton = document.getElementById("minus");
let multipyButton = document.getElementById("multiply");
let divideButton = document.getElementById("divide");

let sumButton = document.getElementById('sum');

Array.from(numbers).map(number => {
    number.addEventListener('click', () => {
        if(!firstNumEntered){
            displayValue += number.innerText;
            screen.innerText = displayValue;
        }else if(firstNumEntered){
            if(!secondValue){
                screen.innerText += ` ${number.innerText}`;
            }else {
                screen.innerText += number.innerText;
            }
            secondValue += number.innerText;
        }else {
            console.log('something wrong!');
        }
    })
})

plusButton.addEventListener('click', () => {
    firstNumEntered = true;
    operation = 'adding';
    screen.innerText += ` + `;
})

sumButton.addEventListener('click', () => {
    let operated;
    switch(operation){
        case('adding'):
            console.log('adding');
            operated = operate(add, displayValue, secondValue);
            screen.innerText += ` = ${operated}`;
            break;
        default:
            console.log('not working!');
    }
})