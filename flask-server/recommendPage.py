from flask import Blueprint
import requests

recommendBP = Blueprint("recommendBP",__name__)
restAPI = "https://api.jikan.moe/v4/"

def recommendedAnime():
    urlRecommended = restAPI + "recommendations/anime"
    return requests.get(urlRecommended).json()

@recommendBP.route("/recommend", methods=["GET"])
def recommendPage():
    recommendedAnimeData = recommendedAnime()

    return {
        "recommendations": recommendedAnimeData["data"],
    }