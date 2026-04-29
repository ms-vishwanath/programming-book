# Problem 12: Two Sum
# Input:
# 5
# 2 7 11 15 3
# 9
# Output:
# 0 1

n = int(input())
arr = list(map(int, input().split()))
target = int(input())
seen = {}
for i, x in enumerate(arr):
    if target - x in seen:
        print(seen[target - x], i)
        break
    seen[x] = i
