const friends = ["dan", "ann", "kane", "mann", "kan", "han"];
console.log(friends.includes("dan"));
// output true
console.log(friends.includes("nan"));
// output false
if (friends.includes("dan")) {
  console.log("party");
} else {
  console.log("No food, we are fasting");
}
