// Problem 9: Frequency Count
// Input:
// 6
// 1 2 4 4 5 6
// Output:
// 1 1
// 2 1
// 4 2
// 5 1
// 6 1

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
let keys = Object.keys(freq).map(Number).sort((a, b) => a - b);
for (let k of keys) {
    console.log(k + " " + freq[k]);
}
