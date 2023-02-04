import json
from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
import urllib.parse

app = Flask(__name__, static_folder="../build", static_url_path="/")
CORS(app)


headers = {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAKEqlAEAAAAAY3hQj7IzoFuacC7s%2FdQy1bRFU3c%3DknJZmbrFQSh7CEr9r6dZeJ6LdREU3b4jFXfEGAueadLUX3e6YB' }


# localhost:8000
@app.route('/', defaults={'path':''})
@app.route("/<string:path>")
@app.route("/<path:path>")
def index(path):
    return app.send_static_file('index.html')

@app.route('/api/find_tweets_by_content')
def get_tweet():
    tweet_search_url="https://api.twitter.com/1.1/search/tweets.json";
    user_input = request.args.get('search', None)
    result_count = request.args.get('count', None)
    
    params = {'q': user_input, 'count': result_count}
    twitter_tweet_request = requests.get(tweet_search_url, headers=headers, params=params)
    tweet_results_dictionary = json.loads(twitter_tweet_request.content.decode('utf-8'))['statuses']

    return tweet_results_dictionary

@app.route('/api/find_tweets_by_user')
def search_users():
    user_search_url="https://api.twitter.com/1.1/statuses/user_timeline.json"
    screen_name = request.args.get('search', None)
    result_count = request.args.get('count')
    params = {'screen_name': screen_name, 'count': result_count}

    twitter_user_request = requests.get(user_search_url, headers=headers, params=params)
    user_results_dictionary = json.loads(twitter_user_request.content.decode('utf-8'))
    
    return user_results_dictionary;






