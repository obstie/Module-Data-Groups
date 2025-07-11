// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  for (const items of list) {
    if (items === target) {
      return true;
    }
  }
  return false;
}

module.exports = includes;
