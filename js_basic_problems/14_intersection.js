// Problem 14: Intersection
// Input:
// 3
// 1 2 3
// 3
// 2 3 4
// Output:
// 2 3

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let idx = 0;
const next = () => data[idx++].trim();

let n = Number(next());
let set1 = new Set(next().split(/\s+/).map(Number));
let m = Number(next());
let set2 = new Set(next().split(/\s+/).map(Number));
let result = [...set1].filter(x => set2.has(x)).sort((a, b) => a - b);
console.log(result.join(" "));
