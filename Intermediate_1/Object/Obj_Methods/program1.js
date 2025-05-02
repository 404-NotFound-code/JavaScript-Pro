// 1. Object Methods
function createUser(name, age){
    return {
        name, 
        age,
        greet(){
            console.log(this.name);
        }
    }
}

const user1 = createUser("Tim", 31);
console.log(user1); // { name: 'Tim', age: 31, greet: [Function: greet] }

console.log(user1.name); // Tim
user1.greet(); // Tim

const user2 = createUser("Bob", 32);
console.log(user2); // { name: 'Bob', age: 32, greet: [Function: greet] }

// Whenever you've a function inside an object you'll call that function as method

let profile = {
    name: 'John',
    company: 'Google',
    message: function(){
        console.log(`${this.name} works at ${this.company}`);
    }
}

console.log([profile.name, profile.company]); // [ 'John', 'Google' ]
profile.message(); // John works at Google
