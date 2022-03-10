const fibonacci = function (term) {
  const number = Number(term);
  if (number < 0) {
    return "OOPS";
  }
  if (number < 3) {
    return 1;
  }
  let currentTerm = 1;
  let previousTerm1Back = 1;
  let previousTerm2Back = 1;
  for (let i = 3; i <= number; i++) {
    previousTerm2Back = previousTerm1Back;
    previousTerm1Back = currentTerm;
    currentTerm = previousTerm2Back + previousTerm1Back;
  }
  return currentTerm;
};

// Do not edit below this line
module.exports = fibonacci;
