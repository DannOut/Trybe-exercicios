print('Digite x numeros para ter a soma total')
print('Separe cada numero com uma espaço, ex. 1 2 3')
numbers = input('Digite os numeros: ')

numsArray = numbers.split(" ")
sum = 0

for num in numsArray:
    if not num.isdigit():
        print(f"Erro ao somar valores, {num} não é um dígito.")
    sum += int(num)

print(f'A soma total é: {sum}')
