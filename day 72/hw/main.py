# def is_isogram(string):
#     string = string.lower()
#     return len(string) == len(set(string))


def well(x):
    good_count = x.count("good")

    if good_count == 0:
        return "Fail!"
    elif good_count <= 2:
        return "Publish!"
    else:
        return "I smell a series!"


# def sum_digits(number):
#     total = 0
#     for i in str(abs(number)):
#         total += int(i)
#     return total


