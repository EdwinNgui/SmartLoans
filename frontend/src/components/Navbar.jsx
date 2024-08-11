import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Disable scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <div className="flex items-center py-4 border-b-2 border-[#594ff0] sticky top-0 z-50 bg-[#ffffff]">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-0 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl sm:text-3xl text-[#594ff0] font-extrabold">SmartLoans</h1>
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-[#1c1463] hover:underline text-base sm:text-lg">Home</Link>
            <a 
              href="https://github.com/EdwinNgui/Loan-Eligibility-Prediction" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#1c1463] hover:underline text-base sm:text-lg"
            >
              Documentation
            </a>
            <Link href="/predict" className="text-[#ffffff] bg-[#594ff0] hover:bg-[#1c1463] px-4 py-2 rounded-3xl font-extrabold">
              Predict Now
            </Link>
          </nav>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-[#594ff0] focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <>
        <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleMenu}></div>
        <div className="fixed top-0 left-0 w-full h-full bg-[#ffffff] flex flex-col items-start p-6 z-50 pl-8">
          
          <div className="flex justify-between items-center w-full mb-6">
            <div></div> {/* This empty div will push the button to the right */}
            <button onClick={toggleMenu} className="text-[#594ff0] text-2xl">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <div className="flex flex-col items-start space-y-8">
            <Link href="/" className="text-[#1c1463] font-semibold text-3xl" onClick={toggleMenu}>Home</Link>
            <a 
              href="https://github.com/EdwinNgui/Loan-Eligibility-Prediction" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#1c1463] font-semibold text-3xl" 
              onClick={toggleMenu}
            >
              Documentation
            </a>
            <Link href="/predict" className="text-[#ffffff] bg-[#594ff0] hover:bg-[#1c1463] px-4 py-2 rounded-3xl text-3xl font-extrabold" onClick={toggleMenu}>
              Predict Now
            </Link>
          </div>
        </div>
      </>
      )}
    </div>
  );
}

export default Navbar;
