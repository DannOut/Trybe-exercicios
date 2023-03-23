# Escreva uma função chamada replace_pattern que recebe como argumentos uma
# string a ser substituída, uma string para substituí-la
# e os dois nomes dos arquivos (um que é nossa fonte e o outro o destino)

# A função deve ler o arquivo fonte e caso a string a ser substituída
# apareça em algum lugar, ela deve ser substituída pela segunda string.
# Para facilitar, o arquivo fonte é nomeado como poema.txt

# O resultado final deve ser escrito no segundo arquivo.


def replace_pattern(pattern, replace, source, dest):
    with open(source) as file_in, open(dest, mode="w") as file_out:
        for line in file_in:
            new_line = line.replace(pattern, replace)
            file_out.write(new_line)
