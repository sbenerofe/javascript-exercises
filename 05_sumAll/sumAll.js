const sumAll = function (firstNumber, secondNumber) {
  if (
    typeof firstNumber === "number" &&
    typeof secondNumber === "number" &&
    firstNumber >= 0 &&
    secondNumber >= 0
  ) {
    if (firstNumber > secondNumber) {
      console.log(firstNumber, secondNumber);
      [firstNumber, secondNumber] = [secondNumber, firstNumber];
      console.log(firstNumber, secondNumber);
    }
    let sum = 0;
    for (let i = firstNumber; i <= secondNumber; i++) {
      sum += i;
    }
    return sum;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
