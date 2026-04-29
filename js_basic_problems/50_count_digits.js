// Problem 50: Count Digits
// Input:
// 12345
// Output:
// 5

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let s = data[0].trim();
console.log(s.length);
