import React from 'react';

const Result = ({ prediction }) => {
  return (
    <div>
      {prediction !== null && (
        <div
          className={`mt-8 p-4 text-white rounded-md text-center ${
            prediction === 1 ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          <strong>Prediction:</strong> {prediction === 1 ? 'Approved' : 'Denied'}
        </div>
      )}
      
      <div className={`mt-8 p-4 text-white rounded-md text-center bg-[#594ff0]`}>
        {prediction === 1 ? (
            <div className="">
              <p>Congratulations on the predicted approval! 🎉</p>
              <p>Here are your next steps:</p>
              <ul className="list-disc list-inside text-left mt-2">
                <li>Start planning your homeownership journey or business venture.</li>
                <li>Consult with a financial advisor to manage your finances effectively.</li>
                <li>Ensure that all required documentation is in order for the next steps.</li>
              </ul>
              <p className="mt-4">Good luck, and enjoy this exciting journey ahead!</p>
            </div>
          ) : (
            <div className="">
              <p>Don't be discouraged by this decision. You can still improve! 💪</p>
              <p>Consider these tips to improve your chances next time:</p>
              <ul className="list-disc list-inside text-left mt-2">
                <li>Work on building your credit score by paying off debts and keeping balances low.</li>
                <li>Consider ways to increase your income, such as a side job or further education.</li>
                <li>Create a detailed budget to manage your finances more effectively.</li>
              </ul>
              <p className="mt-4">Stay positive and keep working towards your goals!</p>
            </div>
          )}
      </div>
    </div>
  );
};

export default Result;
