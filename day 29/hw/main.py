# level 29
# 1)მოცემულია სტრინგი "PythonProgramming".
# ამოიღე პირველი 6 სიმბოლო და დაბეჭდე გამოიყენეთ slicing

list = "PythonProgramming"
print(list[0:6])

# 2)მოცემულია სია numbers = [10, 20, 30, 40, 50, 60, 70].
# ამოიღე მხოლოდ შუა 3 ელემენტი და დაბეჭდე გამოიყენეთ slicing (მინუს ინდექსებითაც)

num = [10, 20, 30, 40, 50, 60, 70]
print(num[2:5])

# 3)მოცემულია სტრინგი "HelloWorld".
# დაბეჭდეთ Hello ტერმინალში slicing ის გამოყენებით (მინუს ინდექსებითაც)

string = "HelloWorld"
print(string[0:5])

# 3)მოცემულია სია letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'].
# დაბეჭდე ყოველ პირველი მესამე მეხუთე ელემენტები გამოიყენეთ indexing (მინუს ინდექსებითაც)

letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
print(letters[0], letters[2], letters[4])

# 4)მოცემულია სტრინგი "Information".
# ამოიღე "forma" ნაწყვეტი slicing-ით (მინუს ინდექსებითაც)

s = "Information"
print(s[2:7])

# 5)
# მოცემულია სტრინგი "abcdefghijklmno".
# შექმენი სამი სხვადასხვა სლაისი:

# პირველი შეიცავდეს მხოლოდ a დან d მდე ასოებს
# მეორე – შეიცავდეს j დან o მდე ასოებს
# მესამე – შეიცავდეს f დან j მდე ასოებს

str = "abcdefghijklmno"
print(str[0:4])
print(str[9:15])
print(str[5:10])

