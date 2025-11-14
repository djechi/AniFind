from flask import Flask
from homePage import homeBP

app = Flask(__name__)

#Test
@app.route("/helloWorld")
def members():
    return "Hello World"

app.register_blueprint(homeBP)

if __name__ == "__main__":
    app.run(debug=True)