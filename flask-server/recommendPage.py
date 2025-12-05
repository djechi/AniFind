from flask import Blueprint, request, jsonify
import requests

recommendBP = Blueprint("recommendBP", __name__)
restAPI = "https://api.jikan.moe/v4/"

def safe_get(url):
    try:
        r = requests.get(url, timeout=5)
        r.raise_for_status()
        return r.json()
    except Exception as e:
        return {"error": str(e), "data": []}

@recommendBP.route("/recommendations", methods=["GET"])
def recommendedAnime():
    anime_id = request.args.get("anime_id")
    if not anime_id:
        return jsonify({"error": "anime_id is required", "data": []})
    url = f"{restAPI}anime/{anime_id}/recommendations"
    data = safe_get(url)
    return jsonify({
        "recommendations": data.get("data", [])[:10]
    })

@recommendBP.route("/suggestions", methods=["GET"])
def suggestionsAnime():
    query = request.args.get("query")
    if not query:
        return jsonify({"error": "query is required", "data": []})
    url = f"{restAPI}anime?q={query}"
    data = safe_get(url)
    return jsonify({
        "suggestions": data.get("data", [])[:8]
    })
