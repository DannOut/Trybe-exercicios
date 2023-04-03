from abc import ABC, abstractmethod
from collections.abc import Iterable, Iterator


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return "<%s de %s>" % (self.valor, self.naipe)


class Baralho(Iterable):
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self, estrategia):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]
        self._estrategia = estrategia

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return IteradorDoBaralho(self._cartas, self._estrategia)

    def __str__(self):
        return f"{[carta for carta in self]}"


class EstrategiaIteracao(ABC):
    posicao_inicial = 0

    @abstractmethod
    def proxima_carta(cls, index):
        raise NotImplementedError


class EstrategiaRegular(EstrategiaIteracao):
    posicao_inicial = 0

    @classmethod
    def proxima_carta(cls, index):
        return index + 1


class EstrategiaReversa(EstrategiaRegular):
    posicao_inicial = -1

    @classmethod
    def proxima_carta(cls, index):
        return index - 1


class IteradorDoBaralho(Iterator):
    def __init__(self, cartas, estrategia):
        self._cartas = cartas
        self._estrategia = estrategia
        self._position = self._estrategia.posicao_inicial

    def __next__(self):
        try:
            carta = self._cartas[self._position]
        except IndexError:
            raise StopIteration()
        else:
            self._position = self._estrategia.proxima_carta(self._position)
            return carta


baralho_regular = Baralho(EstrategiaRegular())

baralho_inverso = Baralho(EstrategiaReversa())

print(baralho_regular)
