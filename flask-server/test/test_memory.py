import sys, os, pytest, tracemalloc
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from server import app
from homePage import trendingAnime, topRatingsAnime
from recommendPage import recommendedAnime, suggestionsAnime


@pytest.fixture(autouse=True)
def isolate_tracemalloc():
    tracemalloc.start()
    yield
    tracemalloc.stop()

def test_trending_memory():
    snapshot1 = tracemalloc.take_snapshot()
    trendingAnime()
    snapshot2 = tracemalloc.take_snapshot()

    stats = snapshot2.compare_to(snapshot1, 'lineno')
    for stat in stats[:5]:
        print(stat,"\n")

def test_toprated_memory():
    snapshot1 = tracemalloc.take_snapshot()
    topRatingsAnime()
    snapshot2 = tracemalloc.take_snapshot()

    stats = snapshot2.compare_to(snapshot1, 'lineno')
    for stat in stats[:5]:
        print(stat,"\n")

def test_recommended_memory():
    with app.test_request_context("/recommendations?anime_id=1"):
        snapshot1 = tracemalloc.take_snapshot()
        recommendedAnime()
        snapshot2 = tracemalloc.take_snapshot()

        stats = snapshot2.compare_to(snapshot1, 'lineno')
        for stat in stats[:5]:
            print(stat,"\n")

def test_suggestions_memory():
    # Simulate a Flask request context for request.args['query']
    with app.test_request_context("/suggestions?query=bleach"):
        snapshot1 = tracemalloc.take_snapshot()
        suggestionsAnime()
        snapshot2 = tracemalloc.take_snapshot()

        stats = snapshot2.compare_to(snapshot1, 'lineno')
        for stat in stats[:5]:
            print(stat,"\n")
