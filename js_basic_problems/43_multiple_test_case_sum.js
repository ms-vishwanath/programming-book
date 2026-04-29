// Problem 43: Multiple Test Case Sum
// Input:
// 2
// 3
// 1 2 3
// 3
// 4 5 6
// Output:
// 6
// 15

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let idx = 0;
const next = () => data[idx++].trim();

let t = Number(next());
for (let i = 0; i < t; i++) {
    let n = Number(next());
    let arr = next().split(/\s+/).map(Number);
    console.log(arr.reduce((a, b) => a + b, 0));
}
