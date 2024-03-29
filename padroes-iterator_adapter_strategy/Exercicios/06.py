from abc import ABC, abstractmethod


class EstrategiaDeImposto(ABC):
    @abstractmethod
    def calcular(cls, valor):
        raise NotImplementedError


class INSS(EstrategiaDeImposto):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.1


class ICMS(EstrategiaDeImposto):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.06


class Orcamento:
    def __init__(self, valor):
        self.valor = valor

    def calcular_imposto(self, imposto):
        if imposto == "ISS":
            return self.__calcular_iss()
        elif imposto == "ICMS":
            return self.__calcular_icms()

    def __calcular_iss(self):
        return self.valor * 0.1

    def __calcular_icms(self):
        return self.valor * 0.06


