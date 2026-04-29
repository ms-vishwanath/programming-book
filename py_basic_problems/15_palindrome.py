# Problem 15: Palindrome
# Input:
# madam
# Output:
# YES

s = input().strip()
print("YES" if s == s[::-1] else "NO")
