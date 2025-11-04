www = input("შემოიტანეთ ტექსტი: ")
for sss in www:
    if sss == 'e' or sss == 'E':
        break
    print(sss, end='')



lll = input("რამე თქვი: ")
if 'bad' in lll:
    print("ცუდი სიტყვა!")
else:
    print("კარგი სიტყვა")


xxx = input("შემოიტანეთ ტექსტი: ")
for aaa in xxx:
    if aaa != ' ':
        print(aaa, end='')

ttt = input("შემოიტანეთ წინადადება: ")
lool = "aeiouAEIOU"
for ddd in ttt:
    if ddd not in lool:
        print(ddd, end='')


aq = int(input("შემოიტანეთ პირველი რიცხვი: "))
iq = int(input("შემოიტანეთ მეორე რიცხვი: "))
for i in range(aq, iq+1):
    if i % 15 == 0:
        print(i)
        break


while True:
    num = input("თქვენი შეტყობინება: ")
    if num == "python is best":
        break
    print("you should learn python")




