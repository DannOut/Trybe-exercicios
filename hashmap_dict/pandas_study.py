import pandas as panda

dicionario_de_notas = {
    "nome": ["Maria", "João", "Fernanda", "Túlio"],
    "primeira_nota": [9, 8, 7, 8],
    "segunda_nota": [8, 7, 9, 3],
}

meu_primeiro_dataframe = panda.DataFrame(dicionario_de_notas)

# print(meu_primeiro_dataframe)

meu_primeiro_dataframe["media"] = (
    meu_primeiro_dataframe["primeira_nota"]
    + meu_primeiro_dataframe["segunda_nota"]
) / 2

print(meu_primeiro_dataframe)


def calcula_situacao(media):
    return "Aprovado" if media > 7 else "Reprovado"


meu_primeiro_dataframe["Situação"] = meu_primeiro_dataframe['media'].apply(
    calcula_situacao
)

print(meu_primeiro_dataframe)
