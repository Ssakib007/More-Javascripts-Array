const numbers = [12, 22, 54, 65, 12, 22, 54, 65];
console.log(numbers);
const passed = [true, false, true, false];

const fruits = ["apple", "banana", "grape"];
// here the index number for apple is 0, for banana is 1, and for grape is 2
const number = [2, 5, 8];
//  here the index number of 2 is 0, 5 is 1, and 8 is 2.
const index = [0, 1, 2, 3, 4];
console.log(fruits[1]);
// output is banana
console.log(number[2]);
// output is 8.

console.log(fruits.length);
console.log(numbers.length);

const fruit = ["apple", "banana", "grape"];
console.log(fruit);
// output is [ 'apple', 'banana', 'grape' ]
fruit[0] = "orange";
// this command indicates the value of the Index position 0 of the array named "fruit"
console.log(fruit);
//  output [ 'orange', 'banana', 'grape' ]

const numb = [12, 22, 54, 65, 12, 22, 54, 65];
const fourth = numb[4];
console.log(fourth);
// output is 12 cause Index number 4 contains the value 12, which was assigned to the variable named "fourth"
