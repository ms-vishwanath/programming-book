# Problem 20: Unique Count
# Input:
# 6
# 1 2 2 3 3 4
# Output:
# 4

n = int(input())
arr = list(map(int, input().split()))
print(len(set(arr)))
