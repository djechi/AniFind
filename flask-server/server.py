from flask import Flask
from flask_cors import CORS
from homePage import homeBP
from recommendPage import recommendBP

app = Flask(__name__)
CORS(app)

app.register_blueprint(homeBP)
app.register_blueprint(recommendBP)

if __name__ == "__main__":
    app.run(debug=True)