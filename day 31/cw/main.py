# 1)შექმენით სია -->  ["ina" , "givi" , "nika" , "daviti" , "ia" , "lizi"] , 
# თქვენი დავალებაა რომ პირველი 2 ელემენტი ჩაანაცვლოთ შემდეგი სიით --> ["irina" , "milana" , "kira", "mate"] 
# //////////////// და ასევე სიის ბოლო ორი ელემენტი შეანაცვლე შემდეგი სიით --> ["gia" , "emzari" , "xvicha"] ამის 
# შემდეგ დაპრინტეთ საბოლოო სია


lis = ["ina", "givi", "nika", "daviti", "ia", "lizi"]

pirveli = ["irina", "milana", "kira", "mate"]
meore = ["gia", "emzari", "xvicha"]

lis[:2] = pirveli

lis[-2:] = meore
print(lis)


# 2)შექმენით ცვლადი და მომხმარებელს შემოატანინეთ რიცხვი,თუ 
# რიცხვი ლუწია დაუპრინტეთ "EVEN" შემდეგ შეამოწმეთ თუ რიცხცვი არის კენტი დაუპრინტეთ "Odd"

num = int(input("please enter ur number:  "))

if num % 2 == 0:
    print("EVEN")
else:
    print("ODD")


