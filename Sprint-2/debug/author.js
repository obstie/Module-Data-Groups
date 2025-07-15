// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

// it wont be able to loop through the object using a for of loop because it is not iterable 

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value in author) {
  //
  console.log(value);
  console.log(author[value]); // this will print the value 
}

// i see you cannot iterarte over an object using a for of loop, you use for in loop
