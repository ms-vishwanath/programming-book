# Problem 36: Majority Element
# Input:
# 5
# 2 2 1 1 2
# Output:
# 2

from collections import Counter
n = int(input())
arr = list(map(int, input().split()))
freq = Counter(arr)
print(max(freq, key=freq.get))
