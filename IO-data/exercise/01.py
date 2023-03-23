def inverted_name(name: str):
    for removed_letters in range(len(name)):
        # print(removed_letters) # 0 1 2 3 4 5
        # print(range(len(name)))
        # print(range(len(name) - removed_letters))
        for index in range(len(name) - removed_letters):
            print(name[index], end='')
        print()


if __name__ == '__main__':
    name = input("Digite um nome: ")
    inverted_name(name)
