const palindromes = function (inputString) {
  const f = inputString
    .replaceAll(" ", "")
    .replaceAll(",", "")
    .replaceAll(".", "")
    .replaceAll("!", "")
    .toLowerCase();

  const wreverse = f.split("").reverse().join("");
  return f === wreverse;
};

// Do not edit below this line
module.exports = palindromes;
