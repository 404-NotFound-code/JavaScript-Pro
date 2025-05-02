// Inserting Elements

const span = document.createElement("span");
span.innerText = "I am a span";
const pElem = document.querySelector("p");
// document.body.insertBefore(span, pElem); // Before

console.log(pElem.nextElementSibling); 

document.body.insertBefore(span, pElem.nextElementSibling); // After
