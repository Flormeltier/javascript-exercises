const sumAll = function (start, end) {
  let sum = 0;
  let firstSummand;
  let secondSummand;

  if (Number.isInteger(start) && Number.isInteger(end) === true) {
    if (start >= 0 && end >= 0) {
      if (start < end) {
        firstSummand = start;
        secondSummand = end;
      } else {
        firstSummand = end;
        secondSummand = start;
      }

      for (let i = firstSummand; i <= secondSummand; i++) {
        sum += i;
      }
      return sum;
    } else {
      return "ERROR";
    }
  }
  return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
