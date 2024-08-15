import React, { useState } from 'react';
import { getPrediction } from '../helpers/apiPredictionHandler'; // Import the API helper function
import Results from "../components/Result"
import { GridLoader } from "react-spinners";

const Predict = () => {
  const [inputData, setInputData] = useState({
    Loan_ID: 'LP003001', // Pre-Filled
    Gender: '',
    Married: '',
    Dependents: '',
    Education: '',
    Self_Employed: '',
    ApplicantIncome: '',
    CoapplicantIncome: '',
    LoanAmount: '',
    Loan_Amount_Term: '',
    Credit_History: '',
    Property_Area: '',
  });
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await getPrediction(inputData); // Call API helper function
      setPrediction(result.prediction); // Extract and set prediction result
    } catch (err) {
      setError('Error fetching prediction');
    } finally {
      setIsLoading(false); //Stop loading spinner
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-6 py-12">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Loan Eligibility Prediction</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="Gender">Gender</label>
              <select
                name="Gender"
                id="Gender"
                value={inputData.Gender}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
                required
              >
                <option value="" disabled>Please select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="Married">Married</label>
              <select
                name="Married"
                id="Married"
                value={inputData.Married}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
                required
              >
                <option value="" disabled>Please select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="Dependents">Dependents</label>
              <select
                name="Dependents"
                id="Dependents"
                value={inputData.Dependents}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
                required
              >
                <option value="" disabled>Please select</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3+">3+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="Education">Education</label>
              <select
                name="Education"
                id="Education"
                value={inputData.Education}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
                required
              >
                <option value="" disabled>Please select</option>
                <option value="Not Graduate">Not Graduate</option>
                <option value="Graduate">Graduate</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="Self_Employed">Self Employed</label>
              <select
                name="Self_Employed"
                id="Self_Employed"
                value={inputData.Self_Employed}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
                required
              >
                <option value="" disabled>Please select</option>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="ApplicantIncome">Applicant Monthly Income</label>
              <input
                type="text"
                name="ApplicantIncome"
                id="ApplicantIncome"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
                placeholder="Enter amount (e.g., 12000 for $12,000)"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="CoapplicantIncome">Coapplicant Monthly Income</label>
              <input
                type="text"
                name="CoapplicantIncome"
                id="CoapplicantIncome"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
                placeholder="Enter amount (e.g., 8000 for $8,000)"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="LoanAmount">Loan Amount</label>
              <input
                type="text"
                name="LoanAmount"
                id="LoanAmount"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
                placeholder="Enter amount in thousands (e.g., 60 for $60,000)"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="Loan_Amount_Term">Loan Amount Term</label>
              <input
                type="text"
                name="Loan_Amount_Term"
                id="Loan_Amount_Term"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
                placeholder="Enter length in months (e.g., 360 for 360 months)"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="Credit_History">Credit History</label>
              <select
                name="Credit_History"
                id="Credit_History"
                value={inputData.Credit_History}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
                required
              >
                <option value="" disabled>Please select</option>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="Property_Area">Property Area</label>
              <select
                name="Property_Area"
                id="Property_Area"
                value={inputData.Property_Area}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
                required
              >
                <option value="" disabled>Please select</option>
                <option value="Urban">Urban</option>
                <option value="Semiurban">Semiurban</option>
                <option value="Rural">Rural</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
            >
              Predict
            </button>
          </form>

          {/* Spinner that activates when form is submitted and LOADING only */}
          {isLoading && (
            <div className='flex flex-col justify-center items-center mt-8'>
              <GridLoader color="#594ff0" />
              <div className='mt-2 text-[#dad9db]'>
                Please wait up to one minute...
              </div>
            </div>
          )}

          {/* Results with the prediction result passed */}
          <Results prediction={prediction} />

          {error && (
            <div className="mt-8 p-4 bg-red-100 text-red-800 rounded-md text-center">
              <strong>Error:</strong> {error}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Predict;
