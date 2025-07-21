
function createLookup(inputArray) {
       const result = {};
  for (const item of inputArray) {
    if (Array.isArray(item) && item.length === 2) { // Check if item is an array with two elements to avoid errors
     
      const countyCode = item[0]; // key
      const currencyOfCounty = item[1]; // value
      result[countyCode] = currencyOfCounty; 
    }
    else console.error("Input must be an array of arrays");
  }
   return result
}

console.log(createLookup([['US', 'USD'], ['CA', 'CAD']]));

module.exports = createLookup;
