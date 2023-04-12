import requests
from bs4 import BeautifulSoup

url = "https://marvelsnapzone.com/cards/"
page = requests.get(url)
html_content = page.text


soup = BeautifulSoup(html_content, "html.parser")


for tag in soup.find_all(True, class_='cardname'):
    print(tag)
