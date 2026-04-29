# Problem 14: Intersection
# Input:
# 3
# 1 2 3
# 3
# 2 3 4
# Output:
# 2 3

n = int(input())
arr1 = set(map(int, input().split()))
m = int(input())
arr2 = set(map(int, input().split()))
print(*sorted(arr1 & arr2))
