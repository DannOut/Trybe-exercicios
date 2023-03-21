def paint_costs(area):
    # cobertura da tinta = 1 litro para cada 3 metros quadrados
    # a tinta é vendida em latas de 18 litros
    # a lata custa 80 reais
    can_price = 80
    required_liters = area / 3  # pego quantos litros são necessários
    can_needed = required_liters / 18
    if required_liters % 18:
        can_needed += 1
    return required_liters, can_needed * can_price
