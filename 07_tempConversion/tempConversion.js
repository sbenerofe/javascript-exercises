const ftoc = function (fTemp) {
  let temp = fTemp - 32;
  temp = (temp * 5) / 9;
  temp = Number(temp.toFixed(1));

  return temp;
};

const ctof = function (cTemp) {
  return Number(((cTemp * 9) / 5 + 32).toFixed(1));
  /* let temp = (cTemp * 9) / 5;
  temp = temp + 32;
  temp = Number(temp.toFixed(1));

  return temp; */
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
