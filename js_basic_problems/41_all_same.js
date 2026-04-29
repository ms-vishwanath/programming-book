// Problem 41: All Same
// Input:
// 5
// 2 2 2 2 2
// Output:
// 2

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let idx = 0;
const next = () => data[idx++].trim();

let n = Number(next());
let arr = next().split(/\s+/).map(Number);
console.log(arr[0]);
