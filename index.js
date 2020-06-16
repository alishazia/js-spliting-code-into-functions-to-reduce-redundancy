const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById
  ('current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}
let currentResult = 0;
currentResult = currentResult + (10 * 2) + 12 / 2;
let currentDescription = '(10 * 2) + 12/2';

function add() {
  const calcDescription = getUserInputValue();
  currentResult = `currentResult + calcDescription`;
  outputResult(currentResult, calcDescription);
}

// errors because addEventListener is called before html page is loaded
// addBtn.addEventListener('click', add);

// splitting code into functions
function getUserInputValue(){
  return parseInt(userInput.value);
}
