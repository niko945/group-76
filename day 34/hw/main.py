# cities = ["Tbilisi", "Batumi", "Zugdidi", "kutaisi", "kaspi", "marneuli", "telavi"]
# for city in cities:
#     if len(city) > 6:
#         print(city)


# vvv = ["nixkesaisbettertheneveryone", "apple", "banana", "juice", "watermelon", "revolution"]
# for word in vvv:
#     if len(word) % 15 == 0:
#         print(word)


# num = [1, 3, 5, 7, 9, 17, 19]
# count = 0
# for numv in num:
#     count += 1
# print("რიცხვების რაოდენობა:", count)

# ooo = ["apple", "grape", "orange", "melon", "kiwi", "water"]
# for word in ooo:
#     if len(word) == 5:
#         print(word)

# male = input("შეიყვანეთ წინადადება: ")

# iii = 0
# fff = 0

# for char in male:
#     iii += 1
#     if char.lower() == 'a':
#         a_count += 1

# print(f"წინადადებაში {iii} სიმბოლოა.")
# print(f"წინადადებაში 'a' ან 'A' {fff} ჯერ გვხვდება.")


lis = ["apple", "banana", "grapefruit", "kiwi", "watermelon"]
hhh = ""

for string in lis:
    if len(string) > len(hhh):
        hhh = string

print(f"ყველაზე გრძელი სტრინგი: {hhh}")
