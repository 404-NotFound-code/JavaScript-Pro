// Manipulating styles 

const pElem = document.getElementById('p-id');
console.log(pElem.style);

pElem.style.backgroundColor = 'skyblue'

// Manipulating classes

const mainDivElem = document.getElementById("main-id");

// console.log(mainDivElem.className); // main-class

// mainDivElem.className = "secondary-class";
// console.log(mainDivElem.className); // secondary -class 

console.log(mainDivElem.classList); // returns DOMTokenList

mainDivElem.classList.add('test');

mainDivElem.classList.remove('layout');

mainDivElem.classList.replace('main-class', 'secondary-class');

console.log("Does it have test?", mainDivElem.classList.contains("test"));
console.log("Does it have main-class?", mainDivElem.classList.contains("main-class"));

mainDivElem.classList.toggle("test");
mainDivElem.classList.toggle("test");

// Controlling visibilities

// mainDivElem.style.display = "none"; // invisible with space
// mainDivElem.style.display = "block"; 

// mainDivElem.style.visibility = "hidden"; // space are still there

mainDivElem.style.opacity = '0'; // 0 to 1