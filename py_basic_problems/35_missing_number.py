# Problem 35: Missing Number
# Input:
# 5
# 0 1 3 4 5
# Output:
# 2

n = int(input())
arr = list(map(int, input().split()))
print(n * (n + 1) // 2 - sum(arr))
