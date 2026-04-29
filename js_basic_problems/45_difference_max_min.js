// Problem 45: Difference Max Min
// Input:
// 5
// 1 9 3 7 2
// Output:
// 8

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let idx = 0;
const next = () => data[idx++].trim();

let n = Number(next());
let arr = next().split(/\s+/).map(Number);
console.log(Math.max(...arr) - Math.min(...arr));
