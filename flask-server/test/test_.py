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

    data = response.get_json()
    assert data["trending"][0]["title"] == "Trending #1"
    assert data["rating"][0]["title"] == "Top Rated #1"

    assert mock_get.call_count == 2