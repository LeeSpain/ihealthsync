import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components
import Home from './pages/Home'; // Home component for '/'
import MobileDashboard from './pages/mobile/Dashboard';
import Clients from './pages/mobile/Clients';
import Products from './pages/mobile/Products';
import Messages from './pages/mobile/Messages';
import Tickets from './pages/mobile/Tickets';
import Reports from './pages/mobile/Reports';
import AI from './pages/mobile/AI';
import Profile from './pages/mobile/Profile';
import Settings from './pages/mobile/Settings';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Root path */}
        <Route path="/" element={<Home />} />

        {/* Mobile Dashboard */}
        <Route path="/mobile-dashboard" element={<MobileDashboard />} />

        {/* Additional Pages */}
        <Route path="/mobile-dashboard/clients" element={<Clients />} />
        <Route path="/mobile-dashboard/products" element={<Products />} />
        <Route path="/mobile-dashboard/messages" element={<Messages />} />
        <Route path="/mobile-dashboard/tickets" element={<Tickets />} />
        <Route path="/mobile-dashboard/reports" element={<Reports />} />
        <Route path="/mobile-dashboard/ai" element={<AI />} />
        <Route path="/mobile-dashboard/profile" element={<Profile />} />
        <Route path="/mobile-dashboard/settings" element={<Settings />} />

        {/* Fallback for unknown paths */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
