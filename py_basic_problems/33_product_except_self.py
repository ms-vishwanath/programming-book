# Problem 33: Product Except Self
# Input:
# 4
# 1 2 3 4
# Output:
# 24 12 8 6

n = int(input())
arr = list(map(int, input().split()))
result = [1] * n
prefix = 1
for i in range(n):
    result[i] *= prefix
    prefix *= arr[i]
suffix = 1
for i in range(n - 1, -1, -1):
    result[i] *= suffix
    suffix *= arr[i]
print(*result)
