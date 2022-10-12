const roundedToFixed = function (input) {
  let rounded = Math.pow(10, 1);
  return Math.round(input * rounded) / rounded.toFixed(1);
};

const ftoc = function (tempInF) {
  return roundedToFixed(((tempInF - 32) * 5) / 9);
};

const ctof = function (tempInC) {
  return roundedToFixed((tempInC * 9) / 5 + 32);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
