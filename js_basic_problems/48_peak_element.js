// Problem 48: Peak Element
// Input:
// 5
// 1 3 20 4 1
// Output:
// 20

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let idx = 0;
const next = () => data[idx++].trim();

let n = Number(next());
let arr = next().split(/\s+/).map(Number);
console.log(Math.max(...arr));
