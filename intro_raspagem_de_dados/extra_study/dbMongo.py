import requests
from pymongo import MongoClient
from parsel import Selector
import time

URL_BASE = "https://marvelsnapzone.com/cards/"
NEXT_PAGE = "?page=2"


def testing_scrapping():
    with MongoClient() as client:
        while NEXT_PAGE:
            db = client.catalogue
            response = requests.get(URL_BASE)
            print(response)
            selector = Selector(text=response.text)
            print(selector.css("#cards").getall())
            for title in selector.css("a.chapter-feed__title"):
                # print(title)
                inserted_info = db.manga.insert_one({"title": title.text})
                print(inserted_info)
                time.sleep(5)
            break


testing_scrapping()
