import requests

BASE_URL = "https://scrapethissite.com/pages/advanced/?gotcha=headers"

response = requests.get(
    BASE_URL,
    headers={"User-agent": "Mozilla", "Accept": "text/html"}
)
print(response)
assert 'bot detected' not in response.text


# response = requests.get(
#     "https://scrapethissite.com/pages/advanced/?gotcha=headers",
#     headers={"User-agent": "Mozilla", "Accept": "text/html"},
# )
# print(response)
# assert "bot detected" not in response.text
