const math = require("../src/math.js");
const isEven = math.isEven;

const selectEvenNumbers = function(numbers) {
  const evenNumbers = [];
  for(const number of numbers) {
    if (isEven(number)) {
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
}

const selectOddNumbers = function(numbers) {
  const evenNumbers = [];
  for(const number of numbers) {
    if (isOdd(number)) {
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
}

exports.selectEvenNumbers = selectEvenNumbers;
