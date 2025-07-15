// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?
// we will use a for of loop to go through the ingredients array

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};
  
console.log(`${recipe.title} serves ${recipe.serves}`);
console.log("ingredients:");
// you log these above first then then you loop through the ingredients and then print
for (const ingredient of recipe.ingredients) {
  console.log(ingredient);
} 