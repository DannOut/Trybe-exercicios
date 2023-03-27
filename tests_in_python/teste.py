def pesquisa_binaria(lista, item):
    low_value = 0
    higher_value = len(lista) - 1

    while low_value <= higher_value:
        middle = (low_value - higher_value) / 2
        value = lista[middle]
        if value == item:
            return value
        elif value > item:
            higher_value = middle - 1
        else:
            low_value = middle + 1
