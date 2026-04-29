// Problem 28: Remove Duplicates Unsorted
// Input:
// 6
// 1 2 2 3 1 4
// Output:
// 1 2 3 4

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let idx = 0;
const next = () => data[idx++].trim();

let n = Number(next());
let arr = next().split(/\s+/).map(Number);
let seen = new Set();
let result = [];
for (let x of arr) {
    if (!seen.has(x)) {
        result.push(x);
        seen.add(x);
    }
}
console.log(result.join(" "));
