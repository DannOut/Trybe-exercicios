from pymongo import MongoClient


category = input("Escolha uma categoria: ")
with MongoClient() as client:
    db = client.library
    for book in db.books.find({"categories": category}, projection=["title"]):
        if book["categories"]:
            id = db.books.insert_one({category}).inserted_id
            print(id)
