import csv


def read(path: str):
    if not path.endswith(".csv"):
        raise ValueError("Invalid Format!")
    with open(path) as file:
        csv_data_to_read = list(
            csv.DictReader(file, delimiter=",", quotechar='"')
        )
        return csv_data_to_read


def get_unique_job_types(path: str):
    job_list = read(path)
    list_unique_jobs = []
    for job in job_list:
        if job["job_type"] not in list_unique_jobs:
            list_unique_jobs.append(job["job_type"])
    return list_unique_jobs


print(get_unique_job_types("./graduacao_unb.csv"))
