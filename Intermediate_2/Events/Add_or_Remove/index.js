// addEventListener & removeEventListener

const countBtnElem = document.getElementById('countBtn');
let counter = 0;


// countBtnElem.addEventListener('click', function(){
//     console.log(counter);
//     counter++;
// })

// countBtnElem.removeEventListener('click', function(){ // same function but different reference
//     console.log(counter);
//     counter++;
// })

const handleCount = function(){
    console.log(counter);
    counter++;
}

const greetMe = function(){
    console.log("Thank you!");
}

countBtnElem.addEventListener('click', handleCount);
countBtnElem.addEventListener('click', greetMe);
countBtnElem.removeEventListener('click', handleCount);

// DOM Content Loaded

// will never run
document.onDOMContentLoaded = function(){
    console.log("DOM Content Loaded...");
}

// this will run
document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM Content Loaded...");
})