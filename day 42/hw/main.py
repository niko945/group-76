# # 1) შექმენი სია ხილებზე და დაამატე მასში კიდევ 2 ხილი extend() ფუნქციით.
# fruits = ["apple", "banana"]
# fruits.extend(["orange", "mango"])
# print(fruits)
# # 2) შექმენი სია numbers და დაამატე მასში [40, 50] extend()-ით.
# numbers = [10, 20, 30]
# numbers.extend([40, 50])
# print(numbers)
# # 3) შექმენი სია names და შეაბრუნე reverse()-ით.
# names = ["saba", "goga", "nino"]
# names.reverse()
# print(names)
# # 4) შექმენი სია სახელად nums და დათვალე რამდენი ცალი 5 არის მასში count()-ით.
# nums = [5, 2, 5, 3, 5]
# print(nums.count(5))

# # 5) შექმენი letters = ["a","b","a","c"] და დაბეჭდე რამდენი ცალი "a" არის ჩვენს სიაში.
# letters = ["a", "b", "a", "c"]
# print(letters.count("a"))

# # 6) შექმენი სია სახელად names და იპოვე "saba"-ს ინდექსი index()-ით.
# names = ["luka", "saba", "goga"]
# print(names.index("saba"))

# # 7) შექმენი list = ["red","green","blue"] და იპოვე რომელ ინდექსზე დგას "blue". გამოიყენე შესაბამისი ფუნქცია.
# lis = ["red", "green", "blue"]
# print(lis.index("blue"))

# # 8) შექმენი სია სახელად nums და დამატე მასში extend()-ით [7, 8, 9].
# nums = [1, 2, 3]
# nums.extend([7, 8, 9])
# print(nums)

# # 9) შექმენი სია სახელად foods და დააბრუნე შებრუნებული სია.
# foods = ["pizza", "burger", "cola"]
# foods.reverse()
# print(foods)

# # 10) შექმენი სია cities და იპოვე რომელ ინდექსზე დგას "tbilisi".
# cities = ["batumi", "tbilisi", "kutaisi"]
# print(cities.index("tbilisi"))

# # 11) შექმენი animals = ["cat","dog","cat","cow"] და დაითვალე ამ სიაში რამდენი "cat" არის.
# animals = ["cat", "dog", "cat", "cow"]
# print(animals.count("cat"))

# # 12)შექმენი სია fruits = ["apple", "banana"] და append ფუნქციით დაამატე "grape". დაბეჭდე სია.
# fruits = ["apple", "banana"]
# fruits.append("grape")
# print(fruits)

# # 13)შექმენი სია numbers = [1, 2, 3] და extend()-ით დაუმატე [4, 5]. დაბეჭდე სია.
# numbers = [1, 2, 3]
# numbers.extend([4, 5])
# print(numbers)

# # 14)შექმენი სია names = ["goga", "saba"] და insert()-ით ჩასვი "luka" პირველ ინდექსზე. დაბეჭდე სია.
# names = ["goga", "saba"]
# names.insert(1, "luka")
# print(names)

# # 15)შექმენი სია items = ["pen", "pencil", "eraser"] და pop()-ით წაშალე ბოლო ელემენტი; დაბეჭდე განახლებული სია.
# items = ["pen", "pencil", "eraser"]
# items.pop()
# print(items)

# # 16)შექმენი სია colors = ["red", "green", "blue"] და remove()-ით წაშალე "green". დაბეჭდე შედეგი.
# colors = ["red", "green", "blue"]
# colors.remove("green")
# print(colors)

# # 17)შექმენი სია foods = ["bread", "milk"]. შეამოწმე სიაში 2 ელემენტია თუ მეტი — თუ ორია, append()-ით დაამატე "cheese", შემდეგ დაბეჭდე სია, სხვა შემთხვევაში append()-ით დაამატე "meat" და დაბეჭდე სია.
# foods = ["bread", "milk"]

# if len(foods) == 2:
#     foods.append("cheese")
# else:
#     foods.append("meat")

# print(foods)

# # 18)შექმენი სია nums = [10, 20, 30]. მომხმარებელს შემოატანინე მთელი რიცხვი. თუ რიცხვი nums სიაშია, დაბეჭდე "Already in list", თუ არა — append()-ით დაამატე 40 და დაბეჭდე სია.
# nums = [10, 20, 30]
# i = int(input("Enter number: "))

# if i in nums:
#     print("Already in list")
# else:
#     nums.append(40)

# print(nums)

# # 19)შექმენი სია letters = ["a", "b", "c"]. მომხმარებელს შემოატანინე ასო, შემდეგ insert()-ით ჩასვი ის სიის შუაში (ცენტრალურ ინდექსზე). დაბეჭდე სია.
# letters = ["a", "b", "c"]
# char = input("Enter letter: ")

# mid = len(letters) // 2
# letters.insert(mid, char)
# print(letters)

# # 20)შექმენი სია values = [1, 2, 3, 4]. მომხმარებელს შემოატანინე ინდექსი. თუ ინდექსი სიის ფარგლებშია, pop()-ით ამოშალე შესაბამისი ელემენტი; თუ არა, დაბეჭდე "Index out of range". ბოლოს დაბეჭდე სია.
# values = [1, 2, 3, 4]
# loli = int(input("Enter index: "))

# if 0 <= loli < len(values):
#     values.pop(loli)
# else:
#     print("Index out of range")

# print(values)

# # 21)შექმენი სია pets = ["cat", "dog", "hamster"].  მომხმარებელს შემოატანინე შინაური ცხოველის სახელი. თუ იგი არის სიის შიგნით, remove()-ით ამოშალე და დაბეჭდე "Removed", თუ არა — დაბეჭდე "Not found" და სია უცვლელი დატოვე; საბოლოოდ დაბეჭდე სია.
# pets = ["cat", "dog", "hamster"]
# p = input("Enter pet name: ")

# if p in pets:
#     pets.remove(p)
#     print("Removed")
# else:
#     print("Not found")

# print(pets)

# # 22)შექმენი სია a = [5, 5, 7]. მომხმარებელს შემოატანინე რიცხვი. თუ რიცხვი არის სიის ელემენტი, დაბეჭდე რამდენჯერ არის სიაში - count() ფუნქციის გამოყენებით. სხვა შემთხვევაში append()-ით ჩასვი ის სიაში და დაბეჭდე სია.
# a = [5, 5, 7]
# i= int(input("Enter number: "))

# if i in a:
#     print(a.count(i))
# else:
#     a.append(i)
#     print(a)

# 23)შექმენი სია queue = ["first", "second"].  მომხმარებელს შემოატანინე ახალი ელემენტი და insert()-ით ჩასვი სიის დასაწყისში. შემდეგ if-ით შეამოწმე სიის სიგრძე — თუ უფრო დიდია 5-ზე, pop()-ით ამოშალე ბოლო ელემენტი; ბოლოს დაბეჭდე სია, თუ არ არის 5-ზე მეტი დაბეჭდე შებრუნებული სია.
# queue = ["first", "second"]
# item = input("Enter new element: ")

# queue.insert(0, item)

# if len(queue) > 5:
#     queue.pop()
#     print(queue)
# else:
#     queue.reverse()
#     print(queue)


# 24)შექმენი სია nums = [2, 4, 6].  მომხმარებელს შემოატანინე რიცხვი. თუ რიცხვი დადებულია, append()-ით დაამატე; თუ 0-ია ან ნაკლებია ნულზე, დაბეჭდე "Only positive allowed". ბოლოს დაბეჭდე სია.
# nums = [2, 4, 6]
# i = int(input("Enter number: "))

# if i > 0:
#     nums.append(i)
# else:
#     print("Only positive allowed")

# print(nums)

# 25) შექმენი სია mix = ["x", "y", "z"]. extend()-ით დაუმატე [1, 2, 3]. შემდეგ მომხმარებელს შემოატანინე ასო; თუ ეს ასო არის სიაში, remove()-ით წაშალე პირველად როცა შეგხვდება და დაბეჭდე "Removed", თუ არა — დაბეჭდე "No such element". ბოლოს დაბეჭდე სია.
# mix = ["x", "y", "z"]
# mix.extend([1, 2, 3])

# ch = input("Enter letter: ")

# if ch in mix:
#     mix.remove(ch)
#     print("Removed")
# else:
#     print("No such element")

# print(mix)
