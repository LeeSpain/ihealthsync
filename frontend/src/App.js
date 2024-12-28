// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';  // Login component
import Dashboard from './components/Dashboard';  // Dashboard after login
import Home from './pages/Home';  // Correct path to the Home page component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Homepage will be at the root / */}
        <Route path="/" element={<Home />} />
        
        {/* Login page at /login */}
        <Route path="/login" element={<Login />} />
        
        {/* Dashboard page (only accessible after login) */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
