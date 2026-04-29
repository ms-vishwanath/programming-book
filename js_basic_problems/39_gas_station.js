// Problem 39: Gas Station
// Input:
// 3
// 1 2 3
// 3
// 2 3 1
// Output:
// 2

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let idx = 0;
const next = () => data[idx++].trim();

let n = Number(next());
let gas = next().split(/\s+/).map(Number);
let cost = next().split(/\s+/).map(Number);
let totalGas = gas.reduce((a, b) => a + b, 0);
let totalCost = cost.reduce((a, b) => a + b, 0);
if (totalGas < totalCost) {
    console.log(-1);
} else {
    let start = 0, tank = 0;
    for (let i = 0; i < n; i++) {
        tank += gas[i] - cost[i];
        if (tank < 0) {
            start = i + 1;
            tank = 0;
        }
    }
    console.log(start);
}
