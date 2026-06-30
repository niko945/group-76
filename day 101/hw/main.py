# def solution(digits):
#     num = 0

#     for i in range(len(digits) - 4):
#         current = int(digits[i:i + 5])
#         if current > num:
#             num = current

#     return num

# def break_chocolate(n, m):
#     if n == 0 or m == 0:
#         return 0
#     return n * m - 1


# def is_anagram(test, original):
#     return sorted(test.lower()) == sorted(original.lower())


# def over_the_road(address, n):
#     return 2 * n + 1 - address