# Problem 46: Check Sorted
# Input:
# 5
# 1 2 3 4 5
# Output:
# YES

n = int(input())
arr = list(map(int, input().split()))
print("YES" if arr == sorted(arr) else "NO")
