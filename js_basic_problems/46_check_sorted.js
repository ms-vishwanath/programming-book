// Problem 46: Check Sorted
// Input:
// 5
// 1 2 3 4 5
// Output:
// YES

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let idx = 0;
const next = () => data[idx++].trim();

let n = Number(next());
let arr = next().split(/\s+/).map(Number);
let sorted = [...arr].sort((a, b) => a - b);
console.log(JSON.stringify(arr) === JSON.stringify(sorted) ? "YES" : "NO");
