// Rest Parameter

const [tomato, mashroom, ...rest] = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

console.log(rest); // ["🥦", "🥒", "🌽", "🥕", "🥑"]

// Spread Operator = the element of the array gets spreaded

const mySalad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
const mySaladCopy = [...mySalad];

console.log(mySaladCopy); // ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"]

console.log(mySalad === mySaladCopy); // false

