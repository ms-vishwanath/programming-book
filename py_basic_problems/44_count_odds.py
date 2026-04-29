# Problem 44: Count Odds
# Input:
# 5
# 1 2 3 4 5
# Output:
# 3

n = int(input())
arr = list(map(int, input().split()))
print(sum(1 for x in arr if x % 2 != 0))
