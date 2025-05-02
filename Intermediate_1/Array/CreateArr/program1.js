// Create an array

const mixedArr = [100, true, "JavaScript", {}];
// index           0    1          2        3
// index = The position of an element in the array. It starts with 0 & ends with length - 1

console.log(mixedArr); // [ 100, true, 'JavaScript', {} ]

const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

// Create an array using Constructor function 
function Car(model){
    this.model = model;
}

const bmwCar = new Car("BMW X1");
console.log(bmwCar); // Car { model: 'BMW X1' }

const anotherSalad   = new Array("🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑")

console.log("Salad: ", salad); // Salad: ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"]
console.log("Another Salad: ", anotherSalad); // Another Salad: ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"]

console.log(salad === anotherSalad); // false

// Though 'Salad' & 'anotherSalad' look same they are not the same array. They are two different arrays created into different memory location & there are 2 different references that JavaScript is managing & maintaining at this point in time.

const two = new Array(2);
console.log(two); // [ <2 empty items> ]
