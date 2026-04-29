// Problem 42: Empty String
// Input:
// 
// Output:
// 0

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let s = data[0] || "";
console.log(s.length);
