from flask import Blueprint
import requests

homeBP = Blueprint("homeBluePrint",__name__)
restAPI = "https://api.jikan.moe/v4/"

def trendingAnime():
    urlTrending = restAPI + "top/anime?filter=airing"
    return requests.get(urlTrending).json()

def topRatingsAnime():
    urlRating = restAPI + "top/anime"
    return requests.get(urlRating).json()

@homeBP.route("/home", methods=["GET"])
def homePage():
    trendingData = trendingAnime()
    topRatedData = topRatingsAnime()

    return {
        "trending": trendingData["data"],
        "rating": topRatedData["data"]
    }