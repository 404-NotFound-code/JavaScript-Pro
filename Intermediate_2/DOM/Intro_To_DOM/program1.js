/*
DOM Types:

1. Document - represents the entire page and it is the root node of the DOM tree
2. Node - A generic term for any elements in the DOM tree. Element Node, Text Node, Attribute Node
3. Element - A specific type of node that represents HTML tags/elements
4. NodeList - An array of nodes
5. Attr - represents the attribute of a node
6. NameNodeMap - A collection of Attr.

*/

// console.log(document);

// // getElementById(id)
// let titleElem = document.getElementById("heading");
// console.log(titleElem);

// // getElementByClassName(className)
// let infoElems = document.getElementsByClassName("info");
// console.log(infoElems); // returns a HTMLCollection
// console.log(infoElems[0], infoElems[1]);
// [...infoElems].forEach((elem)=>{
//     console.log(elem);
// })

// // getElementByTagName(tagName)
// let pTagElems = document.getElementsByTagName("p");
// console.log(pTagElems); // returns a HTMLCollection

// // querySelector(cssSelector)
// let para = document.querySelector("p.info");
// console.log("using query selector", para);

// // querySelectorAll(cssSelector)
// let paras = document.querySelectorAll("p.info");
// console.log("using query selector all", paras); // returns NodeList

// // ***Highlighter App***

// function highlightText(){
//     let elements = document.querySelectorAll(".info");
//     elements.forEach((element)=>{
//         element.style.backgroundColor = "yellow";
//     })
// }

// // ***Search Matching***

// function filterList(){
//     const inputElem = document.getElementById("searchInput");
//     const input = inputElem.value;
    
//     const items = document.querySelectorAll("ul#itemList li");
    
//     items.forEach((item)=>{
//         item.style.backgroundColor = item.innerText.toLowerCase().includes(input.toLowerCase()) ? "skyblue" : "";
//     })
    
// }

// // function filterList() {
// //     const inputElem = document.getElementById("searchInput");
// //     const input = inputElem.value;

// //     const items = document.querySelectorAll("ul#itemList li");

// //     items.forEach((item) => {
// //         item.style.display = item.innerText.toLowerCase().includes(input.toLowerCase()) ? "block" : "none";
// //     })

// // }

// Task 01: Find the most frequent word in paragraph
const word = document.getElementById("text");
// console.log(word.innerText);

