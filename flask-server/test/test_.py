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
    assert mock_get.call_count == 2

@patch("recommendPage.requests.get")
def test_recommend_page(mock_get,client):
    mock_get.return_value.json.side_effect = [
        {"data": [{"title": "Recommend #1"}]},
        {"data": [{"title": "Bleach"}]}
    ]

    response = client.get("/recommend?q=bleach")
    data = response.get_json()
    print(data)

    assert response.status_code == 200
    assert data["Recommendations"][0]["title"] == "Recommend #1"
    assert data["Search Result"][0]["title"] == "Bleach"
    assert mock_get.call_count == 2