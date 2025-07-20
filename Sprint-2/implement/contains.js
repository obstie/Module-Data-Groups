
 const object = {
    a: 1,
    b: 2,   
};


 function contains(objectIwant, stringIwant) {
   // Check if the input is an object 
    if (
    typeof objectIwant === 'object' &&
    objectIwant !== null &&  
    !Array.isArray(objectIwant)
  )
  // Check if the property exists in the object
    if (objectIwant.hasOwnProperty(stringIwant)) {
        return true;
}   else {
         return false;
 }}


console.log(contains(object, 'a'));
console.log(contains(object, 'b'));
console.log(contains(object, 'c'));
console.log(contains(object, ''));


module.exports = contains;


