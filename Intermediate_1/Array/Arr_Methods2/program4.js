// Grouping 

const employees = [
    { name: "Bob", dept: "Engineering", salary: 5000 },
    { name: "Alex", dept: "HR", salary: 3000 },
    { name: "Ravi", dept: "Engineering", salary: 7000 },
    { name: "John", dept: "Engineering", salary: 1000 },
    { name: "Tom", dept: "Sales", salary: 6000 },
];

const groupedByDept = Object.groupBy(employees, ({ dept }) => dept);
console.log(groupedByDept); // {Engineering: Array(3), HR: Array(1), Sales: Array(1)}

const groupedByMoreThan5000 = Object.groupBy(employees, ({ salary }) => {
    return salary >= 5000 ? "More than 5k" : "Less than 5k";
});
console.log(groupedByMoreThan5000); // {More than 5k: Array(3), Less than 5k: Array(2)}

