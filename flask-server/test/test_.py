import sys, os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from server import app
from unittest.mock import patch
import pytest


@pytest.fixture
def client():
    app.testing = True
    return app.test_client()

@patch("homePage.requests.get")
def test_home_page(mock_get, client):
    mock_get.return_value.json.side_effect = [
        {"data": [{"title": "Trending #1"}]},
        {"data": [{"title": "Top Rated #1"}]},
    ]

    response = client.get("/home")
    data = response.get_json()
    print(data)

    assert response.status_code == 200
    assert data["trending"][0]["title"] == "Trending #1"
    assert data["rating"][0]["title"] == "Top Rated #1"

    expected_urls = [
    "https://api.jikan.moe/v4/top/anime?filter=airing",
    "https://api.jikan.moe/v4/top/anime",
    ]

    actual_urls = [call.args[0] for call in mock_get.call_args_list]
    assert actual_urls == expected_urls


@patch("recommendPage.requests.get")
def test_recommendations(mock_get, client):
    mock_get.return_value.json.return_value = {
        "data": [{"title": "Recommend #1"}]
    }

    response = client.get("/recommendations?anime_id=1")
    data = response.get_json()
    print(data)

    assert response.status_code == 200
    assert data["data"][0]["title"] == "Recommend #1"
    mock_get.assert_called_once_with("https://api.jikan.moe/v4/anime/1/recommendations")

@patch("recommendPage.requests.get")
def test_suggestions(mock_get, client):
    mock_get.return_value.json.return_value = {
        "data": [{"title": "Bleach"}]
    }

    response = client.get("/suggestions?query=bleach")
    data = response.get_json()
    print(data)

    assert response.status_code == 200
    assert data["data"][0]["title"] == "Bleach"
    mock_get.assert_called_once_with("https://api.jikan.moe/v4/anime?q=bleach")
