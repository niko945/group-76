lst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


print(lst[0:5])


print(lst[7:10])


print(lst[3:8])



lst2 = list(range(1, 16))


print(lst2[:-9])


print(lst2[-10:])


print(lst2[-8:])   



word = 'თვითმფრინავი'
print(word[-4:])   # ნავი



word2 = 'Programmer'
print(word2[0:3])  
print(word2[:-8])   



days = ['ორშაბათი', 'სამშაბათი', 'ოთხშაბათი', 'ხუთშაბათი', 'პარასკევი', 'შაბათი', 'კვირა']


print(days[0:5])


print(days[:-2])


print(days[5:])

print(days[-2:])



sentence = 'Python slicing is very powerful'
words = sentence.split()

print(words[0])
print(words[1])
print(words[-1])
