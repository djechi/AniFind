from flask import Blueprint, request, requests

recommendBP = Blueprint("recommendBP", __name__)
restAPI = "https://api.jikan.moe/v4/"

def recommendedAnime():
    urlRecommended = restAPI + "recommendations/anime"
    return requests.get(urlRecommended).json()

def searchAnime(query):
    urlSearch = f"{restAPI}anime?q={query}"
    return requests.get(urlSearch).json()

@recommendBP.route("/recommend", methods=["GET"])
def recommendPage():
    recommendedAnimeData = recommendedAnime()
    query = request.args.get("q")
    searchResults = searchAnime(query)["data"]

    return {
        "Recommendations": recommendedAnimeData["data"],
        "Search Result": searchResults
    }
