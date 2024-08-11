import React from 'react';
import Image from 'next/image'; // Import Image from next/image
import LoanImage from '../assets/Home_Loan.jpg'; // Correctly import the image

const Home = () => {
  return (
    <div className='flex-grow bg-gray-100'>
      {/* Box 1 */}
      <div className='flex bg-[#594ff0] text-white overflow-hidden px-20'>
        {/* Left Side */}
        <div className='flex-1 py-16 px-8'>
          <h1 className="text-4xl font-extrabold mb-6">Welcome to SmartLoans</h1>
          <p className="text-lg mb-6">
            Discover the power of advanced algorithms to determine your loan eligibility with precision and ease.
          </p>
          <p className="text-lg mb-6">
            Our tool leverages the latest in machine learning and data analysis to provide you with accurate predictions and insights.
          </p>
          <p className="text-lg mb-6">
            Get started now and find out if you qualify for the loan you need to achieve your financial goals.
          </p>
          <div className='mt-8'>
            <a href="/predict" className="bg-white text-[#594ff0] py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
              Check Eligibility
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className='relative flex-1 h-96'> {/* Set height as needed */}
          <Image 
            src={LoanImage} // Use the imported image
            alt="Loan Eligibility"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </div>
      </div>

      {/* Additional Box */}
      <div className='bg-[#594ff0] text-white py-16 px-8 rounded-lg shadow-lg my-16'>
        <div className='container mx-auto max-w-4xl'>
          <h1 className="text-4xl font-extrabold mb-6">Welcome to Loan Eligibility Prediction</h1>
          <p className="text-lg mb-6">
            Discover the power of advanced algorithms to determine your loan eligibility with precision and ease.
          </p>
          <p className="text-lg mb-6">
            Our tool leverages the latest in machine learning and data analysis to provide you with accurate predictions and insights.
          </p>
          <p className="text-lg mb-6">
            Get started now and find out if you qualify for the loan you need to achieve your financial goals.
          </p>
          <div className='mt-8'>
            <a href="/predict" className="bg-white text-[#594ff0] py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
              Check Eligibility
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
