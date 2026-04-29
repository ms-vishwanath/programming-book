# Problem 49: Second Largest
# Input:
# 5
# 1 5 3 4 2
# Output:
# 4

n = int(input())
arr = list(map(int, input().split()))
arr = list(set(arr))
arr.sort(reverse=True)
print(arr[1] if len(arr) > 1 else -1)
