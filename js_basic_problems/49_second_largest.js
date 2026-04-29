// Problem 49: Second Largest
// Input:
// 5
// 1 5 3 4 2
// Output:
// 4

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let idx = 0;
const next = () => data[idx++].trim();

let n = Number(next());
let arr = [...new Set(next().split(/\s+/).map(Number))].sort((a, b) => b - a);
console.log(arr.length > 1 ? arr[1] : -1);
