// Problem 22: Valid Parentheses
// Input:
// {[()]}
// Output:
// YES

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let s = data[0].trim();
let stack = [];
let match = { '(': ')', '[': ']', '{': '}' };
for (let ch of s) {
    if (match[ch]) {
        stack.push(ch);
    } else {
        if (stack.length === 0 || match[stack.pop()] !== ch) {
            console.log("NO");
            return;
        }
    }
}
console.log(stack.length === 0 ? "YES" : "NO");
