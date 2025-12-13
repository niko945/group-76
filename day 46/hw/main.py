nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

to_remove = []

for i in range(len(nums)):
    if nums[i] % 2 == 0 or i % 2 == 1:
        to_remove.append(nums[i])

for x in to_remove:
    nums.remove(x)

print(nums)


words = ["sun", "moon", "sky"]

copy_words = words.()

for w in copy_words:
    words.append(w) 

print(words)


str_list = ["apple", "banana"]
num_list = [10, 25, 30, 55, 45, 5]

for n in num_list:
    if 20 < n < 50:
        str_list.append(str(n))

print(str_list)



