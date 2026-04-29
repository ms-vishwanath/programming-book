// Problem 6: Move Zeroes
// Input:
// 6
// 0 1 0 3 12 0
// Output:
// 1 3 12 0 0 0

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let idx = 0;
const next = () => data[idx++].trim();

let n = Number(next());
let arr = next().split(/\s+/).map(Number);
let result = arr.filter(x => x !== 0).concat(Array(arr.filter(x => x === 0).length).fill(0));
console.log(result.join(" "));
