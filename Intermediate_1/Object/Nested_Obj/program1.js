// 1. Nested Objects
let profile = {
    name: "Robert Downey",
    age: 55,
    address: {
        city: 'New York',
        country: 'USA',
        greeting: function(){
            console.log(`Welcome to ${this.city}`);
        }
    },
    // role: 'Actor', 
    role: undefined,
}

console.log(profile.name); // Robert Downey
console.log(profile.address.city); // New York
console.log(profile["address"]['country']); // USA

profile.address.greeting(); // Welcome to New York

// 1.1 in operator

console.log('name' in profile); // true

console.log('role' in profile); // false; true(both exist and initialize undefined)
console.log(profile.role); // undefined

if(!profile.role){
    console.log("The salary property doesnot exist");    
}

// 1.2 for..in loop
for (let key in profile){
    console.log(key);
    console.log(profile[key]);
}

console.log(Object.keys(profile)); // [ 'name', 'age', 'address', 'role' ]
console.log(Object.values(profile)); // [ 'Robert Downey', 55, { city: 'New York', country: 'USA', greeting: [Function: greeting] }, undefined ]
