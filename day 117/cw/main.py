def number(lines):
    lst = []
    for i in range(len(lines)):
        lst.append(str(i + 1) + ": " + lines[i])
    return lst
        

def in_asc_order(arr): 
    if len(arr) == 0 or len(arr) == 1:
        return True
    return arr == sorted(arr)