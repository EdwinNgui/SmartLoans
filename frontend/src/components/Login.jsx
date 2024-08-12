import React from 'react';

const Login = () => {
  const handleGoogleAuth = () => {
    // Handle Google authentication logic here
    console.log('Google Auth');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>
        <p className="mb-6 text-center text-gray-600">
          Use your Google account to continue.
        </p>
        <button
          onClick={handleGoogleAuth}
          className="w-full bg-[#5c4cf4] text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-[#1c1463] transition duration-300"
        >
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
