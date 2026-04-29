# Problem 28: Remove Duplicates Unsorted
# Input:
# 6
# 1 2 2 3 1 4
# Output:
# 1 2 3 4

n = int(input())
arr = list(map(int, input().split()))
seen = set()
result = []
for x in arr:
    if x not in seen:
        result.append(x)
        seen.add(x)
print(*result)
