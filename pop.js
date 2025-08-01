const friends = ["ann", "kane", "mann"];
friends.push("chan");
console.log(friends);
// output is [ 'ann', 'kane', 'mann', 'chan' ]
const out1 = friends.pop();
console.log(friends);
// output is [ 'ann', 'kane', 'mann' ]
const out2 = friends.pop();
console.log(friends);
// output is [ 'ann', 'kane' ]
console.log(out1, out2);
// output is chan mann





