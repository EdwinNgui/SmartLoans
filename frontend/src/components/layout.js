import React from 'react';
import Predict from './predict';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-blue-500 text-white py-4 shadow-md">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold">Loan Eligibility Prediction</h1>
        </div>
      </header>
      <main className="flex-grow p-6">
        <div className="container mx-auto max-w-4xl">
          <Predict /> {/* Render the Predict component */}
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Your Company</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
