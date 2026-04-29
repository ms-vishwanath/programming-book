# Problem 37: Rotate Array Right by k
# Input:
# 5
# 1 2 3 4 5
# 2
# Output:
# 4 5 1 2 3

n = int(input())
arr = list(map(int, input().split()))
k = int(input()) % n
print(*(arr[-k:] + arr[:-k]))
