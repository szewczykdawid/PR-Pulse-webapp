import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SupportPage from './pages/SupportPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<SupportPage />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<TermsOfService />} />
      </Route>
    </Routes>
  );
}

export default App;
