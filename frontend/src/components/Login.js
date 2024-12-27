import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Use useNavigate instead of useHistory

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);  // To toggle password visibility
  const navigate = useNavigate();  // Use useNavigate for redirecting

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to /api/login (Backend URL)
      const response = await axios.post('http://localhost:5000/api/login', { email, password });

      // Store JWT token and redirect to dashboard
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');  // Use navigate instead of history.push
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login to Your Account</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-6 relative">
            <input
              type={showPassword ? 'text' : 'password'}  // Toggle between text and password type
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <span 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}  // Toggle password visibility
            >
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </div>
          <button
            type="submit"
            className="w-full bg-[#008B8B] text-white py-3 rounded-md hover:bg-[#006f6f] transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm">Don't have an account? <a href="/signup" className="text-[#008B8B]">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
