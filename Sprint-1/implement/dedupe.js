function dedupe(array) {
  return [...new Set(array)];   
}

const filteredNum = dedupe(['a', 'a', 'a', 'b', 'b', 'c', 'd', 'd', 'e', 'e', 'f', 'f ']);
const emptyArray = dedupe([]);


console.log(emptyArray)
console.log(filteredNum);



