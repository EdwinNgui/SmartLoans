# backend/app.py

from flask import Flask
from flask_cors import CORS
from modelPredictionService import model_api

app = Flask(__name__)
CORS(app)  # Allow all origins by default
app.register_blueprint(model_api, url_prefix='/api')

if __name__ == '__main__':
    app.run(debug=True)
