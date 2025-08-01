/** REMOVING ELEMENTS  **/

const a = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(a.splice(5, 2));
// output [ 6, 7 ]
// array.splice(5,2) delete count is 2, so two elements will be removed starting from index 5.
console.log(a);
// output [ 1, 2, 3, 4, 5, 8 ]

const b = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(b.splice(2));
// output [ 3, 4, 5, 6, 7, 8 ]
// array.splice(2). starts removing elements from index 2.
console.log(b);
//  output [ 1, 2 ]

/** ADD ELEMENTS **/

const c = [1, 2, 5, 6];
console.log(c.splice(2, 0, 3, 4));
// output [], cause nothing was removed.
// array.splice(2,0,3,4). start at index 2, delete 0 items, insert 3 and 4 at index 2.
console.log(c);
// output [ 1, 2, 3, 4, 5, 6 ]

/**  REPLACE ELEMENTS   **/

const d = [1, 8, 3, 4, 5];
console.log(d.splice(1, 1, 2));
// output [8], cause only one element from index 1 was removed, which was 8.
// array.splice(1,1,3). start at index 1, replace 1 element at index 1.
console.log(d);
// output [ 1, 2, 3, 4, 5 ]
