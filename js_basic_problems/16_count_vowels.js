// Problem 16: Count Vowels
// Input:
// hello world
// Output:
// 3

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let s = data[0].toLowerCase();
let vowels = "aeiou";
let count = 0;
for (let ch of s) {
    if (vowels.includes(ch)) count++;
}
console.log(count);
