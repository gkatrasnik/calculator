// FUNCTIONS

function add(a,b) {
    return parseInt(a+b);
}

function substract(a,b) {
  return parseInt(a-b);  
}

function multiply(a,b) {
  return parseInt(a*b);  
}

function divide(a,b) {
  return parseInt(a/b);  
}

function operate (numA, numB, operator) {
    let result;
    if (operator === "add") {
      result = add(numA, numB);
    } else if (operator === "substract") {
      result = substract(numA, numB);
    } else if (operator === "multiply") {
      result = multiply(numA, numB);
    } else if (operator === "divide") {
      result = divide(numA, numB);
    }
    display.textContent = result;
}

// MAIN CODE
let firstNum
let secondNum
let operator


const calculator = document.querySelector(".container")
const keys = calculator.querySelector(".calculator-keys");
const display = document.querySelector(".display");

keys.addEventListener("click", e => {
  if (e.target.matches("button")) {
    
    const key = e.target
    const action = key.dataset.action   
    const keyContent = key.textContent
    const displayedNum = display.textContent

    // action = NUMBER
    if (!action) {      
      if (displayedNum === "0") {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
    } 

    // action = OPERATOR
    if (
      action === "add" ||
      action === "substract" ||
      action === "multiply" ||
      action === "divide") {
        firstNum = displayedNum;
        operator = action;
        display.textContent = "0";
    }

    // action = CLEAR
    if ( action === "clear") {
      display.textContent = "0"
    }

    // action = OPERATE
    if (action === "calculate") {
      secondNum = displayedNum;
      operate(firstNum, secondNum, operator)

    }

    




    
  }
});


