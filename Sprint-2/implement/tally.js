function tally(items) {
    if (!Array.isArray(items)) {
    throw new Error("Input must be an array");
  }
  
    const result = {};

 for (const item of items) {
    if (result[item]) {
      result[item] ++; // if item exists, increment count
    } else {
      result[item] = 1; // if not, start count at 1
    }
  }

    return result

} 
 console.log(tally(['a', 'b', 'c', 'a'])); 

module.exports = tally;
