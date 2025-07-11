


// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).




function calculateMedian(list) {

     if (!Array.isArray(list)) return null;
          const numFilter = list.filter(item => typeof item === "number"); // Filter out non-numeric values 

     if (numFilter.length === 0) return null; // Return null if there are no numbers

          const sorted = [...numFilter].sort((a, b) => a - b) ; // Sort the numbers in ascending order make a copy and sort them
          const midNum = Math.floor(sorted.length / 2);

     if (sorted.length % 2 === 0) {
          return (sorted[midNum - 1] + sorted[midNum]) / 2; // Returns average of two middle numbers for even arrays
     } 
     else {
          return sorted[midNum];// Returns middle number for odd arrays
     }

}








































module.exports = calculateMedian;
