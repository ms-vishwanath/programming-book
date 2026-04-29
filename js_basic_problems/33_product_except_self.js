// Problem 33: Product Except Self
// Input:
// 4
// 1 2 3 4
// Output:
// 24 12 8 6

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let idx = 0;
const next = () => data[idx++].trim();

let n = Number(next());
let arr = next().split(/\s+/).map(Number);
let result = new Array(n).fill(1);
let prefix = 1;
for (let i = 0; i < n; i++) {
    result[i] *= prefix;
    prefix *= arr[i];
}
let suffix = 1;
for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= arr[i];
}
console.log(result.join(" "));
