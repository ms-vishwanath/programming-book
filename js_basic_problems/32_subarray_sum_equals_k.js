// Problem 32: Subarray Sum Equals K
// Input:
// 5
// 1 2 3 2 1
// 3
// Output:
// 2

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let idx = 0;
const next = () => data[idx++].trim();

let n = Number(next());
let arr = next().split(/\s+/).map(Number);
let k = Number(next());
let prefix = 0;
let count = { 0: 1 };
let ans = 0;
for (let x of arr) {
    prefix += x;
    ans += (count[prefix - k] || 0);
    count[prefix] = (count[prefix] || 0) + 1;
}
console.log(ans);
