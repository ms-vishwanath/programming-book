# Problem 26: Longest Unique Substring
# Input:
# abcabcbb
# Output:
# 3

s = input().strip()
seen = set()
l = 0
ans = 0
for r in range(len(s)):
    while s[r] in seen:
        seen.remove(s[l])
        l += 1
    seen.add(s[r])
    ans = max(ans, r - l + 1)
print(ans)
