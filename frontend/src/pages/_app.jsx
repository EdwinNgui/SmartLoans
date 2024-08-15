import React from 'react';
import Layout from '../components/Layout.jsx';
import "../globals.css"

import Head from "next/head"

// Applies global application-level customizations
function App({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Head>
        <link rel="icon" href="/FaviconLogo.ico" />
        <title>SmartLoans | Loan Prediction Service</title>       
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.StrictMode>
  );
}

export default App;