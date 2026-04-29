// Problem 26: Longest Unique Substring
// Input:
// abcabcbb
// Output:
// 3

const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split("\n");
let s = data[0].trim();
let seen = new Set();
let l = 0, ans = 0;
for (let r = 0; r < s.length; r++) {
    while (seen.has(s[r])) {
        seen.delete(s[l]);
        l++;
    }
    seen.add(s[r]);
    ans = Math.max(ans, r - l + 1);
}
console.log(ans);
