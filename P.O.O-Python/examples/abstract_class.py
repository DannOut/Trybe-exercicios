from abc import ABC, abstractmethod


class Database(ABC):
    @abstractmethod
    def execute(self, query):
        raise NotImplementedError


class MongoDatabase(Database):
    def execute(self, query):
        print(f"executando query '{query}' no mongo")


class MySQLDatabase(Database):
    def execute(self, query):
        print(f"executando query '{query}' no mysql")
