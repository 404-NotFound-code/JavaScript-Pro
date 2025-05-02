// Nested array Destructuring 

// [1, 2, [4, [6, 8, ['q']]]]


let fruits = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];
const veg = fruits[4]; // ['🍅', '🍄', '🥕']
const c = veg[2]; // '🥕'

fruits[4][2]; // '🥕'

let [,,,,[,,carrot]] = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];

console.log(carrot); // '🥕'
