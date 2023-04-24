def find_pairs(n: int):
    result = 0
    for number in range(1, n + 1):
        if number % 2 == 0:
            result += 1
    return result


print(find_pairs(10))


def find_pairs_recursive(n: int):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + find_pairs_recursive(n - 1)
    else:
        return find_pairs_recursive(n - 1)


print(find_pairs_recursive(10))
