# Problem 43: Multiple Test Case Sum
# Input:
# 2
# 3
# 1 2 3
# 3
# 4 5 6
# Output:
# 6
# 15

t = int(input())
for _ in range(t):
    n = int(input())
    arr = list(map(int, input().split()))
    print(sum(arr))
