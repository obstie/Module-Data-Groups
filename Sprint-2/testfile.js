const person = {
  names: "John",
  age: 30,
  city: "New York",
  greet: function() {
    console.log("Hello, my name is " + this.names);
  }
};

if (person.hasOwnProperty("name")) {
  console.log("The person object contains the property 'name'.");
} else {
  console.log("The person object does not contain the property 'name'.");
}

person["age"] = 31;
console.log(person.hasOwnProperty('name'));
console.log(person.greet());
console.log(`The person's age is now ${person.age}.`);


