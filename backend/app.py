from flask import Flask
from flask_cors import CORS
from modelPredictionService import model_api
import os

app = Flask(__name__)
CORS(app)  # Allow all origins by default
app.register_blueprint(model_api, url_prefix='/api')

# This block is for running the app locally for development purposes
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 5000)), debug=True)
