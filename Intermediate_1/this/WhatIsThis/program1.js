// this is a keyword in JavaScript and the main purpose or the existence of the this keyword in JavaScript so that it can help us understand what exactly happening in a particular execution context.

// The literal meaning of this means we're pointing to something. When we say this, we try to understand currently in which context of a particular object we are in and we are executing or my programming is running.

// When you load a piece of JavaScript code or a blank JavaScript file into the JavaScript environment using HTML or any other way, JavaScript creates something called 'Global Execution Context'.

// In the GEC, we get two things: If you are running the JavaScript on the browser environment you will get 'this' keyword and 'window' object. 

// If you are running on a server side (for example: node) you will get a 'this' keyword and 'Global' object.

// In GEC, this keyword & window object
console.log(this === window); // this
console.log("this at the global", this); // window

console.log(this === global); // false
console.log(this); // {}

