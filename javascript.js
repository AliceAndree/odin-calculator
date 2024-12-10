const screen = document.querySelector("#screen");
const calculatorButtons = document.querySelectorAll(".calculator");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector("#clear");
const calculationDisplay = document.createElement("span");
const resultDisplay = document.createElement("span");
const operationArray = [];

calculationDisplay.setAttribute("id", "operation");
resultDisplay.setAttribute("id", "result");

function add(numberOne, numberTwo) {
  const result = numberOne + numberTwo;
  displayResult(result);
}
function substract(numberOne, numberTwo) {
  const result = numberOne - numberTwo;
  displayResult(result);
}
function multiply(numberOne, numberTwo) {
  const result = numberOne * numberTwo;
  displayResult(result);
}
function divide(numberOne, numberTwo) {
  const result = numberOne / numberTwo;
  displayResult(result);
}

function operate(operator, numberOne, numberTwo) {
  const arrayOfNumbers = [numberOne, numberTwo];

  switch (operator) {
    case "+":
      return arrayOfNumbers.reduce(add);
    case "-":
      return arrayOfNumbers.reduce(substract);
    case "*":
      return arrayOfNumbers.reduce(multiply);
    case "/":
      return arrayOfNumbers.reduce(divide);
  }
}

function displayOperation(operation) {
  operationArray.push(operation);
  const concatArray = operationArray.join("");
  calculationDisplay.textContent = concatArray;
  screen.appendChild(calculationDisplay);
  return concatArray;
}

function readOperation() {
  const concatArray = displayOperation();
  const operationArray = concatArray
    .split("+")
    .join(",")
    .split("-")
    .join(",")
    .split("*")
    .join(",")
    .split("/")
    .join(",")
    .split(",");

  const operatorArray = concatArray
    .split("1")
    .join("")
    .split("2")
    .join("")
    .split("3")
    .join("")
    .split("4")
    .join("")
    .split("5")
    .join("")
    .split("6")
    .join("")
    .split("7")
    .join("")
    .split("8")
    .join("")
    .split("9")
    .join("")
    .split(",");

  numberOne = parseInt(operationArray[0]);
  numberTwo = parseInt(operationArray[1]);
  operator = operatorArray[0];

  operate(operator, numberOne, numberTwo);
}

function displayResult(result) {
  calculationDisplay.remove();
  resultDisplay.textContent = result;
  screen.appendChild(resultDisplay);
}

calculatorButtons.forEach((element) => {
  element.addEventListener("click", function (e) {
    displayOperation(e.target.value);
  });
});

equalButton.addEventListener("click", readOperation);
