// Problem 25: Max Sum Subarray (k=3)
// Input:
// 6
// 2 1 5 1 3 2
// 3
// Output:
// 9

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let idx = 0;
const next = () => data[idx++].trim();

let n = Number(next());
let arr = next().split(/\s+/).map(Number);
let k = Number(next());
let curr = 0;
for (let i = 0; i < k; i++) curr += arr[i];
let ans = curr;
for (let i = k; i < n; i++) {
    curr += arr[i] - arr[i - k];
    if (curr > ans) ans = curr;
}
console.log(ans);
