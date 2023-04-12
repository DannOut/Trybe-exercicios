import requests
from bs4 import BeautifulSoup

BASE_URL = "https://www.magazineluiza.com.br"
page = requests.get(BASE_URL)
html_content = page.text

soup = BeautifulSoup(html_content, "html.parser")

print(soup.prettify())
