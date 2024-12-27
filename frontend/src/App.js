import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Features from './pages/Features';
import StepGuide from './pages/StepGuide';
import Pricing from './pages/Pricing';


const App = () => {
 return (
   <Router>
     <Header />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<Signup />} />
       <Route path="/features" element={<Features />} />
       <Route path="/step-guide" element={<StepGuide />} />
       <Route path="/pricing" element={<Pricing />} />
     </Routes>
   </Router>
 );
};

export default App;