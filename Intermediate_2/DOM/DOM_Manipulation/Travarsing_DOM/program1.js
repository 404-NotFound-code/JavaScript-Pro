// Travarsing/Navigating DOM

// parentElement & parentNode
const span = document.getElementById("text");

console.log("Parent Element: ", span.parentElement);
console.log("Parent Node: ", span.parentNode);

console.log("Parent Element: ", span.parentElement.parentElement);
console.log("Parent Node: ", span.parentNode.parentNode);

// children & childNodes
const mainElem = document.getElementById('main-id');

console.log("Children: ", mainElem.children); // returns HTMLCollections
console.log("Child Node: ", mainElem.childNodes); // returns NodeList

console.log("First Child", mainElem.firstChild); // Node
console.log("First Child Element", mainElem.firstElementChild); // returns actual elements

// nextSibling & nextElementSibling
const h = document.querySelector('h1');
console.log(h.nextSibling); // node
console.log(h.nextElementSibling); // p tag

// previousSibling & previousElementSibling
const div = document.querySelector('div');
console.log(div.previousSibling); // node
console.log(div.previousElementSibling); // p tag

