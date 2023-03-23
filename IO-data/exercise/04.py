import json
import csv


def retrieve_books(file):
    return json.load(file)


def count_books_by_categories(books):
    # print([book["categories"] for book in books])
    categories = {}
    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
    return categories


def calculate_percentage(dict_cat_books: dict, total_books: int):
    return [
        [category, f'{num_books / total_books:.2}']
        for category, num_books in dict_cat_books.items()
    ]
    # value = []
    # for category, num_books in dict_cat_books.items():
    #     value += [category, num_books / total_books]
    # print(value)
    # return value


def write_csv_report(file_out, header, file_in):
    writer = csv.writer(file_out)
    writer.writerow(header)
    writer.writerow(file_in)


if __name__ == "__main__":
    # retrieve books
    with open("04_books.json") as file:
        books = retrieve_books(file)

    # count by category
    book_count_by_cat = count_books_by_categories(books)

    # calculate percentage
    total_books = len(books)
    book_count_perc = calculate_percentage(book_count_by_cat, total_books)

    # write in CSV
    header = ["Categoria", "percentagem"]
    with open("report.csv", "w") as file:
        write_csv_report(file, header, book_count_perc)
