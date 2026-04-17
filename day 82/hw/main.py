def capitalize(s):
    even = ""
    odd = ""
    
    for i in range(len(s)):
        if i % 2 == 0:
            even += s[i].upper()
            odd += s[i]
        else:
            even += s[i]
            odd += s[i].upper()
    
    return [even, odd]


def reverse_words(text):
    result = ""
    word = ""
    
    for i in text:
        if i != " ":
            word = i + word 
        else:
            result += word + " "
            word = ""
    
    result += word
    return result

