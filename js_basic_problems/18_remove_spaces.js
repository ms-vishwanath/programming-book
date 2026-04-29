// Problem 18: Remove Spaces
// Input:
// h e l l o
// Output:
// hello

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let s = data[0];
console.log(s.replace(/\s+/g, ""));
