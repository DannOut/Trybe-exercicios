import requests
from bs4 import BeautifulSoup

url = "https://quotes.toscrape.com"
page = requests.get(url)
html_content = page.text

# cria uma instância do objeto Beatiful Soup
# e usa o parser de HTML nativo do python
soup = BeautifulSoup(html_content, "html.parser")


# utiliza o método prettidy para melhorar a visualização do conteudo
print(soup.prettify())
