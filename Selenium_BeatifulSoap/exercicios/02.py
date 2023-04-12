from selenium import webdriver
from selenium.webdriver.common.by import By

options = webdriver.FirefoxOptions()
# options.add_argument("-headless")
firefox = webdriver.Firefox(options=options)
# firefox.implicitly_wait(2)


def retrieve_cards(url):
    card_name = dict()
    all_cards = []
    firefox.get(url)
    for card in firefox.find_elements(By.CLASS_NAME, "simple-card"):
        card_name["name"] = card.find_element(
            By.CLASS_NAME, "cardname"
        ).get_attribute("innerHTML")
        print(card_name)
        all_cards.append(card_name)
    return all_cards


retrieve_cards("https://www.google.com")
