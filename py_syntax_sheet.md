# Python DSA Syntax

## Input Output
```python
import sys
input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().split()))

print(n)
print(*arr)
```

## Variables
```python
a = 10
b = 3.14
s = "abc"
```

## Loops
```python
for i in range(n):
    pass

for x in arr:
    pass

while True:
    break
```

## Condition
```python
if x > 0:
    pass
elif x == 0:
    pass
else:
    pass
```

## Functions
```python
def solve():
    return

solve()
```

## List
```python
arr = [1, 2, 3]

arr.append(x)
arr.pop()
arr.sort()
arr.reverse()

len(arr)
```

## Dictionary
```python
mp = {}

mp[x] = 1
mp[x] += 1
mp.get(x, 0)

for k in mp:
    mp[k]
```

## Set
```python
s = set()

s.add(x)
s.remove(x)

x in s
```

## String
```python
s = input()

len(s)

for ch in s:
    pass

s.strip()
s.lower()
```

## Stack Queue
```python
stack = []
stack.append(x)
stack.pop()

from collections import deque
q = deque()
q.append(x)
q.popleft()
```

## Builtins
```python
min(arr)
max(arr)
sum(arr)
sorted(arr)
```

## Indexing
```python
arr[i]
arr[i:j]
```
