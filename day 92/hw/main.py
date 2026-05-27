def add(num1, num2):
    result = ""
    
    while num1 > 0 or num2 > 0:
        result = str(num1 % 10 + num2 % 10) + result
        num1 //= 10
        num2 //= 10
        
    return int(result)

def palindrome_chain_length(n):
    steps = 0
    
    while str(n) != str(n)[::-1]:
        n = n + int(str(n)[::-1])
        steps += 1
        
    return steps

def nth_smallest(arr, pos):
    return sorted(arr)[pos - 1]


def solution(start, finish):
    jumps = 0
    
    while start < finish:
        if finish - start >= 3:
            start += 3
        else:
            start += 1
            
        jumps += 1
        
    return jumps

def incrementer(nums):
    result = []
    
    for i in range(len(nums)):
        result.append((nums[i] + i + 1) % 10)
        
    return result

def sum_of_n(n):
    result = [0]
    total = 0

    if n >= 0:
        for i in range(1, n + 1):
            total += i
            result.append(total)
    else:
        for i in range(1, -n + 1):
            total += i
            result.append(-total)

    return result

def largest(n, nums):
    return sorted(nums)[-n:]