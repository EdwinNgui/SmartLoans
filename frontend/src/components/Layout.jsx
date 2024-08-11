import React from 'react';
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main> {/* Content passes through here */}
          {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
