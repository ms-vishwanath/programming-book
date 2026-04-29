# Problem 5: Reverse Array
# Input:
# 5
# 1 2 3 4 5
# Output:
# 5 4 3 2 1

n = int(input())
arr = list(map(int, input().split()))
print(*arr[::-1])
