const removeFromArray = function (original, ...theArgs) {
  for (let i = original.length - 1; i >= 0; i--) {
    for (let arg of theArgs) {
      if (original[i] === arg) {
        original.splice(i, 1);
      }
    }
  }
  return original;
};

// Do not edit below this line
module.exports = removeFromArray;
