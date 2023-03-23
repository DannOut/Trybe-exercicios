import random

MAX_ATTEMPTS = 3


def retrieve_words(file):
    # * strip remove todos os espaços sobrando no inicio e fim
    # * '    naruto    ' -> 'naruto'
    return [word.strip() for word in file]


def draw_secret_word(words):
    # escolhendo um nome no array de WORDS
    secret_word = random.choice(words)

    # a partir do nome escolhido estou embaralhando e transformando em string
    scrambled_word = "".join(random.sample(secret_word, len(secret_word)))

    # retorno a palavra escolhida e a palavra embaralhada
    return secret_word, scrambled_word


def collect_guesses():
    guesses = []
    for attempt in range(MAX_ATTEMPTS):
        guess = input("Guess the word: ")
        guesses.append(guess)
    return guesses


def check_game_result(secret_word, guesses):
    if secret_word in guesses:
        print(f"You win: {secret_word}")
    else:
        print(f"You lose: {secret_word}")


if __name__ == "__main__":
    with open("03_text_to_guess.txt") as file:
        WORDS = retrieve_words(file)
        secret_word, scrambled_word = draw_secret_word(WORDS)
        print(f"Scrambled word is {scrambled_word}")
        guesses = collect_guesses()
        check_game_result(secret_word, guesses)
