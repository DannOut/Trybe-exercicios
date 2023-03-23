import json
import random


def shot(pokemon):
    wrong_shot = True
    num_of_shot = 0

    while wrong_shot:
        num_of_shot += 1
        shot = input("Quem é esse pokemon? ")
        if shot == pokemon:
            print("Você acertou! Parabéns")
            break
        elif num_of_shot == len(pokemon):
            print("Você errou!")
            print('A resposta era: ', pokemon)
            break
        else:
            print("Dica: ", end="")
            for i in range(0, num_of_shot):
                print(pokemon[i], end="")
            print("")


if __name__ == "__main__":
    with open("pokemons.json") as file:
        pokemons = json.load(file)["results"]
        pokemon = random.choice(pokemons)
        pokemon_name = pokemon["name"]
    shot(pokemon_name)
