// How to add elements to an array
// push() = end

const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
const ret = salad.push('🥜');
console.log(ret); // 8

console.log(salad); // ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑", "🥜"];

// unshift() = start

const unRet = salad.unshift('🥜');
console.log(unRet); // 9
console.log(salad); // ["🥜", "🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑", "🥜"];

// How to remove elements to an array
// pop() = end

console.log(salad); ["🥜", "🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑", "🥜"];
salad.pop(); // 🥜
console.log(salad); // ["🥜", "🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

// shift() - start

salad.shift(); // 🥜
console.log(salad); // ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

