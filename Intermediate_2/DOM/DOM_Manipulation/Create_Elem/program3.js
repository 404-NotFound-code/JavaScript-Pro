// Modifying Elements

const pElem = document.querySelector('p');
pElem.innerHTML = "<u>Hello,</u> how are your doing?"

// using innerHTML, means you're welcoming potential security risk, especially the cross site scripting attack

const divElem = document.querySelector("div");

console.log("Inner Text", divElem.innerText); 
console.log("Text Content", divElem.textContent);
