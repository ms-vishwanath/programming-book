# Problem 19: Longest Word Length
# Input:
# hello world program
# Output:
# 7

s = input()
print(max(len(w) for w in s.split()))
