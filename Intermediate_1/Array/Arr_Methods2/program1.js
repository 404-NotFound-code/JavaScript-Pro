// concat()
const first = [1, 2, 3];
const second = [4, 5, 6];
const third = [7, 8, 9];

// array.concat(arr1, arr2,..,..,..,arrN);
const merged = first.concat(second, third);
console.log(merged);

console.log(first); // [1, 2, 3]
console.log(second); // [4, 5, 6]


// join()
const emotions = ["🙂", "😍", "🙄", "😟"];

const joined = emotions.join("<=>"); // default separator is (,)
console.log(joined); // 🙂<=>😍<=>🙄<=>😟

console.log([].join()); // return ""

// fill() = changes the original arr

const colors = ["red", "blue", "green"];
colors.fill("pink", 1, 3);
console.log(colors); // ['red', 'pink', 'pink']


// includes()

const names = ["tom", "alex", "bob", "john"];

console.log(names.includes("tom")); // true
console.log(names.includes("Tom")); // false
console.log(names.includes("july")); // false

// indexOf()

const fnames = ["tom", "alex", "bob", "tom"];

console.log(fnames.indexOf("alex")); // 1
console.log(fnames.indexOf("Alex")); // -1
console.log(fnames.indexOf("rob")); // -1

console.log(fnames.indexOf("tom")); // 0
console.log(fnames.lastIndexOf("tom")); // 3

// reverse()

const firNames = ["tom", "alex", "bob"];
console.log(firNames.reverse()); // ['bob', 'alex', 'tom']
