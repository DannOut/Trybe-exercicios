def recursive_countdown(n):
    if n == 0:  # caso base
        print("FIM!")
    else:
        print(n)
        recursive_countdown(n - 1)  # caso recursivo


def iterative_countdown(n):
    while n > 0:
        print(n)
        n = n - 1
    print("FIM")


recursive_countdown(10)
iterative_countdown(10)
