import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global styles
import App from './App'; // Main App component
import reportWebVitals from './reportWebVitals'; // Performance metrics
import { CartProvider } from './context/CartContext'; // Context provider for cart

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* Provide CartContext to the entire app */}
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);

// Measure performance
reportWebVitals();
