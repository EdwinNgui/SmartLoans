import React from 'react';
import Layout from '../components/Layout.jsx';
import "../globals.css"

// Applies global application-level customizations
function App({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.StrictMode>
  );
}

export default App;