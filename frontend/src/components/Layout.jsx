import React from 'react';
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header and Navbar */}
      <Navbar />

      {/* Content passes through here */}
      <main>
          {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Edwin Ngui. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
