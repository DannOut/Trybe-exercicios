from Q01 import fizz_buzz_converter


def test_is_Fizz_when_divisible_per_3():
    value = fizz_buzz_converter(3) == [1, 2, "Fizz"]
    assert value is True


def test_is_buzz_when_divisible_per_5():
    value = fizz_buzz_converter(5)[-1] == "Buzz"
    assert value is True


def test_is_buzz_when_divisible_per_3_and_5():
    value = fizz_buzz_converter(15)[-1] == "FizzBuzz"
    assert value is True


def test_fizzbuzz_should_return_list_of_numbers():
    assert fizz_buzz_converter(2) == [1, 2]
