import time
import requests
import urllib.request
TESTING_MODE = True
APITOKEN = 'H0lFL53LTQCutbCS1ZAqeF9eknV2l8BcVGzlYYTZjEIc5U3p46Yg5+j204swV7rjNP7TEbaWWMY=' # Your API Token

# Download the photo of the person you want to find
urllib.request.urlretrieve('https://www.indiewire.com/wp-content/uploads/2018/01/daniel-craig.jpg?w=300', "daniel.jpg")
image_file = 'daniel.jpg' 

def search_by_face(image_file):
    if TESTING_MODE:
        print('** TESTING MODE search, results are bad, but credits are NOT deducted **')

    site='https://facecheck.id'
    headers = {'accept': 'application/json', 'Authorization': APITOKEN}
    files = {'images': open(image_file, 'rb'), 'id_search': None}
    response = requests.post(site+'/api/upload_pic', headers=headers, files=files).json()

    if response['error']:
        return f"{response['error']} ({response['code']})", None

    id_search = response['id_search']
    print(response['message'] + ' id_search='+id_search)
    json_data = {'id_search': id_search, 'with_progress': True, 'status_only': False, 'demo': TESTING_MODE}

    while True:
        response = requests.post(site+'/api/search', headers=headers, json=json_data).json()
        if response['error']:
            return f"{response['error']} ({response['code']})", None
        if response['output']:
            return None, response['output']['items']
        print(f'{response["message"]} progress: {response["progress"]}%')
        time.sleep(1)


# Search the Internet by face
error, urls_images = search_by_face(image_file)

if urls_images:
    for im in urls_images:      # Iterate search results
        score = im['score']     # 0 to 100 score how well the face is matching found image
        url = im['url']         # url to webpage where the person was found
        image_base64 = im['base64']     # thumbnail image encoded as base64 string
        print(f"{score} {url} {image_base64[:32]}...")
else:
    print(error)