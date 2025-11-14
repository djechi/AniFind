from flask import Blueprint
import requests

homeBP = Blueprint("homeBluePrint",__name__)
restAPI = "https://api.jikan.moe/v4/"

def trendingAnime():
    urlTrending = restAPI + "top/anime?filter=airing"
    return requests.get(urlTrending).json()

@homeBP.route("/home")
def homePage():
    trendingData = trendingAnime()

    return {
        "trending": trendingData["data"]
    }