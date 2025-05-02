// Object.entries()
const myObj = {
    a: "tapas",
    b: 32
};

const myArr = Object.entries(myObj);
console.log(myArr); // [ [ 'a', 'tapas' ], [ 'b', 32 ] ]

// Object.fromEntries()
const entries = new Map([
    ["foo", "bar"],
    ["baz", 42]
]);

const objEntries = Object.fromEntries(entries);
console.log(objEntries); // { foo: 'bar', baz: 42 }

// Object.freeze()
const emp = {
    sal: 100
}

Object.freeze(emp);

emp.sal = 200;
emp.name = 'John';
delete emp.sal;
console.log(emp); // { sal: 100 }

// Object.isFrozen()
console.log(Object.isFrozen(emp)); // true

// Object.seal()
const dept = {
    name: 'finance'
}

Object.seal(dept);

dept.address = 'Bangladesh';
delete dept.name;
console.log(dept); // { name: 'finance' }

dept.name = 'science';
console.log(dept); // { name: 'science' }

// hasOwn()
console.log(Object.hasOwn(dept, "name")); // true
console.log(Object.hasOwn(dept, "address")); // false