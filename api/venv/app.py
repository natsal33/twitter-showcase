import json
from flask import Flask, jsonify
# from flask_cors import CORS
import requests
import urllib.parse

app = Flask(__name__, static_folder="../build/", static_url_path="/")
# CORS(app)


headers = {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAKEqlAEAAAAAY3hQj7IzoFuacC7s%2FdQy1bRFU3c%3DknJZmbrFQSh7CEr9r6dZeJ6LdREU3b4jFXfEGAueadLUX3e6YB' }
twitter_search_url="https://api.twitter.com/1.1/search/tweets.json";


@app.route('/')
def index():
    return app.send_static_file('../../public/index.html')

@app.route('/api/get_tweet_by_search/<search_term>', methods=['GET'])
def get_tweet(search_term):
    url_encoded_search = urllib.parse.quote(search_term)
    params = {'q': url_encoded_search, 'result_type': 'popular', 'count': 10}
    twitter_request = requests.get(twitter_search_url, headers=headers, params=params)

    tweet_results_dictionary = json.loads(twitter_request.content.decode('utf-8'))['statuses']


    return tweet_results_dictionary

