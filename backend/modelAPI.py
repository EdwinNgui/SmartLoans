# Import necessary libraries
from flask import Flask, request, jsonify
import joblib
import numpy as np

# Create a Flask application instance
app = Flask(__name__)

# Load the trained model
model = joblib.load('notebooks/loan_eligibility_model.pkl')

# Define a route for making predictions
@app.route('/predict', methods=['POST'])
def predict():
    # Get JSON data from the POST request
    data = request.json
    
    # Convert the features list from JSON to a numpy array
    features = np.array(data['features'])
    
    # Make a prediction using the loaded model
    prediction = model.predict([features])
    
    # Return the prediction as a JSON response
    return jsonify({'prediction': int(prediction[0])})

# Run the Flask application
if __name__ == '__main__':
    app.run(debug=True)
