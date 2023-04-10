from pymongo import MongoClient

client = MongoClient()
# o banco de dados catalogue será criado se não existir
db = client.catalogue
# a coleção books será criada se não existir
documents = [
    {
        "title": "A Light in the Attic",
    },
    {
        "title": "Tipping the Velvet",
    },
    {
        "title": "Soumission",
    },
]
documento_id = db.books.insert_one(documents).inserted_id
print(documento_id)
client.close()
