// Problem 12: Two Sum
// Input:
// 5
// 2 7 11 15 3
// 9
// Output:
// 0 1

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let idx = 0;
const next = () => data[idx++].trim();

let n = Number(next());
let arr = next().split(/\s+/).map(Number);
let target = Number(next());
let seen = {};
for (let i = 0; i < n; i++) {
    let complement = target - arr[i];
    if (seen[complement] !== undefined) {
        console.log(seen[complement] + " " + i);
        break;
    }
    seen[arr[i]] = i;
}
