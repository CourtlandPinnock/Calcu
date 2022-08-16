
let currentOperator = '';
let displayValue = "0";
let displayValue0 = 0;
let tot = 0;

console.table(displayValue);

function populate() {
    let equalsLock = 0;
    const display = document.getElementById("display");
    const dot = document.getElementById('period');
    const zero = document.getElementById("num0");
    const equals = document.getElementById("numEquals");
    const numSum = document.getElementById("numSum");
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const num3 = document.getElementById("num3");
    const numMinus = document.getElementById("numMinus");
    const num4 = document.getElementById("num4");
    const num5 = document.getElementById("num5");
    const num6 = document.getElementById("num6");
    const numMultiply = document.getElementById("numMultiply");
    const num7 = document.getElementById("num7");
    const num8 = document.getElementById("num8");
    const num9 = document.getElementById("num9");
    const numDivide = document.getElementById("numDivide");
    const numDel = document.getElementById("delete");
    display.textContent = '0'
    dot.addEventListener("click", (e) => {
        if (display.textContent === '0') {
            display.textContent = "";
            display.textContent = display.textContent + '0.';
            displayValue = 0;
        }
        else {
            display.textContent = display.textContent + '.';
        }
        displayValue = parseFloat(display.textContent);
        console.log("DisplayValue:", displayValue);
    })
    zero.addEventListener("click", (e) => {
        if (display.textContent === '0') {
            display.textContent = "";
            display.textContent = display.textContent + '0';
            displayValue = 0;
        }
        else {
            display.textContent = display.textContent + '0';
        }
        displayValue = parseFloat(display.textContent);
        console.log("DisplayValue:", displayValue);
    })
    num1.addEventListener("click", (e) => {
        if (display.textContent === '0') {
            display.textContent = "";
            display.textContent = display.textContent + '1';
            displayValue = 0;
        }
        else {
            display.textContent = display.textContent + '1';
        }
        displayValue = parseFloat(display.textContent);
        console.log("DisplayValue:", displayValue);
    })
    num2.addEventListener("click", (e) => {
        if (display.textContent === '0') {
            display.textContent = "";
            display.textContent = display.textContent + '2';
            displayValue = 0;
        }
        else {
            display.textContent = display.textContent + '2';
        }
        displayValue = parseFloat(display.textContent);
        console.log("DisplayValue:", displayValue);
    })
    num3.addEventListener("click", (e) => {
        if (display.textContent === '0') {
            display.textContent = "";
            display.textContent = display.textContent + '3';
            displayValue = 0;
        }
        else {
            display.textContent = display.textContent + '3';
        }
        displayValue = parseFloat(display.textContent);
        console.log("DisplayValue:", displayValue);
    })
    num4.addEventListener("click", (e) => {
        if (display.textContent === '0') {
            display.textContent = "";
            display.textContent = display.textContent + '4';
            displayValue = 0;
        }
        else {
            display.textContent = display.textContent + '4';
        }
        displayValue = parseFloat(display.textContent);
        console.log("DisplayValue:", displayValue);
    })
    num5.addEventListener("click", (e) => {
        if (display.textContent === '0') {
            display.textContent = "";
            display.textContent = display.textContent + '5';
            displayValue = 0;
        }
        else {
            display.textContent = display.textContent + '5';
        }
        displayValue = parseFloat(display.textContent);
        console.log("DisplayValue:", displayValue);
    })
    num6.addEventListener("click", (e) => {
        if (display.textContent === '0') {
            display.textContent = "";
            display.textContent = display.textContent + '6';
            displayValue = 0;
        }
        else {
            display.textContent = display.textContent + '6';
        }
        displayValue = parseFloat(display.textContent);
        console.log("DisplayValue:", displayValue);
    })
    num7.addEventListener("click", (e) => {
        if (display.textContent === '0') {
            display.textContent = "";
            display.textContent = display.textContent + '7';
            displayValue = 0;
        }
        else {
            display.textContent = display.textContent + '7';
        }
        displayValue = parseFloat(display.textContent);
        console.log("DisplayValue:", displayValue);
    })
    num8.addEventListener("click", (e) => {
        if (display.textContent === '0') {
            display.textContent = "";
            display.textContent = display.textContent + '8';
            displayValue = 0;
        }
        else {
            display.textContent = display.textContent + '8';
        }
        displayValue = parseFloat(display.textContent);
        console.log("DisplayValue:", displayValue);
    })
    num9.addEventListener("click", (e) => {
        if (display.textContent === '0') {
            display.textContent = "";
            display.textContent = display.textContent + '9';
            displayValue = 0;
        }
        else {
            display.textContent = display.textContent + '9';
        }
        displayValue = parseFloat(display.textContent);
        console.log("DisplayValue:", displayValue);
    })
    numSum.addEventListener("click", (e) => {
        currentOperator = "sum";
        displayValue0 = displayValue;
        displayValue = "0";
        display.textContent = displayValue;
        equalsLock = 0;
    })
    equals.addEventListener("click", (e) => {
        if (equalsLock === 0) {
            operate(displayValue0,displayValue,currentOperator);
            display.textContent = displayValue;
            equalsLock = 1;
        }
    })
    
    
}   

function sum() {
    let total = arguments[0] + arguments[1];
    return total;
}

function multiply() {
    let product = arguments[0] * arguments[1];
    return product;
}

function divide() {
    let result = arguments[0] / arguments[1];
    return result;
}

function subtract() {
    let sub = arguments[0] - arguments[1];
    return sub;
}

function operate() {
    const first = arguments[0];
    const second = arguments[1];
    if (arguments[2] === "sum") {
        displayValue = sum(first,second);
    }
}
populate();