// Problem 27: Pair with Target Sum
// Input:
// 5
// 1 2 3 4 6
// 6
// Output:
// 1 4

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let idx = 0;
const next = () => data[idx++].trim();

let n = Number(next());
let arr = next().split(/\s+/).map(Number);
let target = Number(next());
let l = 0, r = n - 1;
while (l < r) {
    let sum = arr[l] + arr[r];
    if (sum === target) {
        console.log(l + " " + r);
        break;
    } else if (sum < target) {
        l++;
    } else {
        r--;
    }
}
