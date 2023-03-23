file = open("arquivo.txt", mode="w")
# ao abrir um arquivo para escrita, um novo arquivo é
# criado mesmo que ele já exista, sobrescrevendo o antigo.


# Para escrevermos um conteúdo em um arquivo utilizamos a função write:
file = open("arquivo.txt", mode="w")
file.write("nome idade\n")
file.write("Maria 45\n")
file.write("Miguel 33\n")


# example 2
characters_file = open("meus-personagens-favoritos.txt", mode="w")

characters_file.write("Tio Patinhas\n")
characters_file.write("Neo\n")
characters_file.write("Homem Aranha\n")

print("Batman", file=characters_file)

more_characters = ["Dream\n", "Ash Ketchum\n"]

characters_file.writelines(more_characters)

characters_file.close()
