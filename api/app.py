import json
from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
import urllib.parse

app = Flask(__name__, static_folder="../build", static_url_path="/")
CORS(app)


headers = {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAKEqlAEAAAAAY3hQj7IzoFuacC7s%2FdQy1bRFU3c%3DknJZmbrFQSh7CEr9r6dZeJ6LdREU3b4jFXfEGAueadLUX3e6YB' }
twitter_search_url="https://api.twitter.com/1.1/search/tweets.json";

# localhost:8000
@app.route('/', defaults={'path':''})
@app.route("/<string:path>")
@app.route("/<path:path>")
def index(path):
    return app.send_static_file('index.html')

@app.route('/api/get_tweet_by_search')
def get_tweet():
    user_input = request.args.get('search', None)
    result_count = request.args.get('count', None)
    url_encoded_search = urllib.parse.quote(user_input)
    params = {'q': url_encoded_search, 'result_type': 'popular', 'count': result_count}
    twitter_request = requests.get(twitter_search_url, headers=headers, params=params)

    tweet_results_dictionary = json.loads(twitter_request.content.decode('utf-8'))['statuses']


    return tweet_results_dictionary

