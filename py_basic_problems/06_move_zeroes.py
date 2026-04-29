# Problem 6: Move Zeroes
# Input:
# 6
# 0 1 0 3 12 0
# Output:
# 1 3 12 0 0 0

n = int(input())
arr = list(map(int, input().split()))
result = [x for x in arr if x != 0] + [0] * arr.count(0)
print(*result)
