# Problem 22: Valid Parentheses
# Input:
# {[()]}
# Output:
# YES

s = input().strip()
stack = []
match = {'(': ')', '[': ']', '{': '}'}
for c in s:
    if c in match:
        stack.append(c)
    elif not stack or match[stack.pop()] != c:
        print("NO")
        break
else:
    print("YES" if not stack else "NO")
