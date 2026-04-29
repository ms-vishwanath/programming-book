// Problem 15: Palindrome
// Input:
// madam
// Output:
// YES

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let s = data[0].trim();
console.log(s === s.split("").reverse().join("") ? "YES" : "NO");
