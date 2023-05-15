import pandas as pd

closest_friends = {
    "Amigos": ["Gabriel", "Gustavo", "Filipinho"],
    "Comidas": ["Tudo", "Pizza", "Churrasco"],
    "Sobremesa": ["Tudo", "Sorvete", "Torta"]
}

print(pd.DataFrame(closest_friends))
