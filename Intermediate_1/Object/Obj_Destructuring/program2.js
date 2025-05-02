// Optional Chaining (?.) >>> ES 2020
const employee = {
    salary: {
        bonus: 300
    }
};

console.log(employee.department); // undefined
// console.log(employee.department.name); // Error

// const name = employee.department && employee.department.name;

const name = employee.department?.name;
console.log(name); // undefined


/* 

Optional chaining in JavaScript is a feature that allows developers to access properties of an object that may be null or undefined without causing an error. 
It uses the ?. operator. If the property before the ?. exists, the expression continues to evaluate. However, if the property before the ?. is null or undefined, the expression short-circuits and returns undefined

*/

const user = {
    name: "John Doe",
    address: {
      street: "123 Main St",
      city: "Anytown"
    }
  };
  
  // Without optional chaining
  const city = user.address && user.address.city;
  console.log(city); // Output: Anytown
  
  // With optional chaining
  const country = user.address?.country;
  console.log(country); // Output: undefined