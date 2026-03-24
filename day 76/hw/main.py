def dont_give_me_five(start, end):
    count = 0
    for i in range(start, end + 1):
        if '5' not in str(i):
            count += 1
    return count


def number(bus_stops):
    people = 0
    for i in bus_stops:
        people += i[0]
        people -= i[1]
    return people