function parseQueryString(queryString) {
  const queryParams = {};
  
  // if (queryString.length === 0) {
  //   return queryParams;
  // }

//   if (typeof queryString !== "string") {
//   return {};
// }

if (!queryString || queryString === "") return {} 
  const keyValuePairs = queryString.split("&"); 

  for (const pair of keyValuePairs) {
    const [key, ...value] = pair.split("="); // Split only once // Split on the first '=' to separate key and value
    const endValue = value.join("=");   // Join the rest of the value in case there are more '=' in the value
    queryParams[key] = endValue;
  }

  return queryParams;
}

console.log(parseQueryString("equation=x=y+1")); 

module.exports = parseQueryString;
  