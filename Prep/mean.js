function calculateMean(list) {
   const sumOfArray = list.reduce((accumulatorOfArray, numberInArray) => accumulatorOfArray + numberInArray, 0);  // This will add the array input
   const mean = sumOfArray / list.length;  // devide the sum by the length of the array
   return mean;
   
};


module.exports = calculateMean;  // exports our function 