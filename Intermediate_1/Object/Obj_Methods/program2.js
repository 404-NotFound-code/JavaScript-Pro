// 2. Static Methods 
const target = {p:1, q:2};
const source = {a:3, b:5};

const returnObj = Object.assign(target, source); // Object.assign copies all of the object's own properties from a source object to a target object
console.log(returnObj); // { p: 1, q: 2, a: 3, b: 5 }

// ------------------------------------------------------>

const target2 = {p:1, a:2};
const source2 = {a:3, b:5};

const returnObj2 = Object.assign(target2, source2);
console.log(returnObj2); // { p: 1, a: 3, b: 5 }

// ------------------------------------------------------>

const obj = {name: 'JavaScript Obj'};
const obj2 = Object.assign({}, obj);
console.log(obj2); // { name: 'JavaScript Obj' }

// obj2 is the clone of obj (shallow cloning)
console.log(obj == obj2); // false 
console.log(obj === obj2); // false

// 2.1 Shallow Copy vs Deep Copy

const obj3 = {
    a: 1,
    b: {c: 2}
}

const obj4 = Object.assign({}, obj3); // Shallow copy
console.log(obj4); // { a: 1, b: { c: 2 } }

// A shallow copy means that only the top-level properties are copied. If a property is an object (like b), the reference to that object is copied, not the object itself

obj4.b.c = 3;
obj4.a = 100;

console.log(obj4.a); // 100
console.log(obj3.a); // 1

console.log(obj4.b.c); // 3
console.log(obj3.b.c); // 3

console.log(obj4); // { a: 100, b: { c: 3 } }
console.log(obj3); // { a: 1, b: { c: 3 } }

const obj5 = structuredClone(obj3); // Deep copy
console.log(obj5); // { a: 1, b: { c: 2 } }

obj5.a = 300;
obj5.b.c = 30;

console.log(obj5.a); // 300
console.log(obj3.a); // 1

console.log(obj5.b.c) // 30
console.log(obj3.b.c) // 3
