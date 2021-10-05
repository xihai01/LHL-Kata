//helper function that checks whether an ingredient exists in a recipe list
const ingredientCheck = function (bakery) {
  //create an array to store names in recipe list that this bakery can make
  let recipe = [];
  for (const bakeryIngredient of bakery) {
    for (const recipeIngredient of recipes) {
      for (const ingredient of recipeIngredient.ingredients) {
        //add name of recipe to array if ingredients exist
        if (bakeryIngredient === ingredient) {
          recipe.push(recipeIngredient.name);
          break;
        }
      }
    }
  }
  return recipe;
}

const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  //create arrays to store names of recipes bakeryA and bakeryB can make
  let recipeA = [];
  let recipeB = [];

  //get a list of recipe names bakeryA and backeryB can make
  recipeA = ingredientCheck(bakeryA);
  recipeB = ingredientCheck(bakeryB);

  //check for common recipe names in both arrays and return that recipe
  for (const nameA of recipeA) {
    for (const nameB of recipeB) {
      if (nameA === nameB) return nameA;
    }
  }
  return 'Recipe not found.';
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));