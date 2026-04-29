// Problem 34: Maximum Subarray
// Input:
// 5
// -2 1 -3 4 -1
// Output:
// 4

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let idx = 0;
const next = () => data[idx++].trim();

let n = Number(next());
let arr = next().split(/\s+/).map(Number);
let curr = arr[0], ans = arr[0];
for (let i = 1; i < n; i++) {
    curr = Math.max(arr[i], curr + arr[i]);
    ans = Math.max(ans, curr);
}
console.log(ans);
