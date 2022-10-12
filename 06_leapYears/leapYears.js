const leapYears = function (year) {
  let div4;
  let div100;
  let div400;
  let isLeapYear;

  div4 = Number.isInteger(year / 4);
  div100 = Number.isInteger(year / 100);
  div400 = Number.isInteger(year / 400);

  if (div4 === true) {
    if (div100 === true && div400 === true) {
      isLeapYear = true;
    } else if (div100 === true && div400 === false) {
      isLeapYear = false;
    } else if (div100 === false) {
      isLeapYear = true;
    }
  } else {
    isLeapYear = false;
  }
  return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
