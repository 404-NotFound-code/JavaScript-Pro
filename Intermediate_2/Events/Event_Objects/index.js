// Event Object

// The event object is an implicit object that gets passed that is given to you by JavaScript to all this handler function and you can catch it using this particular parameter called 'event'. You can give any name.

const searchElem = document.getElementById("search-id");

function handleChange(event){
    console.log(event);

    console.log("Target: ", event.target); // Is the element that triggered the event
    console.log("Target Name: ", event.target.name); 
    console.log("Target Value: ", event.target.value);
    console.log("Event Type: ", event.type);
    console.log("Current Target: ", event.currentTarget); // It is the element that the event listener is attached

    console.log(this); // Inside an event handler, the value of this is always the element on which we've added the handler.
    
    
}

searchElem.addEventListener("change", handleChange);