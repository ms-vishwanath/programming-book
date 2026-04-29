// Problem 17: Reverse String
// Input:
// hello
// Output:
// olleh

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let s = data[0].trim();
console.log(s.split("").reverse().join(""));
