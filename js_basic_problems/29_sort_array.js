// Problem 29: Sort Array
// Input:
// 5
// 5 3 1 4 2
// Output:
// 1 2 3 4 5

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let idx = 0;
const next = () => data[idx++].trim();

let n = Number(next());
let arr = next().split(/\s+/).map(Number);
arr.sort((a, b) => a - b);
console.log(arr.join(" "));
