import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components
import Home from './pages/Home'; // Home page
import Features from './pages/Features'; // Features page
import Pricing from './pages/Pricing'; // Pricing page
import StepGuide from './pages/StepGuide'; // Step Guide page
import MobileDashboard from './pages/mobile/Dashboard';
import Clients from './pages/mobile/Clients'; // Clients page
import Products from './pages/mobile/Products'; // Products page
import Messages from './pages/mobile/Messages'; // Messages page
import Tickets from './pages/mobile/Tickets'; // Tickets page
import Reports from './pages/mobile/Reports'; // Reports page
import AI from './pages/mobile/AI'; // AI page
import Profile from './pages/mobile/Profile'; // Profile page
import Settings from './pages/mobile/Settings'; // Settings page
import NotFound from './pages/NotFound'; // Custom 404 page

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Root Path */}
        <Route path="/" element={<Home />} />

        {/* Features and Pricing */}
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />

        {/* Step Guide */}
        <Route path="/step-guide" element={<StepGuide />} />

        {/* Mobile Dashboard and Subpaths */}
        <Route path="/mobile-dashboard" element={<MobileDashboard />} />
        <Route path="/mobile-dashboard/clients" element={<Clients />} />
        <Route path="/mobile-dashboard/products" element={<Products />} />
        <Route path="/mobile-dashboard/messages" element={<Messages />} />
        <Route path="/mobile-dashboard/tickets" element={<Tickets />} />
        <Route path="/mobile-dashboard/reports" element={<Reports />} />
        <Route path="/mobile-dashboard/ai" element={<AI />} />
        <Route path="/mobile-dashboard/profile" element={<Profile />} />
        <Route path="/mobile-dashboard/settings" element={<Settings />} />

        {/* Fallback for undefined paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
