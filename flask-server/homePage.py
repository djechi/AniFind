from flask import Blueprint, jsonify
import requests

homeBP = Blueprint("homeBluePrint", __name__)
restAPI = "https://api.jikan.moe/v4/"

def safe_get(url):
    try:
        r = requests.get(url, timeout=5)
        r.raise_for_status()
        return r.json()
    except Exception as e:
        return {"error": str(e), "data": []}

def trendingAnime():
    return safe_get(restAPI + "top/anime?filter=airing")

def topRatingsAnime():
    return safe_get(restAPI + "top/anime")

@homeBP.route("/home", methods=["GET"])
def homePage():
    trendingData = trendingAnime()
    topRatedData = topRatingsAnime()

    return jsonify({
        "trending": trendingData.get("data", [])[:10],
        "rating": topRatedData.get("data", [])[:10]
    })
