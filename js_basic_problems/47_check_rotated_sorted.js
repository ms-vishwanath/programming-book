// Problem 47: Check Rotated Sorted
// Input:
// 5
// 3 4 5 1 2
// Output:
// YES

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let idx = 0;
const next = () => data[idx++].trim();

let n = Number(next());
let arr = next().split(/\s+/).map(Number);
let breaks = 0;
for (let i = 0; i < n; i++) {
    if (arr[i] > arr[(i + 1) % n]) breaks++;
}
console.log(breaks <= 1 ? "YES" : "NO");
