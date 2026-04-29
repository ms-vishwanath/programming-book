# JavaScript DSA Syntax Reference

## Input Output

```javascript
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);

let idx = 0;
let n = Number(input[idx++]);

console.log(n);
```

## Variables

```javascript
let a = 10;
let b = 3.14;
let s = "abc";
```

## Loops

```javascript
for (let i = 0; i < n; i++) {}

for (let x of arr) {}

while (true) break;
```

## Condition

```javascript
if (x > 0) {}
else if (x === 0) {}
else {}
```

## Functions

```javascript
function solve() {
    return;
}

solve();
```

## Array

```javascript
let arr = [1, 2, 3];

arr.push(x);
arr.pop();

arr.sort((a, b) => a - b);

arr.length;
```

## Object Map

```javascript
let mp = {};

mp[x] = 1;
mp[x] = (mp[x] || 0) + 1;

for (let k in mp) {
    mp[k];
}
```

## Set

```javascript
let s = new Set();

s.add(x);
s.delete(x);

s.has(x);
```

## String

```javascript
let s = "abc";

s.length;

for (let ch of s) {}

s.trim();
s.toLowerCase();
```

## Stack Queue

```javascript
let stack = [];
stack.push(x);
stack.pop();

let q = [];
q.push(x);
q.shift();
```

## Builtins

```javascript
Math.min(...arr);
Math.max(...arr);

arr.reduce((a, b) => a + b, 0);
```

## Indexing

```javascript
arr[i];
arr.slice(i, j);
```
