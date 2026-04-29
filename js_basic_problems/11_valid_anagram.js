// Problem 11: Valid Anagram
// Input:
// listen
// silent
// Output:
// YES

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let s1 = data[0].trim();
let s2 = data[1].trim();
let count = {};
for (let ch of s1) count[ch] = (count[ch] || 0) + 1;
for (let ch of s2) {
    if (!count[ch]) {
        console.log("NO");
        return;
    }
    count[ch]--;
}
console.log("YES");
