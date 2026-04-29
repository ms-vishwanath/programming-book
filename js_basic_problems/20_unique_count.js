// Problem 20: Unique Count
// Input:
// 6
// 1 2 2 3 3 4
// Output:
// 4

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let idx = 0;
const next = () => data[idx++].trim();

let n = Number(next());
let arr = next().split(/\s+/).map(Number);
console.log(new Set(arr).size);
