// Problem 36: Majority Element
// Input:
// 5
// 2 2 1 1 2
// Output:
// 2

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let idx = 0;
const next = () => data[idx++].trim();

let n = Number(next());
let arr = next().split(/\s+/).map(Number);
let freq = {};
for (let x of arr) {
    freq[x] = (freq[x] || 0) + 1;
}
let maxCount = 0, major = arr[0];
for (let k in freq) {
    if (freq[k] > maxCount) {
        maxCount = freq[k];
        major = k;
    }
}
console.log(major);
