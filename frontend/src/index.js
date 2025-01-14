import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global styles
import App from './App'; // Correct import for the default export
import reportWebVitals from './reportWebVitals'; // Performance metrics
import { CartProvider } from './context/CartContext'; // Context provider for cart

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();
