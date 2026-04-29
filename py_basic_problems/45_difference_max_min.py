# Problem 45: Difference Max Min
# Input:
# 5
# 1 9 3 7 2
# Output:
# 8

n = int(input())
arr = list(map(int, input().split()))
print(max(arr) - min(arr))
