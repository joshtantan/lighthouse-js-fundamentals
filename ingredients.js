const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let w = 0;

while(w < ingredients.length) {
  console.log(ingredients[w]);
  w++;
};

// Write a for loop that prints out the contents of ingredients:
for(let f1 = 0; f1 < ingredients.length; f1++) {
  console.log(ingredients[f1]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for(let f2 = ingredients.length - 1; f2 >= 0; f2--) {
  console.log(ingredients[f2])
}