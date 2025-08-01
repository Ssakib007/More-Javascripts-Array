const friends = ["dan", "ann", "kane", "mann", "kan", "han"];
console.log(friends);
// output [ 'ann', 'kane', 'mann', 'kan', 'han' ]
friends.shift(friends);
console.log(friends);
// output [ 'kane', 'mann', 'kan', 'han' ]
friends.unshift("dan");
console.log(friends);
// output[("dan", "kane", "mann", "kan", "han")];
