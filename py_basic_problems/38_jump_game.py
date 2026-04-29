# Problem 38: Jump Game
# Input:
# 5
# 2 3 1 1 4
# Output:
# YES

n = int(input())
arr = list(map(int, input().split()))
reach = 0
for i in range(n):
    if i > reach:
        print("NO")
        break
    reach = max(reach, i + arr[i])
else:
    print("YES")
