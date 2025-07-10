function sum(elements) {
    const onlyNumbers = elements.filter(item => typeof item === "number"); // Filter out non-number elements

    if (onlyNumbers.length === 0) return 0;
    if (onlyNumbers.length === 1) return onlyNumbers[0];

    return onlyNumbers.reduce((total, input) => total + input); // Sum the numbers
}



console.log(sum([3, -46, -99, 200])); 
console.log(sum([3, 6, -99, 200, "stringone", "steringtwo"])); 
console.log(sum([3.4, 5.6])); 
console.log(sum([]));
console.log(sum(["stringone", "stringtwo"]));  



module.exports = sum;
