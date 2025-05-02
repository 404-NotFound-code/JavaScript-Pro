const prompt = require('prompt-sync')();

// 1. Create objects with literal syntax
let user = {
    name: 'John',
    age: 40,
    "is admin": true,
}

console.log(user.name); // John
console.log(user["is admin"]); // true

user.isSeniorCitizen = false;
user['movie lover'] = true;

console.log(user); // { name: 'John', age: 40, 'is admin': true, isSeniorCitizen: false, 'movie lover': true }

user.age = 41;

console.log(user); // { name: 'John', age: 41, 'is admin': true, isSeniorCitizen: false, 'movie lover': true }

delete user["movie lover"];

console.log(user); // { name: 'John', age: '40', 'is admin': true, isSeniorCitizen: false }


// 1.1 Accessing dynamic key value 
const dyKey = 'age';
console.log(user[dyKey]); // 41


// 1.2 Create object with dynamic values
let car = prompt('Which is your favorite car: '); // BMW

let favCars = {
    [car]: 2,
}

console.log(favCars); // { BMW: 2 }