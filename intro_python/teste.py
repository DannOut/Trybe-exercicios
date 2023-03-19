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

languages = ['Python', 'java', 'javaScript']
# enumerate_prime = enumerate(languages)
# print(enumerate_prime)

# # converte um objeto enumerate em uma lista
# print(list(enumerate_prime))
# # Saída: [(0, 'Python'), (1, 'Java'), (2, 'JavaScript')]

for index, language in enumerate(['Python', 'Java']):
    print(f'{index} - {language}')
