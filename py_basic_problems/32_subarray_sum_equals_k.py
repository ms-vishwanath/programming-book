# Problem 32: Subarray Sum Equals K
# Input:
# 5
# 1 2 3 2 1
# 3
# Output:
# 2

from collections import defaultdict
n = int(input())
arr = list(map(int, input().split()))
k = int(input())
prefix = 0
count = defaultdict(int)
count[0] = 1
ans = 0
for x in arr:
    prefix += x
    ans += count[prefix - k]
    count[prefix] += 1
print(ans)
