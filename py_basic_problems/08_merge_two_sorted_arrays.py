# Problem 8: Merge Two Sorted Arrays
# Input:
# 3
# 1 3 5
# 3
# 2 4 6
# Output:
# 1 2 3 4 5 6

n = int(input())
arr1 = list(map(int, input().split()))
m = int(input())
arr2 = list(map(int, input().split()))
i, j = 0, 0
result = []
while i < n and j < m:
    if arr1[i] <= arr2[j]:
        result.append(arr1[i])
        i += 1
    else:
        result.append(arr2[j])
        j += 1
result.extend(arr1[i:])
result.extend(arr2[j:])
print(*result)
