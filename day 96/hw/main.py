# def spacey(array):
#     result = []
#     sum = ""

#     for i in array:
#         sum += i
#         result.append(sum)

#     return result


# def cube_odd(arr):
#     total = 0

#     for i in arr:
#         if type(i) not in (int, float):
#             return None

#         sum = i ** 3
#         if sum % 2 != 0:
#             total += sum

#     return total



# class List:
#     def remove_(self, integer_list, values_list):
#         result = []

#         for num in integer_list:
#             if num not in values_list:
#                 result.append(num)

#         return result



# def last_survivor(letters, coords): 
#     for i in coords:
#         letters = letters[:i] + letters[i+1:]
#     return letters


# def solve(s):
#     vowels = "aeiou"
#     count = 0
#     res = 0

#     for i in s:
#         if i in vowels:
#             count += 1
#             if count > res:
#                 res = count
#         else:
#             count = 0

#     return res



# def is_nice(arr):
#     if not arr:
#         return False

#     for n in arr:
#         if (n - 1 not in arr) and (n + 1 not in arr):
#             return False

#     return True