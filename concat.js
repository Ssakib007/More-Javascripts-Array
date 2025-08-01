const a = [0, 1, 2, 3];
const b = ["a", "b", "c"];
const c = [7, 8, 9];
// combining two arrays.
console.log((result = a.concat(b)));
// output [0,1,2,3,'a','b','c']

// combining multiple arrays.
console.log((result = a.concat(b, c)));
// output [0,1,2,3'a','b','c',7,8,9]

// adding single values
console.log((result = a.concat(4, 5)));
// output [0, 1,2,3,4,5]
