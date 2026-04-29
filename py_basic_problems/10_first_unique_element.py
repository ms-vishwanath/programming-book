# Problem 10: First Unique Element
# Input:
# aabbcd
# Output:
# c

from collections import Counter
s = input().strip()
freq = Counter(s)
for c in s:
    if freq[c] == 1:
        print(c)
        break
