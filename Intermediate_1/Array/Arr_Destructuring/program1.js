// Array Destructuring
const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

// const tomato = salad[0];
// const mashroom = salad[1];
// const carrot = salad[5];

const [tomato, mashroom, carrot] = ["🍅", "🍄", "🥕"];
console.log(tomato, mashroom, carrot); // 🍅 🍄 🥕


// 1.1 How to assign default value to a variable?
const [tom, mash = '🍄'] = ["🍅"];

console.log(tom, mash); // 🍅 🍄

// 1.2 How to skip a value in an array?
const [t, , c] = ['🍅', '🍄', '🥕'];

console.log(t, c); // 🍅 🥕

