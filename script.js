// FUNCTIONS

function add(a,b) {
    return parseFloat(a+b);
}

function substract(a,b) {
  return parseFloat(a-b);  
}

function multiply(a,b) {
  return parseFloat(a*b);  
}

function divide(a,b) {
  return parseFloat(a/b);  
}

function operate(numA, numB, operator) {
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
    return result;
}

// MAIN CODE
let firstNum = 0;
let secondNum = 0;
let operator;

const calculator = document.querySelector(".container");
const keys = calculator.querySelector(".calculator-keys");
const display = document.querySelector(".display");

keys.addEventListener("click", e => {
  if (e.target.matches("button")) {
    
    const key = e.target;
    const action = key.dataset.action;   
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    // action = NUMBER
    if (!action) {
      if (displayedNum === "0" || previousKeyType === "operator") {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
      calculator.dataset.previousKeyType = "number";
    } 

    // action = OPERATOR
    if (
      action === "add" ||
      action === "substract" ||
      action === "multiply" ||
      action === "divide") {
        if (firstNum == 0) {
          firstNum = parseFloat(displayedNum);        
          operator = action;
         
        }else if (firstNum != 0) {
          secondNum = parseFloat(displayedNum);          
          firstNum = operate(firstNum, secondNum, operator);  
              
          operator = action;
         
        }
      calculator.dataset.previousKeyType = "operator";
    }

    // action = CLEAR
    if (action === "clear") {
      firstNum = 0;
      secondNum = 0;
      display.textContent = "0";
      calculator.dataset.previousKeyType = "clear";
    }

    // action = DECIMAL
    if (action === "decimal") {
      if (!displayedNum.includes(".")) {
        display.textContent = displayedNum + "."
      }
      calculator.dataset.previousKeyType = "decimal";
    }

    // action = CALCULATE
    if (action === "calculate") {
      secondNum = parseInt(displayedNum);
      display.textContent = operate(firstNum, secondNum, operator);
      firstNum = 0;
      secondNum = 0;
      calculator.dataset.previousKeyType = "calculate";
    }

  }
});


