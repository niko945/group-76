def solve(arr):
    result = []
    
    for i in arr:
        if i not in result:
            result.append(i)
        else:
            result.remove(i)
            result.append(i)
            
    return result

def tail_swap(strings):
    first = strings[0].split(":")
    second = strings[1].split(":")
    
    return [
        first[0] + ":" + second[1],
        second[0] + ":" + first[1]]