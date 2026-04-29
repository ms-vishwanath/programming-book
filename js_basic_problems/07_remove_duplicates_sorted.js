// Problem 7: Remove Duplicates (sorted)
// Input:
// 6
// 1 1 2 2 3 3
// Output:
// 1 2 3

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let idx = 0;
const next = () => data[idx++].trim();

let n = Number(next());
let arr = next().split(/\s+/).map(Number);
let result = [];
for (let x of arr) {
    if (result.length === 0 || result[result.length - 1] !== x) {
        result.push(x);
    }
}
console.log(result.join(" "));
