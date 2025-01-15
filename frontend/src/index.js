// Importing React and ReactDOM for rendering the app
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing global styles
import './index.css'; // This file contains global CSS styles for the app

// Importing the main App component
import App from './App'; // Default export of the main application component

// Importing reportWebVitals for performance monitoring
import reportWebVitals from './reportWebVitals'; // Optional: used to measure app performance

// Importing CartProvider for providing cart context to the app
import { CartProvider } from './context/CartContext'; // Provides global state for shopping cart functionality

// Getting the root element from the HTML file to mount the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the app within the root element
root.render(
  <React.StrictMode>
    {/* Wrapping the app with CartProvider to manage cart state */}
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);

// Running reportWebVitals for measuring performance metrics (Optional)
reportWebVitals();
