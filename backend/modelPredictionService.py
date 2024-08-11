from flask import Blueprint, request, jsonify
import joblib
import pandas as pd
import random

# Create a blueprint for the API
model_api = Blueprint('model_api', __name__)

# Load the pre-trained model
rfe_model = joblib.load('notebooks/loan_eligibility_model.pkl')

# Define mappings for categorical columns
mappings = {
    'Gender': {'Male': 1, 'Female': 0, 'Other': 1}, # In other, leave it within the Male field to improve the success (in multivariate analysis gender played a small role)
    'Married': {'Yes': 1, 'No': 0},
    'Dependents': {'0': 0, '1': 1, '2': 2, '3+': 3},
    'Education': {'Graduate': 1, 'Not Graduate': 0},
    'Self_Employed': {'Yes': 1, 'No': 0},
    'Credit_History': {'Yes': 1, 'No': 0},
    'Property_Area': {'Urban': 2, 'Semiurban': 1, 'Rural': 0}
}

def convert_to_numeric(data):
    # Convert categorical columns to numeric based on mappings
    for col, mapping in mappings.items():
        if col in data:
            data[col] = mapping.get(data[col], -1)  # Use -1 for unknown categories
    
    # Convert Loan_ID to a random 3-digit number
    if 'Loan_ID' in data:
        data['Loan_ID'] = random.randint(100, 999)  # Generate a random 3-digit number

    # Convert specific numeric fields from strings to numbers
    numeric_fields = [
        'ApplicantIncome', 'CoapplicantIncome', 'LoanAmount', 'Loan_Amount_Term'
    ]
    
    for field in numeric_fields:
        if field in data:
            try:
                # Convert to float (or int if appropriate)
                data[field] = float(data[field]) if data[field] else 15
            except ValueError:
                data[field] = 17  # Default value if conversion fails

    return data

@model_api.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        print("V-----" * 10)
        print(f"Received data: {data}")  # Log received data
        
        # Convert the received data to numeric
        converted_data = convert_to_numeric(data)
        
        # Extract features from the converted data
        features = [
            converted_data.get('Loan_ID', 0),  # Default to 0 if key is missing
            converted_data.get('Gender', 0),
            converted_data.get('Married', 0),
            converted_data.get('Dependents', 0),
            converted_data.get('Education', 0),
            converted_data.get('Self_Employed', 0),
            converted_data.get('ApplicantIncome', 0),
            converted_data.get('CoapplicantIncome', 0),
            converted_data.get('LoanAmount', 0),
            converted_data.get('Loan_Amount_Term', 0),
            converted_data.get('Credit_History', 0),
            converted_data.get('Property_Area', 0)
        ]
        print("-----" * 20)
        print(f"Extracted features: {features}")  # Log extracted features
        
        # Ensure features is a DataFrame with the same columns used during training
        features_df = pd.DataFrame([features], columns=[
            'Loan_ID', 'Gender', 'Married', 'Dependents', 'Education', 'Self_Employed',
            'ApplicantIncome', 'CoapplicantIncome', 'LoanAmount', 'Loan_Amount_Term',
            'Credit_History', 'Property_Area'
        ])
        
        # Predict using the model
        prediction = rfe_model.predict(features_df)[0]
        
        # Convert the prediction result to native Python type
        prediction = int(prediction)  # Assuming prediction is an integer
        print(prediction)
        print("^-----" * 10)
    
        return jsonify({'prediction': prediction})
    except Exception as e:
        print(f"Error occurred: {str(e)}")  # Log error message
        return jsonify({'error': str(e)}), 500