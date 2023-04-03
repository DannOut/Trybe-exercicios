from abc import ABC, abstractmethod


class PngInterface(ABC):
    @abstractmethod
    def draw(self):
        raise NotImplementedError


class PngImage(PngInterface):
    def __init__(self, png_path):
        self.png_path = png_path
        self.format = "raster"

    def draw(self):
        print(f"Drawing PNG {self.png_path} with {self.format}")


class SvgImage:
    def __init__(self, svg_path):
        self.svg_path = svg_path
        self.format = "vector"

    def get_image(self):
        return f"SVG {self.svg_path} with {self.format}"


class AdapterSvg(PngInterface):
    def __init__(self, svg):
        self._svg = svg

    def draw(self):
        return self._svg.get_image()


teste = SvgImage("naruto")
print(teste.get_image())

teste2 = PngImage("sasuke").draw()
print(teste2)

teste3 = AdapterSvg(SvgImage("sasuke")).draw()
print(teste3)
