// Problem 31: Range Sum Query
// Input:
// 5
// 1 2 3 4 5
// 1 3
// Output:
// 9

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let idx = 0;
const next = () => data[idx++].trim();

let n = Number(next());
let arr = next().split(/\s+/).map(Number);
let [l, r] = next().split(/\s+/).map(Number);
let sum = 0;
for (let i = l; i <= r; i++) sum += arr[i];
console.log(sum);
