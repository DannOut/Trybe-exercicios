import requests
import parsel

URL_BASE = "http://books.toscrape.com/catalogue/"
response = requests.get(URL_BASE + "the-grand-design_405/index.html")
selector = parsel.Selector(response.text)

title = selector.css("h1::text").get()

price = selector.css(".product_main > .price_color::text").re_first(
    r"\d*\.\d{2}"
)

description = selector.css("#product_description ~ p::text").get()

cover = URL_BASE + str(selector.css("#product_gallery img::attr(src)").get())
in_stock = selector.css("p.instock::text").re_first(r"\d")
print(title, price, description, in_stock,  sep=",")
