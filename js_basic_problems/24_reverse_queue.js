// Problem 24: Reverse Queue
// Input:
// 5
// 1 2 3 4 5
// Output:
// 5 4 3 2 1

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let idx = 0;
const next = () => data[idx++].trim();

let n = Number(next());
let arr = next().split(/\s+/).map(Number);
let q = arr;
let stack = [];
while (q.length) stack.push(q.shift());
while (stack.length) q.push(stack.pop());
console.log(q.join(" "));
