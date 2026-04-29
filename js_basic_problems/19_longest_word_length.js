// Problem 19: Longest Word Length
// Input:
// hello world program
// Output:
// 7

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let s = data[0].trim();
let words = s.split(/\s+/);
let maxLen = 0;
for (let w of words) {
    if (w.length > maxLen) maxLen = w.length;
}
console.log(maxLen);
