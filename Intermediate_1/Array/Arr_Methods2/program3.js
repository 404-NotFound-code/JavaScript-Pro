// splice(start, deleteCount, item, item1, item2)

const names = ["tom", "alex", "bob"];

console.log(names.splice(0, 1, "john")); // ['tom']
console.log(names); // ['john', 'alex', 'bob']

names.splice(1, 0, 'zack'); // ['jack', 'zack', 'alex', 'bob'];

names.splice(2, 1, "zack"); // ['john', 'zack', 'zack', 'bob']
console.log(names); // ['john', 'zack', 'zack', 'bob']

// at()

const junkFoodILove = ["🥖", "🍔", "🍟", "🍕", "🌭", "🥪", "🌮", "🍿"];

junkFoodILove.at(0); // '🥖'

junkFoodILove.at(3); // '🍕'

junkFoodILove.at(-1); // '🍿'

junkFoodILove.at(-5); // '🍕'

junkFoodILove.at(-8); // '🥖'

junkFoodILove.at(10); // undefined


// copyWithin(target, start, end)

const array = [1, 2, 3, 4, 5, 6, 7];
array.copyWithin(0, 3, 6);
console.log(array); // [4, 5, 6, 4, 5, 6, 7];

const array1 = [1, 2, 3, 4, 5, 6, 7];
array1.copyWithin(0, 4);
console.log(array1); // [5, 6, 7, 4, 5, 6, 7]

// flat()

const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat()); // [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log(arr2.flat()); // [0, 1, 2, Array(2)]
console.log(arr2.flat(Infinity)); // [0, 1, 2, 3, 4, 5]