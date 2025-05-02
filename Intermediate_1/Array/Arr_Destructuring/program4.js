// Swap values with Destructuring 
let first = '😔';
let second = '🙂';

[first, second] = [second, first];

console.log(first);  // '🙂'
console.log(second); // '😔'


// Merge Arrays
const emotions = ['🙂', '😔'];
const veggies = ['🥦', '🥒', '🌽', '🥕'];

const emotionalVeggies = [...emotions, ...veggies];

console.log(emotionalVeggies); // ['🙂', '😔', '🥦', '🥒', '🌽', '🥕']

// length
const arr1 = [11, 21, 73];
const arr2 = new Array(7);

console.log(arr1.length); // 3
console.log(arr2); // [empty x 7]
console.log(arr2.length); // 7

// How many elements that an array can hold till 2^32 - 1 or 4294967295

arr1.length = 2; // arr1.length = 2 ** 32 or -1 (ReferenceError)
console.log(arr1); // [11, 21]

arr1.length = 0;
console.log(arr1); // []

arr1.length = 9;
console.log(arr1); // [empty x 9] (len: 9)
