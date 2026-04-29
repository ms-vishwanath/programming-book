# Problem 24: Reverse Queue
# Input:
# 5
# 1 2 3 4 5
# Output:
# 5 4 3 2 1

from collections import deque
n = int(input())
arr = list(map(int, input().split()))
q = deque(arr)
stack = []
while q:
    stack.append(q.popleft())
while stack:
    q.append(stack.pop())
print(*q)
