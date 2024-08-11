import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="flex items-center py-4 border-b-2 border-[#594ff0] top-0 sticky z-50 bg-[#ffffff]">
        <div className="flex-grow container mx-auto px-6">
          <Link href="/">
            <h1 className="text-3xl text-[#594ff0] pl-8 font-extrabold">SmartLoans</h1>
          </Link>
        </div>
        <nav className="flex-shrink-0 text py-2 mr-4">
          <div className="container mx-auto px-6 flex items-center justify-between">
            <Link href="/" className="text-[#1c1463] mr-4 hover:underline text-lg">Home</Link>
            <a 
              href="https://github.com/EdwinNgui/Loan-Eligibility-Prediction" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#1c1463] mr-4 hover:underline text-lg"
            >
              Documentation
            </a>
            {/* Action button: Predict */}
            <Link href="/predict" className="text-[#ffffff] bg-[#594ff0] hover:bg-[#1c1463] px-4 py-3 rounded-3xl font-extrabold">Predict Now</Link>
          </div>
        </nav>
      </header>
  )
}

export default Navbar
