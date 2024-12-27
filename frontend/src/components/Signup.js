import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Use useNavigate to programmatically navigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sending the signup details to the backend
      const response = await axios.post('http://localhost:5000/api/signup', { email, password });

      // On successful signup, store the token and navigate to dashboard
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');  // Redirect to the dashboard after signup
    } catch (err) {
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
