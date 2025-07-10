function findMax(elements) {
   
   if (elements.length === 0) return Infinity; // this is for an empty array
   if (elements.length === 1) return elements[0];  

      const NonNumeric = elements.filter(item => typeof item === "number");
      const largestNum = Math.max(...NonNumeric);

      return largestNum;

}

// // Valid array with mixed types
 let mixedArray = [2.3, "Hi", "ff", 2.5, 6.5];

// // Call the function
let result = findMax(mixedArray);
console.log(result);

console.log(findMax([  ]));
console.log(findMax([34]));



module.exports = findMax;
