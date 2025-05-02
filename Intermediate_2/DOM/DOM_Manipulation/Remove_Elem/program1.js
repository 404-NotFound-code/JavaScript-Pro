// Removing or replacing Elements

let list = document.getElementById("myList");
console.log(list.children); // returns HTMLCollection

const itemToRemove = list.children[0];
// list.removeChild(itemToRemove);

// list.innerText = ""; // remove everything
// list.textContent = "";
// list.replaceChildren();

// list.replaceChildren('<div>Hello world</div>'); // <div>Hello world</div>

const pElem = document.querySelector("p");
// list.replaceChildren(pElem);

document.getElementById("removeMe").remove();
