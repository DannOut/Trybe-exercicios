class Ventilador:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.__cor = cor
        self.__potencia = potencia
        self.__tensao = tensao

    def cor(self):
        return self.__cor


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.ventilador = None

    def comprar_ventilador(self, ventilador):
        if ventilador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= ventilador.preco
            self.ventilador = ventilador

    def __str__(self) -> str:
        if self.ventilador:
            return f"{ self.nome } - possui um ventilador"
        return f"{ self.nome } - não possui um ventilador"


ventilador_potente = Ventilador("preto", potencia=250, tensao=220, preco=100)
comprador = Pessoa(nome="Daniel", saldo_na_conta=500)
comprador.comprar_ventilador(ventilador_potente)

comprador2 = Pessoa("Eduarda", 50)

print(comprador)
print(comprador2)
