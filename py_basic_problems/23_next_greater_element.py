# Problem 23: Next Greater Element
# Input:
# 4
# 2 1 3 4
# Output:
# 3 3 4 -1

n = int(input())
arr = list(map(int, input().split()))
result = []
for i in range(n):
    found = False
    for j in range(i + 1, n):
        if arr[j] > arr[i]:
            result.append(arr[j])
            found = True
            break
    if not found:
        result.append(-1)
print(*result)
