# backend/modelPredictionService.py

from flask import Blueprint, request, jsonify
import joblib

# Create a blueprint for the API
model_api = Blueprint('model_api', __name__)

# Load the pre-trained model
model = joblib.load('models/loan_eligibility_model.pkl')

@model_api.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        # Extract features from the request data
        features = [data['feature1'], data['feature2'], ...]  # Adjust according to your model
        prediction = model.predict([features])[0]
        return jsonify({'prediction': prediction})
    except Exception as e:
        return jsonify({'error': str(e)}), 500
