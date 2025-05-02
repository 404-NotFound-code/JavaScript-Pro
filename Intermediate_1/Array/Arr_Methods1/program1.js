// How to get elements from an array
// const element = array[index]

const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

console.log(salad[0]); // 🍅
console.log(salad[2]); // 🥦
console.log(salad[5]); // 🥕

for(let i = 0; i <= salad.length -1; i++){
    console.log(`Element at index ${i} is ${salad[i]}`);
}

