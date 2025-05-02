// An event is just a signal that something happened in the browser.

// Event Handling in Markup
function handleClick(greeting) {
    console.log(`Button Clicked with a ${greeting}`);
}

// Event Handling in Script
const myBtn2Elem = document.getElementById("myBtn2");
myBtn2Elem.onclick = function() {
    console.log("My Button 2 Clicked");
}

// Can not add multiple
// myBtn2Elem.onclick = function() {
//     console.log("My Button 2 Clicked Again");
// }

// Separating function
// myBtn2Elem.onclick = handleClick;
// myBtn2Elem.onclick = () => handleClick("Hola"); 

