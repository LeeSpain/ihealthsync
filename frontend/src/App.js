import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // Import CartProvider
import Login from './components/Login';
import Home from './pages/Home';
import FeaturesPage from './pages/Features';
import Header from './components/Header';
import DashboardHeader from './components/DashboardHeader';
import FreeDashboard from './components/FreeDashboard';
import SubscribedDashboard from './components/SubscribedDashboard';
import StepGuide from './pages/StepGuide';
import Pricing from './pages/Pricing';
import Products from './pages/dashboard/Products';
import SettingsPage from './pages/dashboard/Settings';
import ProfilePage from './pages/dashboard/Profile';
import MessagesPage from './pages/dashboard/Messages'; // Added Messages Page
import MedicationDispenserPage from './pages/dashboard/products/MedicationDispenserPage'; // Medication Dispenser page
import HeartRateMonitorPage from './pages/dashboard/products/HeartRateMonitorPage'; // Heart Rate Monitor page
import GuardianButtonPage from './pages/dashboard/products/GuardianButtonPage'; // Guardian Button page
import ProductsPage from './pages/shop/Products.js';
import YourNurse from './pages/dashboard/YourNurse'; // Import Your Nurse page
import AdminDashboard from './pages/admin/AdminDashboard'; // Admin Dashboard
import UserManagement from './pages/admin/UserManagement'; // Admin User Management
import ServiceManagement from './pages/admin/ServiceManagement'; // Admin Service Management
import Reports from './pages/admin/Reports'; // Admin Reports
import Settings from './pages/admin/Settings'; // Admin Settings
import Logs from './pages/admin/Logs'; // Admin Logs

const App = () => {
  const [userSubscribed, setUserSubscribed] = useState(false); // Manage user subscription status

  return (
    <Router>
      {/* Wrap the entire application with the CartProvider */}
      <CartProvider>
        <AppContent userSubscribed={userSubscribed} setUserSubscribed={setUserSubscribed} />
      </CartProvider>
    </Router>
  );
};

const AppContent = ({ userSubscribed, setUserSubscribed }) => {
  const location = useLocation(); // Get the current path
  const isDashboard = location.pathname.startsWith('/dashboard'); // Check if user is in dashboard
  const isAdmin = location.pathname.startsWith('/admin'); // Check if user is in admin panel

  return (
    <div className="min-h-screen">
      {/* Conditionally render the correct header */}
      {isDashboard ? <DashboardHeader /> : isAdmin ? null : <Header />}

      <main className="pt-16 relative">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/step-guide" element={<StepGuide />} />
          <Route path="/pricing" element={<Pricing />} />
          
          {/* Protected Routes (Dashboard) */}
          <Route path="/dashboard" element={userSubscribed ? <SubscribedDashboard /> : <FreeDashboard />} />
          <Route path="/dashboard/products" element={<Products />} />
          <Route path="/dashboard/settings" element={<SettingsPage />} />
          <Route path="/dashboard/profile" element={<ProfilePage />} />
          <Route path="/dashboard/messages" element={<MessagesPage />} /> {/* Added Messages Route */}
          <Route path="/dashboard/nurse" element={<YourNurse />} /> {/* Added Your Nurse Route */}

          {/* Product Management Pages */}
          <Route path="/dashboard/products/medDispenser" element={<MedicationDispenserPage />} />
          <Route path="/dashboard/products/heartMonitor" element={<HeartRateMonitorPage />} />
          <Route path="/dashboard/products/guardianButton" element={<GuardianButtonPage />} />

          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/admin/services" element={<ServiceManagement />} />
          <Route path="/admin/reports" element={<Reports />} />
          <Route path="/admin/settings" element={<Settings />} />
          <Route path="/admin/logs" element={<Logs />} />
        </Routes>

        {/* Subscription Toggle for Dashboard */}
        {isDashboard && (
          <button 
            onClick={() => setUserSubscribed(!userSubscribed)} 
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
