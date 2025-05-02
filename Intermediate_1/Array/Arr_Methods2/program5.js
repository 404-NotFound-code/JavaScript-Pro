// Immutability methods
// toReversed()

const items = [1, 2, 3];

const reversedItems = items.toReversed();

console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]

// toSorted()

const Months = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths = Months.toSorted(); 

console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
console.log(Months); // ['Mar', 'Jan', 'Feb', 'Dec']


// toSpliced()

const months = ["Jan", "Mar", "Apr", "May"];

const months2 = months.toSpliced(1, 0, "Feb");

console.log("Original Array", months); // ['Jan', 'Mar', 'Apr', 'May']
console.log("Spliced Array", months2); // ['Jan', 'Feb', 'Mar', 'Apr', 'May']


// with(index, value); when to replace elemsf

const numbers = [1, 2, 3, 4, 5];

// numbers[2] = 6;

const newArray = numbers.with(2, 6);

console.log(numbers); // Unchanged => [1, 2, 3, 4, 5];
console.log(newArray); // Changed(A new copy) => [1, 2, 6, 4, 5];

// numbers[-2] = 8 // undefined
const anotherArray = numbers.with(-2, 8);
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(anotherArray); // [1, 2, 3, 8, 5]
