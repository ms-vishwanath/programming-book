# Problem 11: Valid Anagram
# Input:
# listen
# silent
# Output:
# YES

from collections import Counter
s1 = input().strip()
s2 = input().strip()
print("YES" if Counter(s1) == Counter(s2) else "NO")
