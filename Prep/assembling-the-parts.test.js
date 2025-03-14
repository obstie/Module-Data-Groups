const calculateMedian = require("../Prep/assembling-the-parts"); 
//const calculateMean = require("../Prep/mean"); 

test("Need to see what will this log", ( )=> {
    
    const salaries = [10, 20, 30, 40, 60, 80, 80];
    const median = calculateMedian(salaries);
    
    console.log(salaries, "<--- salaries input before we call calculateMean");
    const mean = calculateMedian(salaries);
    
    console.log(`The median salary is ${median}`);
    console.log(`The mean salary is ${mean}`);
    console.log(salaries);

});

// when the code runs the median we will be 40, that is the number in the middle of the array
// the mean will be 46 rounded off, added all the numbers and devided by the number of their value so we have 7 numbers
// the output of salaries before calculateMean, it will display the list in the array 