# Problem 29: Sort Array
# Input:
# 5
# 5 3 1 4 2
# Output:
# 1 2 3 4 5

n = int(input())
arr = list(map(int, input().split()))
arr.sort()
print(*arr)
