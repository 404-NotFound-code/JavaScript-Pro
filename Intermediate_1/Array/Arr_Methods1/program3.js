 // Clone or Copy of arrays: slice() = does not muted the source array


const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
const saladCopy = salad.slice(); 
console.log("Salad Before Copy: ", saladCopy); // ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

console.log("Salad After Copy: ",salad); //["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];


console.log(salad === saladCopy); // false (not the same references of the same array)

// How to determine if a value is an array
Array.isArray(["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"]
); // true
Array.isArray("🍅"); // false
Array.isArray({'tomato': "🍅"}); // false
Array.isArray([]); // true

const arr = [1, 2, 3, 4]; 
Array.isArray(arr); // true