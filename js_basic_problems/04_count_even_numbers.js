// Problem 4: Count Even Numbers
// Input:
// 6
// 1 2 3 4 5 6
// Output:
// 3

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let idx = 0;
const next = () => data[idx++].trim();

let n = Number(next());
let arr = next().split(/\s+/).map(Number);
console.log(arr.filter(x => x % 2 === 0).length);
