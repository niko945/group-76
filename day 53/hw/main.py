# words = ["giorgi", "GOA", "nika", "Nino", "game"]
# result = []

# for word in words:
#     if word.lower() and word[0] == "g":
#         result.append("Goga")
#     elif word.upper() or word[0] == "N":
#         result.append("Nika")
#     else:
#         result.append("ლიდერი")

# print(result)

# numbers = [1, 2, 3, 4, 5, 6]
# result = []

# i = 0
# while i < len(numbers):
#     if numbers[i] % 2 == 0 or i % 2 == 0:
#         result.append(numbers[i] ** 2)
#     else:
#         result.append(numbers[i] * 2)
#     i += 1

# print(result)

# words = ["Giorgi", "NIKA", "Luka", "ALEXANDER", "Tina"]
# new_list = []

# i = 0
# while i < len(words):
#     word = words[i]
#     if len(word) > 6 or word.upper():
#         new_list.append(word.lower())
#     else:
#         new_list.append(word * 2)
#     i += 1

# print(new_list)

numbers = "0123456789"
result_for = []

for i in range(len(numbers)):
    digit = int(numbers[i])
    if i % 2 == 0 or digit >= 7:
        result_for.append(digit)

print(result_for)
