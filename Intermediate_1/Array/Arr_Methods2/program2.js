// sort()
// 1. The default sort() method converts the element types into strings
// 2. The default sorting order is ascending

const names = ["tom", "alex", "bob"];
console.log("After default sorting: ", names.sort()); // ['alex', 'bob', 'tom']

const artists = [
    'John White Abbott', 
    "Leonardo da Vinci",
    "Charles Aubry",
    "Anna Atkins",
    "Barent Avercamp",
];

console.log("Default sorting of artists array", artists.sort()); // ['Anna Atkins', 'Barent Avercamp', 'Charles Aubry', 'John White Abbott', 'Leonardo da Vinci']

artists.sort(function (a, b) {
    return a === b ? 0 : a > b ? -1 : 1;
});

console.log("Sort the artist names(Descending)", artists); // ['Leonardo da Vinci', 'John White Abbott', 'Charles Aubry', 'Barent Avercamp', 'Anna Atkins']

let ages = [2, 1000, 10, 3, 23, 12, 30, 21];

console.log(ages.sort()); // [10, 1000, 12, 2, 21, 23, 3, 30]


console.log(
    "age with default sorting",
    ages.sort(function (a, b) {
        return a === b ? 0 : a > b ? 1 : -1;
    })
); // [2, 3, 10, 12, 21, 23, 30, 1000]

