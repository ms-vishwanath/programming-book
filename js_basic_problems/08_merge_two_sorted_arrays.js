// Problem 8: Merge Two Sorted Arrays
// Input:
// 3
// 1 3 5
// 3
// 2 4 6
// Output:
// 1 2 3 4 5 6

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let idx = 0;
const next = () => data[idx++].trim();

let n = Number(next());
let arr1 = next().split(/\s+/).map(Number);
let m = Number(next());
let arr2 = next().split(/\s+/).map(Number);
let i = 0, j = 0;
let result = [];
while (i < n && j < m) {
    if (arr1[i] <= arr2[j]) {
        result.push(arr1[i]);
        i++;
    } else {
        result.push(arr2[j]);
        j++;
    }
}
while (i < n) { result.push(arr1[i]); i++; }
while (j < m) { result.push(arr2[j]); j++; }
console.log(result.join(" "));
