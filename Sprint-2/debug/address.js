// Predict and explain first...

// wont work i see 42 and 123 are the only numbers in the object

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",  
};

console.log(`My house number is ${address[2]}`); 

console.log(`My house number is ${address["houseNumber"]}`);
console.log(`My house number is ${address.houseNumber}`);


// i see that the first one was not working because it was trying to access the houseNumber using index.          