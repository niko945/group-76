# numbers = [1, 3, 5, 7, 9]
# new_numbers = []

# for num in numbers:
#     new_numbers.append(num * 2)

# print(new_numbers)


# names = ["შალვა", "საბა", "ლუკა", "დადუ"]

# index = int(input("შეიყვანე რიცხვი (ინდექსი): "))
# names.insert(index, "ნიკა")

# print(names)

# sentence = "Nika is programer"
# vowels = "aeiou"

# for letter in sentence:
#     if letter.lower() in vowels:
#         print(letter)


words = ["sew", "car", "fine", "type"]

for word in words[:]:
    if len(word) > 4 or words.index(word) % 2 == 1:
        words.remove(word)

print(words)


# numbers = [4, 8, 12, 16]

# sum_numbers = sum(numbers) 
# count = len(numbers)   
# average = sum_numbers / count

# print(average)