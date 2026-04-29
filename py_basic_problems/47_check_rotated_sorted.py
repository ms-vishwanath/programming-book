# Problem 47: Check Rotated Sorted
# Input:
# 5
# 3 4 5 1 2
# Output:
# YES

n = int(input())
arr = list(map(int, input().split()))
breakpoints = sum(1 for i in range(n) if arr[i] > arr[(i + 1) % n])
print("YES" if breakpoints <= 1 else "NO")
