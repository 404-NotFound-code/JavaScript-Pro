const { send } = require("vite");

// Object Destructuring
const student = {
    'name': 'John Williamson',
    'age': 9,
    'std': 3,
    'subjects': ['Maths', 'English', 'EVS'],
    'parents': {
      'father': 'Brown Williamson',
      'mother': 'Sophia',
      'email': 'john-parents@abcde.com'
    },
    'address': {
      'street': '65/2, brooklyn road',
      'city': 'Carterton',
      'country': 'New Zealand',
      'zip': 5791
    }
}

// const {name, age} = student;
// console.log(name, age); // John Williamson 9

const {name, age, meal = 'bread'} = student;
console.log(name, age, meal); // John Williamson 9 bread

const {subjects, numberOfSubjects = subjects.length} = student;
console.log(numberOfSubjects); // 3

// Adding Aliases
const {std: standard} = student;
console.log(standard); // 3
// console.log(std); // ReferenceError

// Nested Object Destructuring
const {address: {zip}} = student;
console.log(zip); // 5791

// Destructuring value to a function parameter
function sendEmail(student){
    console.log(`Sent am email to ${student.parents.email}`);
}

sendEmail(student); // Sent am email to john-parents@abcde.com

// OR...

function sendEmail({parents: {email}}){
    console.log(`Sent am email to ${email}`);
}

sendEmail(student); // Sent am email to john-parents@abcde.com

// Destructuring a function return value
const getStudent = () => {
    return {
       'name': 'John Williamson',
        'age': 9,
        'std': 3,
        'subjects': ['Maths', 'English', 'EVS'],
        'parents': {
          'father': 'Brown Williamson',
          'mother': 'Sophia',
          'email': 'john-parents@abcde.com'
        },
        'address': {
          'street': '65/2, brooklyn road',
          'city': 'Carterton',
          'country': 'New Zealand',
          'zip': 5791
        }
    }
}

const {name: anotherName, subjects: anotherSubs} = getStudent();
console.log(anotherName, anotherSubs); // John Williamson [ 'Maths', 'English', 'EVS' ]

// Destructuring within the loop 
const students = [
 {
     'name': 'William',
     'grade': 'A'
 },
 {
     'name': 'Tom',
     'grade': 'A+'
 },
 {
     'name': 'Bob',
     'grade': 'B'
 }
];

for ( let {name, grade} of students) {
 console.log(name, grade)
}