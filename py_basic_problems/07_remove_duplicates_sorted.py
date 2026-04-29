# Problem 7: Remove Duplicates (sorted)
# Input:
# 6
# 1 1 2 2 3 3
# Output:
# 1 2 3

n = int(input())
arr = list(map(int, input().split()))
result = []
for x in arr:
    if not result or result[-1] != x:
        result.append(x)
print(*result)
