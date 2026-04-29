// Problem 23: Next Greater Element
// Input:
// 4
// 2 1 3 4
// Output:
// 3 3 4 -1

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let idx = 0;
const next = () => data[idx++].trim();

let n = Number(next());
let arr = next().split(/\s+/).map(Number);
let result = [];
for (let i = 0; i < n; i++) {
    let found = false;
    for (let j = i + 1; j < n; j++) {
        if (arr[j] > arr[i]) {
            result.push(arr[j]);
            found = true;
            break;
        }
    }
    if (!found) result.push(-1);
}
console.log(result.join(" "));
