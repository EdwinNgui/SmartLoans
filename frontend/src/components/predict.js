import React, { useState } from 'react';
import { getPrediction } from '../helpers/apiPredictionHandler'; // Import the API helper function

const Predict = () => {
  const [inputData, setInputData] = useState({});
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await getPrediction(inputData); // Call API helper function
      setPrediction(result); // Set prediction result
    } catch (err) {
      setError('Error fetching prediction');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Predict Loan Eligibility</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="feature1">
              Feature 1 (Loan Amount in Dollars):
            </label>
            <input
              type="text"
              name="feature1"
              id="feature1"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="feature2">
              Feature 2 (Credit Score 0-900):
            </label>
            <input
              type="text"
              name="feature2"
              id="feature2"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Predict
          </button>
        </form>
        {prediction && (
          <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg">
            <strong>Prediction:</strong> {prediction}
          </div>
        )}
        {error && (
          <div className="mt-6 p-4 bg-red-100 text-red-800 rounded-lg">
            <strong>Error:</strong> {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default Predict;
