# Problem 34: Maximum Subarray
# Input:
# 5
# -2 1 -3 4 -1
# Output:
# 4

n = int(input())
arr = list(map(int, input().split()))
curr = ans = arr[0]
for i in range(1, n):
    curr = max(arr[i], curr + arr[i])
    ans = max(ans, curr)
print(ans)
