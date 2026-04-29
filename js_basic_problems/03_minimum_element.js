// Problem 3: Minimum Element
// Input:
// 5
// 4 2 8 1 6
// Output:
// 1

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let idx = 0;
const next = () => data[idx++].trim();

let n = Number(next());
let arr = next().split(/\s+/).map(Number);
console.log(Math.min(...arr));
