# Problem 4: Count Even Numbers
# Input:
# 6
# 1 2 3 4 5 6
# Output:
# 3

n = int(input())
arr = list(map(int, input().split()))
print(sum(1 for x in arr if x % 2 == 0))
