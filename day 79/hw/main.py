def first_non_consecutive(arr):
    for i in range(1, len(arr)):
        if arr[i] != arr[i - 1] + 1:
            return arr[i]
    return


def add_length(str_):
    result = []
    for i in str_.split():
        result.append(i+ " " +str(len(i)))
    return result


def reverse_list(l):
    return l[::-1]


def human_years_cat_years_dog_years(human_years):
    if human_years == 1:
        return [1, 15, 15]
    elif human_years == 2:
        return [2, 24, 24]
    else:
        cat_years = 24 + (human_years - 2) * 4
        dog_years = 24 + (human_years - 2) * 5
        return [human_years, cat_years, dog_years]
    
def str_count(strng, letter):
    return strng.count(letter)