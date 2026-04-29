# Problem 9: Frequency Count
# Input:
# 6
# 1 2 4 4 5 6
# Output:
# 1 1
# 2 1
# 4 2
# 5 1
# 6 1

from collections import Counter
n = int(input())
arr = list(map(int, input().split()))
freq = Counter(arr)
for k in sorted(freq.keys()):
    print(k, freq[k])
