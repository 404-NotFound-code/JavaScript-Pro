// 4. Create object using Factory function
// Factory function = A function that can produce different kind of functionality based on the user input of the user asked

function createUser(name, age){
    return {
        name, // name: name (when key and the parameter through which we are passing the value is exactly same)
        age, // age: age
    }
}

const user1 = createUser('John', 23);
console.log(user1); // { name: 'John', age: 23 }

const user2 = createUser('Jordan', 40);
console.log(user2); // { name: 'Micheal', age: 40 }