import React from 'react';
import Image from 'next/image'; // Import Image from next/image
import LoanImage from '../assets/Home_Loan.png'; // Correctly import the image

const Home = () => {
  return (
    <div className='flex-grow bg-gray-100'>
      {/* Hero Section */}
      <div className='flex flex-col md:flex-row bg-[#594ff0] text-white overflow-hidden px-4 sm:px-8 md:px-16 lg:px-20 py-8 md:py-16'>
        {/* Left Side */}
        <div className='flex-1 mb-8 md:mb-0 px-8 md:pr-12'>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 md:mb-6">Welcome to SmartLoans</h1>
          <p className="text-base md:text-lg mb-4 md:mb-6">
            Unlock your financial potential with SmartLoans! Our state-of-the-art algorithm simplifies <strong>loan eligibility predictions</strong>, helping you make informed financial decisions.
          </p>
          <p className="text-base md:text-lg mb-4 md:mb-6">
            Whether you're looking to buy a home, start a business, or consolidate debt, our tool offers accurate insights into your loan eligibility based on your financial profile.
          </p>
          <p className="text-base md:text-lg mb-4 md:mb-6">
            With our user-friendly platform, you can easily check your loan eligibility and explore the best options for your needs. Start now to take the first step toward achieving your financial goals.
          </p>
          <div className='mt-4 md:mt-8'>
            <a href="/predict" className="bg-white text-[#594ff0] py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
              Check Eligibility
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className='relative flex-1 h-48 md:h-96'>
          <Image 
            src={LoanImage} // Use the imported image
            alt="Loan Eligibility"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </div>
      </div>

      {/* Benefits Section */}
      <div className='bg-white py-12 md:py-16 px-6 md:px-8'>
        <div className='container mx-auto max-w-full md:max-w-4xl'>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 md:mb-6 text-center">Why Choose SmartLoans?</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            <div className='bg-[#594ff0] text-white p-4 md:p-6 rounded-lg shadow-lg'>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Instant Results</h3>
              <p className="text-base md:text-lg">
                Get immediate insights into your loan eligibility with our fast and accurate prediction tool. No need to wait days for a decision—find out right away.
              </p>
            </div>
            <div className='bg-[#594ff0] text-white p-4 md:p-6 rounded-lg shadow-lg'>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Advanced Algorithms</h3>
              <p className="text-base md:text-lg">
                Our tool uses cutting-edge machine learning algorithms to analyze your financial data and provide precise loan eligibility predictions tailored to your situation.
              </p>
            </div>
            <div className='bg-[#594ff0] text-white p-4 md:p-6 rounded-lg shadow-lg'>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">User-Friendly Interface</h3>
              <p className="text-base md:text-lg">
                Enjoy a seamless experience with our easy-to-navigate platform. No complicated processes—just straightforward insights into your loan options.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* General Benefits of Loans */}
      <div className='bg-[#f0f4f8] py-12 md:py-16 px-6 md:px-8'>
        <div className='container mx-auto max-w-full md:max-w-4xl'>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 md:mb-6 text-center">Benefits of Loans</h2>
          <p className="text-base md:text-lg mb-4 md:mb-6">
            Loans can be a powerful tool for achieving your financial objectives. Here are some of the key benefits:
          </p>
          <ul className='list-disc list-inside text-base md:text-lg mb-4 md:mb-6'>
            <li><strong>Access to Capital:</strong> Loans provide the necessary funds to make significant investments, whether it's buying a home, starting a business, or covering unexpected expenses.</li>
            <li><strong>Flexibility:</strong> Choose from various loan types and terms to match your financial situation and goals. With flexible repayment options, you can manage your budget more effectively.</li>
            <li><strong>Build Credit:</strong> Successfully repaying a loan helps build your credit history and improve your credit score, making it easier to secure favorable terms for future loans.</li>
            <li><strong>Opportunities for Growth:</strong> Loans enable you to take advantage of opportunities that might otherwise be out of reach, such as educational investments or business expansion.</li>
            <li><strong>Emergency Funds:</strong> Having access to loan funds can be crucial during emergencies, providing you with a safety net when unexpected expenses arise.</li>
          </ul>
          <p className="text-base md:text-lg">
            Explore how SmartLoans can help you leverage these benefits and achieve your financial dreams. Start by checking your loan eligibility today!
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className='bg-[#594ff0] text-white py-12 md:py-16 px-6 md:px-8'>
        <div className='container mx-auto max-w-full md:max-w-4xl text-center'>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 md:mb-6">Ready to Get Started?</h2>
          <p className="text-base md:text-lg mb-4 md:mb-6">
            Don’t wait to unlock your financial potential. Use our loan prediction tool to get accurate eligibility results and find the best loan options for you.
          </p>
          <div className='mt-4 md:mt-8'>
            <a href="/predict" className="bg-white text-[#594ff0] py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
              Check Eligibility Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
