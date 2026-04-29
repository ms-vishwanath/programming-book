// Problem 10: First Unique Element
// Input:
// aabbcd
// Output:
// c

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let s = data[0].trim();
let freq = {};
for (let ch of s) {
    freq[ch] = (freq[ch] || 0) + 1;
}
for (let ch of s) {
    if (freq[ch] === 1) {
        console.log(ch);
        break;
    }
}
