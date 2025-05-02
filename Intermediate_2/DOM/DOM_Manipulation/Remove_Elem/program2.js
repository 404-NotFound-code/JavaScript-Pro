// Read, write & Remove attributes

const imageElem = document.querySelector("img");
console.log(imageElem.getAttribute('src')); // someImage.png
console.log(imageElem.getAttribute('alt')); // some image

imageElem.setAttribute("src", 'laptop.jpg');
imageElem.setAttribute('alt', 'laptop');

imageElem.removeAttribute('height');

console.log(imageElem.hasAttribute('src')); // true
console.log(imageElem.hasAttribute('height')); // false