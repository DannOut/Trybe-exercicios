from abc import ABC, abstractmethod


class Alarme:
    def __init__(self):
        self.__rotinas = []

    def adicionar_rotinas(self, rotina):
        self.__rotinas.append(rotina)

    def acionar_todas_rotinas(self):
        for rotina in self.__rotinas:
            rotina.acionar()

    def despertar(self):
        print("Som do alarme!")
        self.acionar_todas_rotinas()


# interface observer
class Acionador(ABC):
    @abstractmethod
    def acionar(self):
        raise NotImplementedError


class AcionarLuzes(Acionador):
    def __init__(self, alarme):
        self._alarme = alarme
        self._alarme.adicionar_rotinas(self)

    def acionar(self):
        print("Acendendo as Luzes")


class AcionadorCafeteira(Acionador):
    def __init__(self, alarme):
        self._alarme = alarme
        self._alarme.adicionar_rotinas(self)

    def acionar(self):
        print("Preparando Café")


class AcionadorComputador(Acionador):
    def __init__(self, alarme):
        self._alarme = alarme
        self._alarme.adicionar_rotinas(self)

    def acionar(self):
        print("Ligando PC")


if __name__ == "__main__":
    alarme = Alarme()
    AcionarLuzes(alarme)
    AcionadorCafeteira(alarme)
    AcionadorComputador(alarme)

    alarme.despertar()
