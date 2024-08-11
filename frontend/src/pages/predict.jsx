import React, { useState } from 'react';
import { getPrediction } from '../helpers/apiPredictionHandler'; // Import the API helper function
import Login from "../components/Login"

const Predict = () => {
  const [inputData, setInputData] = useState({
    Loan_ID: 'LP003001', // Pre-fill with starting value
    Gender: 'Male',
    Married: 'Yes',
    Dependents: '',
    Education: 'Not Graduate',
    Self_Employed: 'No',
    ApplicantIncome: '',
    CoapplicantIncome: '',
    LoanAmount: '',
    Loan_Amount_Term: '',
    Credit_History: '',
    Property_Area: 'Urban',
  });
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
      console.log(result); // Check the structure of the response
      setPrediction(result.prediction); // Extract and set prediction result
    } catch (err) {
      setError('Error fetching prediction');
    }
  };


  return (
    <>
      <Login />
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
        <div>
        </div>
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Predict Loan Eligibility</h2>
          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="Loan_ID">
                Loan ID:
              </label>
              <input
                type="text"
                name="Loan_ID"
                id="Loan_ID"
                value={inputData.Loan_ID}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="Gender">
                Gender:
              </label>
              <select
                name="Gender"
                id="Gender"
                value={inputData.Gender}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="Married">
                Married:
              </label>
              <select
                name="Married"
                id="Married"
                value={inputData.Married}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="Dependents">
                Dependents:
              </label>
              <select
                name="Dependents"
                id="Dependents"
                value={inputData.Dependents}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3+">3+</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="Education">
                Education:
              </label>
              <select
                name="Education"
                id="Education"
                value={inputData.Education}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
              >
                <option value="Not Graduate">Not Graduate</option>
                <option value="Graduate">Graduate</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="Self_Employed">
                Self Employed:
              </label>
              <select
                name="Self_Employed"
                id="Self_Employed"
                value={inputData.Self_Employed}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="ApplicantIncome">
                Applicant Monthly Income:
              </label>
              <input
                type="text"
                name="ApplicantIncome"
                id="ApplicantIncome"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
                placeholder='Enter amount (e.g., 12000 for $12,000)'
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="CoapplicantIncome">
                Coapplicant Monthly Income:
              </label>
              <input
                type="text"
                name="CoapplicantIncome"
                id="CoapplicantIncome"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
                placeholder='Enter amount (e.g., 8000 for $8000)'
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="LoanAmount">
                Loan Amount:
              </label>
              <input
                type="text"
                name="LoanAmount"
                id="LoanAmount"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
                placeholder='Enter amount in thousands (e.g., 60 for $60,000)'
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="Loan_Amount_Term">
                Loan Amount Term:
              </label>
              <input
                type="text"
                name="Loan_Amount_Term"
                id="Loan_Amount_Term"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
                placeholder='Enter length in months (e.g., 360 for 360 months)'
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="Credit_History">
                Credit History (0 or 1):
              </label>
              <select
                name="Credit_History"
                id="Credit_History"
                value={inputData.Credit_History}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="Property_Area">
                Property Area:
              </label>
              <select
                name="Property_Area"
                id="Property_Area"
                value={inputData.Property_Area}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
              >
                <option value="Urban">Urban</option>
                <option value="Semiurban">Semiurban</option>
                <option value="Rural">Rural</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Predict
            </button>
          </form>
          {prediction !== null && (
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
    </>
  );
};

export default Predict;
