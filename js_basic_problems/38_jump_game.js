// Problem 38: Jump Game
// Input:
// 5
// 2 3 1 1 4
// Output:
// YES

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let idx = 0;
const next = () => data[idx++].trim();

let n = Number(next());
let arr = next().split(/\s+/).map(Number);
let reach = 0;
for (let i = 0; i < n; i++) {
    if (i > reach) {
        console.log("NO");
        return;
    }
    reach = Math.max(reach, i + arr[i]);
}
console.log("YES");
