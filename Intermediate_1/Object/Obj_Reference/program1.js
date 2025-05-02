// Object Reference 
let fruit = {name: 'mango'}; // Xa01
const oneMoreFruit = {name: 'mango'}; // Xa02

console.log(fruit == oneMoreFruit); // false
console.log(fruit === oneMoreFruit); // false

// Here, we have two objects fruit and oneMoreFruit. Both objects have the same properties and values. But they are two different objects in memory. So, the comparison fruit == oneMoreFruit and fruit === oneMoreFruit will return false.

fruit = oneMoreFruit; // pointing to the same location in the memory, that means they are pointing the same object

console.log(fruit == oneMoreFruit); // true
console.log(fruit === oneMoreFruit); // true

// Here, we have assigned the object oneMoreFruit to the object fruit. Now, both objects are pointing to the same memory location. So, the comparison fruit == oneMoreFruit and fruit === oneMoreFruit will return true.


