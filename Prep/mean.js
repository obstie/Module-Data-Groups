function calculateMean(list) {
   const sumOfArray = list.reduce((accumulatorOfArray, numberInArray) => accumulatorOfArray + numberInArray, 0);
   const mean = sumOfArray / list.length;
   return mean;
   
};


module.exports = calculateMean;