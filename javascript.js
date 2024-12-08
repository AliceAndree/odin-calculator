const screen = document.querySelector("#screen");
const calculatorButtons = document.querySelectorAll(".calculator");
const calculationDisplay = document.createElement("span");
const operationArray = [];

calculationDisplay.setAttribute("id", "operation");

function add(numberOne, numberTwo) {
  const sum = numberOne + numberTwo;
  return sum;
}

function substract(numberOne, numberTwo) {
  const substraction = numberOne - numberTwo;
  return substraction;
}

function multiply(numberOne, numberTwo) {
  const product = numberOne * numberTwo;
  return product;
}

function divide(numberOne, numberTwo) {
  const division = numberOne / numberTwo;
  return division;
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

calculatorButtons.forEach((element) => {
  element.addEventListener("click", function (e) {
    displayOperation(e.target.value);
  });
});
