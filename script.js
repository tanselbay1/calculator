// FUNCTIONS

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

//Used toFixed to prevent number become too long
function divide(num1, num2){
    if(num2 == 0){
        alert("Please don't crash your calculator. If something divide to 0 result will be infinity!")
        return (num1 / (num2+1));
    }else {
        return (num1 / num2).toFixed(2);
    } 
}

function operate(operator, num1, num2){
    return operator(parseInt(num1), parseInt(num2));
}

function clear(){
    displayValue = "";
    secondValue = "";
    operation = "";
    firstNumEntered = false;
    screen.innerText = "Ready..";
}

// VARIABLES 

let displayValue = "";
let secondValue = "";
let operation;
let firstNumEntered = false;

let numbers = document.querySelectorAll(".number");
let screen = document.getElementById("screen");

const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");

const sumButton = document.getElementById('sum');
const clearButton = document.getElementById('clear');

// EVENTS

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
    operation = 'addition';
    screen.innerText += ` + `;
})

minusButton.addEventListener('click', () => {
    firstNumEntered = true;
    operation = 'subtraction';
    screen.innerText += ` - `;
})

multiplyButton.addEventListener('click', () => {
    firstNumEntered = true;
    operation = 'multiplication';
    screen.innerText += ` x `;
})

divideButton.addEventListener('click', () => {
    firstNumEntered = true;
    operation = 'division';
    screen.innerText += ` ÷ `;
})

sumButton.addEventListener('click', () => {
    let operated;
    switch(operation){
        case 'addition':
            console.log('addition');
            operated = operate(add, displayValue, secondValue);
            screen.innerText += ` = ${operated}`;
            break;
        case 'subtraction':
            console.log('subtraction');
            operated = operate(subtract, displayValue, secondValue);
            screen.innerText += ` = ${operated}`;
            break;
        case 'multiplication':
            console.log('multiplication');
            operated = operate(multiply, displayValue, secondValue);
            screen.innerText += ` = ${operated}`;
            break;
        case 'division':
            console.log('division');
            operated = operate(divide, displayValue, secondValue);
            screen.innerText += ` = ${operated}`;
            break;
        default:
            console.log('not working!');
    }
    setTimeout(clear, 3000);
})

clearButton.addEventListener('click', clear);
