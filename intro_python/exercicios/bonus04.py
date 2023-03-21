def fuel_price(fuel_type, liter_sold):
    if fuel_type == "A":
        if liter_sold > 20:
            return liter_sold * (1 - 0.05) * 1.90
        return liter_sold * (1 - 0.03) * 1.90
    if fuel_type == "G":
        if liter_sold > 20:
            return liter_sold * (1 - 0.06) * 2.50
        return liter_sold * (1 - 0.04) * 2.50


# def fuel_price(type, liters):
#     if type == "A":
#         price = 1.90
#         discount = 0.03
#         if liters > 20:
#             discount = 0.05
#     elif type == "G":
#         price = 2.50
#         discount = 0.04
#         if liters > 20:
#             discount = 0.06
#     total = price * liters
#     total -= total * discount
#     return total


teste = fuel_price("A", 24)
print(teste)
