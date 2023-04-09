from parsel import Selector
import requests

URL_BASE = "http://books.toscrape.com/catalogue/"
next_page_url = "page-1.html"

while next_page_url:
    response = requests.get(URL_BASE + next_page_url)
    selector = Selector(text=response.text)

    for book in selector.css(".product_pod"):
        book_title = book.css("h3 a::attr(title)").get()
        book_price = book.css("p.price_color::text").get()
        formatted_string = f"{book_title}---{book_price}".replace("Â", "")

        print(formatted_string)

    next_page_url = selector.css(".next a::attr(href)").get()
