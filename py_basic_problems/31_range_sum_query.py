# Problem 31: Range Sum Query
# Input:
# 5
# 1 2 3 4 5
# 1 3
# Output:
# 9

n = int(input())
arr = list(map(int, input().split()))
l, r = map(int, input().split())
print(sum(arr[l:r+1]))
