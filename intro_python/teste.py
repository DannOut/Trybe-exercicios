restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

# filtered_restaurants = []
# min_rating = 3.0
# for restaurant in restaurants:
#     if restaurant["nota"] > min_rating:
#         filtered_restaurants.append(restaurant)
# print(filtered_restaurants)

# for index in range(5):
#     print(index)

# min_rating = 3.0
# filtered_restaurants = [
#     restaurant
#     for restaurant in restaurants
#     if restaurant['nota'] > min_rating
# ]

# names_list = ['Duda', 'Rafa', 'Cris', 'Yuri']
# new_names_list = [name for name in names_list if 'a' in name]

# # Aqui o for percorre cada nome em
# # "names_list", verifica se existe a letra "a" nele,
# # o adiciona à variável "name", então gera nossa nova lista "new_names_list"
# print(new_names_list)

# # Saída
# # ['Duda', 'Rafa']

# numeros = [x+x for x in range(11)]
# print(numeros)
# # 0+0=0 //1+1=2 //2+2=4 //3+3=6...
# quadrados = [x*x for x in range(11)]
# # 0*0=0 //1*1=1 //2*2=4 //3*3=9...
# print(quadrados)

# n = 10
# last, next = 0, 1
# while last < n:
#     print(last)
#     last, next = next, last + next

# naruto, desenho = 'shippuden', 'avatar'
# print(naruto)
# print(desenho)

# languages = ['Python', 'java', 'javaScript']
# enumerate_prime = enumerate(languages)
# print(enumerate_prime)

# # converte um objeto enumerate em uma lista
# print(list(enumerate_prime))
# # Saída: [(0, 'Python'), (1, 'Java'), (2, 'JavaScript')]

# for index, language in enumerate(['Python', 'Java']):
#     print(f'{index} - {language}')

# number = 5
# counter = 1
# result = 1

# while counter <= number:
#     result = result * counter
#     counter += 1
# print(result)

# number = 5
# # print(list(range(5)))
# result = 1
# for factor in range(1, number+1):
#     result *= factor
# print(result)

# ratings = [6, 8, 5, 9, 10]
# new_ratings = []

# for rating in ratings:
#     new_ratings.append(rating * 10)

# print(new_ratings)

# ratings = [6, 8, 5, 9, 10]
# # new_ratings = [10 * rating for rating in ratings]
# # print(new_ratings)
# for rating in ratings:
#     if (rating % 3) == 0:
#         print(f"{rating} é multiplo de 3")


# def imc(peso, altura):
#     return peso / (altura / 100) ** 2


# print(imc(110, 1.73))


# def soma(x, y):
#     return x + y


# total = soma(2, 2)
# print(total)


# def concat(*strings):
#     # Equivalente a um ", ".join(strings),que concatena
#     # os elementos de um iterável em uma string utilizando um separador
#     # Nesse caso a string resultante estaria separada por vírgula
#     final_string = ""
#     for string in strings:
#         final_string += string
#         if not string == strings[-1]:
#             final_string += ", "
#     return final_string


# # pode ser chamado com 2 parâmetros
# concat("Carlos", "Cristina")  # saída: "Carlos, Cristina"

# # pode ser chamado com um número n de parâmetros
# concat("Carlos", "Cristina", "Maria")  # saída: "Carlos, Cristina, Maria"

# # dict é uma função que já vem embutida no python
# dict(
#     nome="Felipe", sobrenome="Silva", idade=25
# )  # cria um dicionário utilizando as chaves passadas

# dict(
#     nome="Ana", sobrenome="Souza", idade=21, turma=1
# )  # o número de parâmetros passados para a função pode variar


def quadrado(n):
    """Recebe um número n, retorna o quadrado de n"""  # Literal de string
    return n**2


print(quadrado.__doc__)
# Saída
# Recebe um número n, retorna o quadrado de n
