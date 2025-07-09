// function printMe() {
//     console.log('Printing ...');
// };
// printMe();


// function printThis(param ) { // this it the parameter "INPUT"
//     console.log(param)
// };
//  printThis('this is the argument, OUTPUT');  // Pass a value, The argument value is mapped to the parameter value

const count = 100; // expression

const printMeOne = function () {
    console.log('Printing the function number one');
}
printMeOne();
// then we call the function as a variable

const printMeWithParameter = function(a, b) {
    console.log(a, b);
};
printMeWithParameter(10, 20);

const addition = function(sum1, sum2) {
    return sum1 + sum2;
  };
  
  console.log(addition(20, 40));

  function calc(a, b) {
    return (2 *(a + b));
  };
 console.log(calc(4, 5));

 // rest parameter, what is leftover goes into y 

 function collectThings(x, ...y) {
 console.log(x);
 console.log(y);
 };
 collectThings(`this is value x ${100}`, 200, 3, 4, 5, 6, 7, 8, 9, 1000);

 // Arrow function, more morden so bottom one will be changedn no need for the Function keyword

const add = function(x, y) {
    return x + y;
 }
// to this
const adds = (x, y) => {
    return x + y;
 };
 console.log(adds(5, 10));

 // so if your function has only one line like above you can leave out the return statement

 const adds1 = (x, y) => x = y;

 // nested functions is a very powefull feature

function outer() {
    console.log('outer');
    function inner() {
        console.log('inner')
    }
    inner(); // you call it inside the outer function
};
outer();

// Function scope

const doSomething = () => {
    console.log("Hello from doSomething!");
};
const myArrow = () => {
    doSomething(); // Now this works!
    let x = 10;
    const y = 20;
    var z = 30;
    console.log(x, y, z);
};
myArrow();

// Closure 

function outerF(x) {
    function innerF(y) {  // <= this is the closure, the inner function
        return x + y;
    }
    return innerF;         // you must return it here
};
const outerReturn = outerF(20); // this will still keep the parameter passed in 'x'
console.log(outerReturn(2));

// Callback function

function foo(bar) {
    if (itsNight) {
        bar(); // this is the callback function, it is powerfull you can call it based on conditions
    }
    if (isDrinksOverCheckOnline) {
        bar();
    }
};

// High order function  HOF
// It takes one or more functions as argument
// it may return a function

function getCapture(camera) {
    camera();
};
getCapture(function() {
    console.log('Canon')
});

function returnFn() {
    return function() {
        console.log('returning')
    }
};
const fn = returnFn();
fn();

// Pure function, produce the same output for the same input 


// function sayGreeting(name) {
//     return `Hello ${name}`; // template litterals use backticks(``) not single quotes('')
// };
// console.log(sayGreeting('Sir'));

// let greeting = "Hi there"
// function sayGreeting (name) {
//     return `${greeting} ${name}`;
// };
// console.log(sayGreeting(greeting, 'you')); // will fix

// IIFE: immediately invoked functions expressions, code executes after being defined 

function x() {

};
x();

(function () {
    
})();

(function () {
    console.log("This is an IIFE.");
  })();  // the last paratheses invoke the function

  // Call stack 

  // Recursion

  function fetchWater(count) {
    if (count === 0) {
        console.log ("No more water left!");
        return;
    }
    console.log("Fetching water ....");
    fetchWater(count - 1);
  };
  fetchWater(3);