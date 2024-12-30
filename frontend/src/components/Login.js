import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'; // Ensure the Header component is correctly imported

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });

      // Save the JWT token to localStorage
      localStorage.setItem('token', response.data.token);

      // Redirect to the dashboard
      navigate('/dashboard');
    } catch (err) {
      // Set error message if login fails
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E5E5E5] via-[#F0F4F8] to-[#D6E6F2] flex flex-col">
      {/* Static Header */}
      <Header />

      {/* Login Form */}
      <div className="flex-grow flex items-center justify-center px-6">
        <div className="bg-[#008B8B] rounded-2xl p-8 shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-white text-center mb-6">Login to Your Account</h2>
          
          {error && (
            <p className="text-[#FF7F50] text-center mb-4">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF7F50] hover:bg-[#FF6347] text-white py-2 rounded-lg font-semibold transition-all"
            >
              Login
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-white text-sm">
              Don't have an account? <a href="/signup" className="text-[#FF7F50] hover:text-[#FF6347]">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
