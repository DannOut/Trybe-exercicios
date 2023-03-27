import pytest
from Q02 import convert_to_number


def test_ABC_should_convert_in_2():
    assert convert_to_number("ABC") == "222"


def test_DEF_should_convert_in_3():
    assert convert_to_number("DEF") == "333"


def test_GHI_should_convert_in_4():
    assert convert_to_number("GHI") == "444"


def test_JKL_should_convert_in_5():
    assert convert_to_number("JKL") == "555"


def test_other_numbers():
    assert convert_to_number("MPTW0") == "67890"


def test_error_with_invalid_length():
    value = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    print(len(value))
    with pytest.raises(ValueError, match="Expression with invalid length"):
        convert_to_number(value)


def test_error_with_invalid_character():
    with pytest.raises(ValueError):
        convert_to_number("A")


def test_expression_with_invalid_chars():
    with pytest.raises(ValueError):
        convert_to_number("I-****-MY_JOB")
