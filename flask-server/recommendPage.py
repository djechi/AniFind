from flask import Blueprint, request
import requests

recommendBP = Blueprint("recommendBP", __name__)
restAPI = "https://api.jikan.moe/v4/"

@recommendBP.route("/recommendations", methods=["GET"])
def recommendedAnime():
    anime_id = request.args.get("anime_id", "")
    urlRecommended = f"{restAPI}anime/{anime_id}/recommendations"
    return requests.get(urlRecommended).json()

@recommendBP.route("/suggestions", methods=["GET"])
def suggestionsAnime():
    query = request.args.get("query", "")
    urlSuggestions = f"{restAPI}anime?q={query}"
    return requests.get(urlSuggestions).json()