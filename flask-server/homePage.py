from flask import Blueprint
import requests

homeBP = Blueprint("homeBluePrint",__name__)
restAPI = "https://api.jikan.moe/v4/"

def trendingAnime():
    urlTrending = restAPI + "top/anime?filter=airing"
    return requests.get(urlTrending).json()

def ratingsAnime():
    anime_id = 21
    urlRating = f"{restAPI}anime/{anime_id}/statistics"
    return requests.get(urlRating).json()

@homeBP.route("/home")
def homePage():
    trendingData = trendingAnime()
    animeData = ratingsAnime()

    return {
        "trending": trendingData["data"],
        "data": animeData["data"]
    }