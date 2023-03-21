def return_max_caractere(list):
    biggest_name = list[0]
    for name in list:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name
