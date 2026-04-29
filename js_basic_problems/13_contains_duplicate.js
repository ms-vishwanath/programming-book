// Problem 13: Contains Duplicate
// Input:
// 5
// 1 2 3 4 1
// Output:
// YES

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let idx = 0;
const next = () => data[idx++].trim();

let n = Number(next());
let arr = next().split(/\s+/).map(Number);
let s = new Set(arr);
console.log(s.size !== arr.length ? "YES" : "NO");
