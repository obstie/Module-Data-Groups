const calculateMean = require("../Prep/mean");    // Import our function

test("calculates the mean of a list of numbers", () => {
    const list = [3, 50, 7];  // our test input, can even add more numbers
    const currentOutput = calculateMean(list); // this is the function we will run
    const targetOutput = 20;
  
    expect(currentOutput).toEqual(targetOutput); // this will check the result
  });
