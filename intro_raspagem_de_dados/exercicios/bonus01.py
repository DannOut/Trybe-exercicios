import requests
import parsel


BASE_URL = "https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"
response = requests.get(BASE_URL).text

selector = parsel.Selector(text=response)

flags_url = selector.css("a.image img::attr(src)").getall()

for img_url in flags_url:
    print("IMG_URL ->" + img_url)
    filename = img_url.split('/')[-1]
    print("FILENAME ->" + filename)
    # image_content = requests.get('https:' + img_url).content
    # with open("./country_flags/" + filename, 'wb') as file:
    #     file.write(image_content)
