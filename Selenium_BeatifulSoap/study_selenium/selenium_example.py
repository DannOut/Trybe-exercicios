# importação do webdriver, que é o que possibilita a implementação para todos
# os principais navegadores da web
# from time import sleep
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By


# criação de uma instância de navegador utilizando o Firefox
firefox = webdriver.Firefox()

# requisições para essa instância criada utilizando o método `get`
response = firefox.get("https://www.google.com.br/")

search_input = firefox.find_element("name", "q")
# OU
search_input = firefox.find_element(By.NAME, "q")

search_input.send_keys("marvel snap")
search_input.send_keys(Keys.ENTER)
