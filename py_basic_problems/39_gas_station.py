# Problem 39: Gas Station
# Input:
# 3
# 1 2 3
# 3
# 2 3 1
# Output:
# 2

n = int(input())
gas = list(map(int, input().split()))
cost = list(map(int, input().split()))
total_gas = sum(gas)
total_cost = sum(cost)
if total_gas < total_cost:
    print(-1)
else:
    start = 0
    tank = 0
    for i in range(n):
        tank += gas[i] - cost[i]
        if tank < 0:
            start = i + 1
            tank = 0
    print(start)
