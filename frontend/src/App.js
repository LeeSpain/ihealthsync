import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; // Ensures pages scroll to the top on route changes
import Footer from './components/Footer'; // Footer displayed on all pages

// Public pages
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import StepGuide from './pages/StepGuide';

// Product-related pages
import ProductsHomepage from './pages/products/Homepage';
import NurseSync from './pages/products/Nurse-Sync';

// Mobile dashboard pages
import MobileDashboard from './pages/mobile/Dashboard';
import Clients from './pages/mobile/Clients';
import MobileProducts from './pages/mobile/Products';
import MobileMessages from './pages/mobile/Messages';
import Tickets from './pages/mobile/Tickets';
import Reports from './pages/mobile/Reports';
import AI from './pages/mobile/AI';
import Calendar from './pages/mobile/Calendar'; // Smart Calendar page

// Main dashboard pages
import Dashboard from './components/Dashboard';
import Products from './pages/dashboard/Products';
import Messages from './pages/dashboard/Messages';
import YourNurse from './pages/dashboard/YourNurse';
import Profile from './pages/dashboard/Profile';
import Settings from './pages/dashboard/Settings';

// Specialized dashboards
import FreeDashboard from './components/FreeDashboard';
import SubscribedDashboard from './components/SubscribedDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';

// Additional pages
import DashboardLinks from './pages/DashboardLinks';
import MembersDashboard from './pages/homepage/MembersDashboard'; // Explains the Member Dashboard
import NotFound from './pages/NotFound'; // Fallback for undefined routes

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Scroll to top on route change */}
      <div className="flex flex-col min-h-screen">
        {/* Main Content Area */}
        <div className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/step-guide" element={<StepGuide />} />
            <Route path="/productsHomepage" element={<ProductsHomepage />} />
            <Route path="/products/nurse-sync" element={<NurseSync />} />

            {/* Mobile Dashboard Routes */}
            <Route path="/mobile-dashboard" element={<MobileDashboard />} />
            <Route path="/mobile-dashboard/calendar" element={<Calendar />} />
            <Route path="/mobile-dashboard/clients" element={<Clients />} />
            <Route path="/mobile-dashboard/products" element={<MobileProducts />} />
            <Route path="/mobile-dashboard/messages" element={<MobileMessages />} />
            <Route path="/mobile-dashboard/tickets" element={<Tickets />} />
            <Route path="/mobile-dashboard/reports" element={<Reports />} />
            <Route path="/mobile-dashboard/ai" element={<AI />} />

            {/* Main Dashboard Routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/products" element={<Products />} />
            <Route path="/dashboard/messages" element={<Messages />} />
            <Route path="/dashboard/nurse" element={<YourNurse />} />
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/dashboard/settings" element={<Settings />} />

            {/* Specialized Dashboards */}
            <Route path="/free-dashboard" element={<FreeDashboard />} />
            <Route path="/member-dashboard" element={<SubscribedDashboard />} />
            <Route path="/member-dashboard-info" element={<MembersDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />

            {/* Utility Routes */}
            <Route path="/dashboards" element={<DashboardLinks />} />
            <Route path="*" element={<NotFound />} /> {/* Catch-all for undefined routes */}
          </Routes>
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
