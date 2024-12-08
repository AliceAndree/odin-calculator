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

console.log(operate("+", 3, 5));
