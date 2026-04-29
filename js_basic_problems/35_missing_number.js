// Problem 35: Missing Number
// Input:
// 5
// 0 1 3 4 5
// Output:
// 2

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let idx = 0;
const next = () => data[idx++].trim();

let n = Number(next());
let arr = next().split(/\s+/).map(Number);
let total = n * (n + 1) / 2;
let sum = arr.reduce((a, b) => a + b, 0);
console.log(total - sum);
