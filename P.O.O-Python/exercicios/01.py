from dataclasses import dataclass


@dataclass
class TV:
    __volume = 50
    __canal = 1
    tamanho: str
    __ligada = False

    def aumentar_volume(self):
        if self.__volume >= 0 and self.__volume <= 99:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume >= 0 and self.__volume <= 99:
            self.__volume -= 1

    def modificar_canal(self, channel):
        if self.__canal >= 1 and self.__canal <= 99:
            self.__canal = channel
        else:
            raise ValueError

    def ligar_desligar(self):
        self.__ligada = not self.__ligada
