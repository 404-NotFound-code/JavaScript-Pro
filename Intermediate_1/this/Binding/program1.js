// Implicit Binding

// Whenever we're talking about 'this' apart from the global aspect there are few other aspects that you've to keep in mind:
// 1. Object
// 2. Function 

// Inside of an Object = Implicit Binding
const employee = {
    id: "A5778",
    firstName: "Alex",
    lastName: "B",

    returnThis: function(){
        return this;
    },

    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log("Employee ID: ", employee.id); // A5778
console.log("this inside the employee object: ", employee.returnThis()); // {id: 'A5778', firstName: 'Alex', lastName: 'B', returnThis: ƒ}

// When we invoke a method of an object that 'this' keyword is bound to the object on which we have invoked the method.

// Again, when we invoke a method on an object the context of this or the value of this is bound to the object on which we've invoked the method

// Implicit binding is a way in which you understand that if a method is called on an object using the dot notation the context of this is bound or associated to the object on which we have invoked the method.

console.log("Constructed Full Name using this: ", employee.getFullName()); // Constructed Full Name using this:  Alex B


