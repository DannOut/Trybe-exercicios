def fizz_buzz_converter(number: int):
    fizz_buzz_final = []
    for number in range(1, number + 1):
        if number % 15 == 0:
            fizz_buzz_final.append("FizzBuzz")
        elif number % 3 == 0:
            fizz_buzz_final.append("Fizz")
        elif number % 5 == 0:
            fizz_buzz_final.append("Buzz")
        else:
            fizz_buzz_final.append(number)
    return fizz_buzz_final


print(fizz_buzz_converter(3))
