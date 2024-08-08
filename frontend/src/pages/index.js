import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../components/layout'; // Import the main layout component

function HomePage() {
  return (
    <React.StrictMode>
      <Layout />
      {/* No need for `document` manipulation */}
    </React.StrictMode>
  );
}

export default HomePage;