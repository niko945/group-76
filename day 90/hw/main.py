# def most_frequent_item_count(collection):
#     num = 0
    
#     for i in collection:
#         count = collection.count(i)
        
#         if count > num:
#             num = count

#     return num


# def has_unique_chars(string):
#     count = []
    
#     for i in string:
#         if i in count:
#             return False
#         count.append(i)
#     return True


# def pairs(arr):
#     result = 0
    
#     for i in range(len(arr)//2):
#         a = arr[i*2]
#         b = arr[i*2+1]
        
#         if a + 1 == b or a - 1 == b:
#             result += 1
    
#     return result


# def sum_of_minimums(numbers):
#     total= 0
    
#     for i in numbers:
#         total += min(i)
        
#     return total


