from flask import Flask, jsonify
from flask_cors import CORS
from homePage import homeBP
from recommendPage import recommendBP
import tracemalloc

app = Flask(__name__)
CORS(app)

app.register_blueprint(homeBP)
app.register_blueprint(recommendBP)

tracemalloc.start()

@app.route('/memory-usage')
def mem_screenshot():
    ss = tracemalloc.take_snapshot()
    stats = ss.statistics('lineno')[:10] # gives statistics for 10 lines with most memory usage

    result = {
        "tot_memory_mb":sum(stat.size for stat in stats) / 1024 / 1024, # kb -> mb
        "details":[]
    }

    for stat in stats:
        result["details"].append({
            "file": stat.traceback[0].filename,
            "line": stat.traceback[0].lineno,
            "memory_kb": stat.size / 1024, # bytes -> kb
            "allocations": stat.count
        })

    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)