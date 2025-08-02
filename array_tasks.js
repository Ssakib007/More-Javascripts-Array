//  js-array-tasks
// 1. Declare an array
// a.Declare an array with 5 elements containing fruits
// b.console log the 3rd index element
// c.change the value of the 2nd index element to guava.
// d.console log the final array

const fruits = ["mango", "jackfruit", "orange", "apple", "grapes"];
console.log(fruits[3]);
fruits[2] = "guava";
console.log(fruits);

// 2. Add or remove elements
// a.Declare an array of 3 tourist destinations
// b.Add a new tourist destination to your tourist array
// c.Add two more to your array
// d.Remove the last tourist destination you have added
// e.display the final array as output

const destination = ["cox's", "dhaka", "chat"];
destination.push("newark");
destination.push("rome", "los");
destination.pop();
console.log(destination);

// 3. Checking Array Membership with ‘includes’
// Instructions:

// a.Create an array of books containing different book.

// b.Use the includes method to check if the array contains a javascript book.

// c.Print a message to the console indicating whether the element is present in the array or not.

const book = ["book1", "book2", "book3", "book4", "book5"];
console.log(book.includes("book1"));
if (book.includes("book1")) {
  console.log("book1 is present in the array");
} else {
  console.log("book1 is not present in the array");
}

// 4. Checking if it's an Array
// Instructions:

// a.Create different variables, each containing either an array or a non-array value.

// b.Now use isArray to check if each variable is an array.

// c.Print a message to the console indicating whether each variable is an array or not.

const num = (5, 6, 7, 8, 9);
const name = ["ami", "tum", "se"];
const is = (true, false, true, false);
if (Array.isArray(num)) {
  console.log("num is an array");
} else {
  console.log("num is not an array");
}
if (Array.isArray(name)) {
  console.log("name is an array");
} else {
  console.log("name is not an array");
}
if (Array.isArray(is)) {
  console.log(" is is an array");
} else {
  console.log("is is not an array");
}

// 5. Combining Arrays
// Instructions:

// a.Create two arrays of your choice.
// b.Use the concat method to combine the two arrays into a new array.
// c.Print both the original arrays and the combined array using console.log().

const a = [1, 2, 3];
const b = [4, 5, 6];
console.log(a);
console.log(b);
console.log(a.concat(b));
