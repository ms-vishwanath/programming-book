# Problem 13: Contains Duplicate
# Input:
# 5
# 1 2 3 4 1
# Output:
# YES

n = int(input())
arr = list(map(int, input().split()))
print("YES" if len(arr) != len(set(arr)) else "NO")
