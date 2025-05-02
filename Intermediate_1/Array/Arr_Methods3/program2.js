// fromAsync()

const collectionPromise = Array.fromAsync(
    document.getElementsByTagName("li")
);
console.log("Converted Array", collectionPromise);

collectionPromise.then((value) => console.log(value));

const ret = Array.fromAsync({
    0: Promise.resolve("tapaScript"),
    1: Promise.resolve("Google"),
    2: Promise.resolve("Apple"),
    length: 3,
}).then((value) => console.log(value));

console.log(ret);

