# Problem 16: Count Vowels
# Input:
# hello world
# Output:
# 3

s = input().lower()
print(sum(1 for c in s if c in 'aeiou'))
