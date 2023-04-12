from selenium import webdriver
from selenium.webdriver.common.by import By

firefox = webdriver.Firefox()

url_base = "https://quotes.toscrape.com/"

response = firefox.get(url_base)

first_quote = firefox.find_element(By.CLASS_NAME, "quote")

print(first_quote.text)
