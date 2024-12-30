import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './components/Login'; // Login page
import Home from './pages/Home'; // Home page
import FeaturesPage from './pages/Features'; // Features page
import Header from './components/Header'; // Default header
import DashboardHeader from './components/DashboardHeader'; // Dashboard-specific header
import FreeDashboard from './components/FreeDashboard'; // Free Dashboard page
import SubscribedDashboard from './components/SubscribedDashboard'; // Subscribed Dashboard page
import StepGuide from './pages/StepGuide'; // Step Guide page
import Pricing from './pages/Pricing'; // Pricing page

const App = () => {
  // State for toggling subscription status
  const [userSubscribed, setUserSubscribed] = useState(false); // Default to Free Dashboard

  return (
    <Router>
      <AppContent userSubscribed={userSubscribed} setUserSubscribed={setUserSubscribed} />
    </Router>
  );
};

const AppContent = ({ userSubscribed, setUserSubscribed }) => {
  const location = useLocation();

  // Check if the current path is a dashboard route
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <div className="min-h-screen">
      {/* Render the appropriate header */}
      {isDashboard ? <DashboardHeader /> : <Header />}

      <main className="pt-16 relative">
        <Routes>
          {/* Routes for different pages */}
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/login" element={<Login />} /> {/* Login page */}
          
          {/* Conditional routing for the dashboard */}
          <Route 
            path="/dashboard" 
            element={userSubscribed ? <SubscribedDashboard /> : <FreeDashboard />} 
          />

          <Route path="/features" element={<FeaturesPage />} /> {/* Features page */}
          <Route path="/step-guide" element={<StepGuide />} /> {/* Step Guide page */}
          <Route path="/pricing" element={<Pricing />} /> {/* Pricing page */}
        </Routes>

        {/* Toggle button for testing subscription */}
        {isDashboard && (
          <button 
            onClick={() => setUserSubscribed(!userSubscribed)} // Toggle subscription status
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              padding: '10px 20px',
              backgroundColor: '#FF7F50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            {userSubscribed ? 'Switch to Free Dashboard' : 'Switch to Subscribed Dashboard'}
          </button>
        )}
      </main>
    </div>
  );
};

export default App;
