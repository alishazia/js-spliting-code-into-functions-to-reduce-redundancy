const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentCalculationOutput = document.getElementById('current-calculation');
const currentResultOutput = document.getElementById('current-result');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}
const defaultResult = 0;
let currentResult = defaultResult;
// currentResult = currentResult + (10 * 2) + 12 / 2;
// let currentDescription = '(10 * 2) + 12/2';

function add() {
  const enteredNumber = getUserInputValue();
  const initialValue = currentResult ;
  const calcDescription = `${enteredNumber} + ${initialValue}`
  currentResult = enteredNumber + initialValue;
 getOperator('+', initialValue ,enteredNumber)
}

// errors because addEventListener is called before html page is loaded
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
// divideBtn.addEventListener('click', divide);

function multiply(){
  const enteredNumber = getUserInputValue();
  const initialValue = currentResult ;
    const calcDescription = `${enteredNumber} * ${initialValue}`
  currentResult = enteredNumber * initialValue;
   getOperator('*', initialValue ,enteredNumber)

}
function subtract(){
   const enteredNumber = getUserInputValue();
     const initialValue = currentResult ;
       const calcDescription = `${enteredNumber} - ${initialValue}`
     currentResult = initialValue - enteredNumber;
     getOperator('-', initialValue ,enteredNumber)
}
// splitting code into functions
function getUserInputValue(){
  return parseInt(userInput.value);
}

function getOperator(operator,resultBeforeEvent,resultAfterEvent){
  const calcDescription = `${resultBeforeEvent} ${operator} ${resultAfterEvent}`;
  outputResult(currentResult,calcDescription)
}