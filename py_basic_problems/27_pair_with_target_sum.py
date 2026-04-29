# Problem 27: Pair with Target Sum
# Input:
# 5
# 1 2 3 4 6
# 6
# Output:
# 1 4

n = int(input())
arr = list(map(int, input().split()))
target = int(input())
l, r = 0, n - 1
while l < r:
    s = arr[l] + arr[r]
    if s == target:
        print(l, r)
        break
    elif s < target:
        l += 1
    else:
        r -= 1
