// Array-Like & Usages
// Array-Like is an object

// {key: "value"} // object
// [1, 2, 3] // array

const arr_like = {0: 'I', 1: 'am', 2: 'array-like', length: 3};

console.log(arr_like); // {0: 'I', 1: 'am', 2: 'array-like', length: 3}

arr_like[2]; // array-like
arr_like.length; // 3

console.log("is arr_like is an array?", Array.isArray(arr_like)); // false

console.log("is arr_like is an object?", arr_like instanceof Object); // true

function checkArgs() {
    console.log("Array Like Args", arguments); // Arguments(2) [1, 45, callee: ƒ, Symbol(Symbol.iterator): ƒ]

    const argArr = [...arguments]; // Using spread operator we can convert an array like to array
    console.log("Converetd Arary Args", argArr); // (2) [1, 45]
    argArr.forEach((elem) => {
        console.log(elem); // 1 45
    });
}

checkArgs(1, 45);

console.log(
    "HTML COllection as Array Like",
    document.getElementsByTagName("li")
); // HTMLCollection(10) [li, li, li, li, li, li, li, li, li, li]
const collectionArr = Array.from(document.getElementsByTagName("li"));
console.log("Converted Array", collectionArr); // (10) [li, li, li, li, li, li, li, li, li, li]