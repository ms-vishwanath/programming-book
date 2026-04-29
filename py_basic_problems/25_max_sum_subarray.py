# Problem 25: Max Sum Subarray (k=3)
# Input:
# 6
# 2 1 5 1 3 2
# 3
# Output:
# 9

n = int(input())
arr = list(map(int, input().split()))
k = int(input())
curr = sum(arr[:k])
ans = curr
for i in range(k, n):
    curr += arr[i] - arr[i - k]
    ans = max(ans, curr)
print(ans)
